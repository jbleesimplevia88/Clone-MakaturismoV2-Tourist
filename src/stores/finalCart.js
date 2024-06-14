import { defineStore } from 'pinia';
import axios from 'axios';

export const useCartFinalStore = defineStore('cartFinalStore', {
  state: () => ({
    user: null,
    cartItems: [],
    deliveryFee: 50,
    vouchers: []
  }),

  actions: {
    async fetchUser() {
      try {
        const response = await axios.post('/userDetails');
        if (response && response.data) {
          this.user = JSON.parse(response.data.userdetails);
        }
        return { status: true, data: this.user };
      } catch (error) {
        if (error.response && error.response.data.message) {
          return { status: false, error: error.response.data.message };
        }
      }
    },
    async fetchCartItems() {
      try {
        if (!this.user) {
          await this.fetchUser();
        }
        const response = await axios.put(`/view-cart/${this.user.id}`);
        if (response && response.data) {
          this.cartItems = response.data.data.map(group => ({
            busid: group.busid,
            busname: group.busname,
            items: group.items.map(item => ({
              ...item,
              product_details: item.product_details[0],
              selected: false  // Ensure each item has a selected property
            }))
          }));
          console.log("Fetched cart items:", this.cartItems);

          // Adding vouchers for each shop
          this.cartItems.forEach(group => {
            const validVouchers = [
              {
                code: `DISCOUNT100_${group.busid}`,
                amount: 100.00,
                shopname: group.busname,
                validity: '2024-12-31',
                voucherImage: group.items[0]?.product_details.uploadedphotos || 'path/to/default_image.png',
                applied: false
              },
              {
                code: `DISCOUNT50_${group.busid}`,
                amount: 50.00,
                shopname: group.busname,
                validity: '2024-12-31',
                voucherImage: group.items[0]?.product_details.uploadedphotos || 'path/to/default_image.png',
                applied: false
              },
              {
                code: `DISCOUNT500_${group.busid}`,
                amount: 500.00,
                shopname: group.busname,
                validity: '2024-12-31',
                voucherImage: group.items[0]?.product_details.uploadedphotos || 'path/to/default_image.png',
                applied: false
              }
            ];

            const invalidVouchers = [
              {
                code: `INVALID200_${group.busid}`,
                amount: 200.00,
                shopname: group.busname,
                validity: '2023-12-31',
                voucherImage: group.items[0]?.product_details.uploadedphotos || 'path/to/default_image.png',
                applied: false
              },
              {
                code: `INVALID300_${group.busid}`,
                amount: 300.00,
                shopname: group.busname,
                validity: '2023-12-31',
                voucherImage: group.items[0]?.product_details.uploadedphotos || 'path/to/default_image.png',
                applied: false
              },
              {
                code: `INVALID400_${group.busid}`,
                amount: 400.00,
                shopname: group.busname,
                validity: '2023-12-31',
                voucherImage: group.items[0]?.product_details.uploadedphotos || 'path/to/default_image.png',
                applied: false
              }
            ];

            this.vouchers.push(...validVouchers, ...invalidVouchers);
          });

        }
        return { status: true, data: this.cartItems };
      } catch (error) {
        if (error.response && error.response.data.message) {
          return { status: false, error: error.response.data.message };
        }
      }
    },
    applyVoucher(voucher) {
      voucher.applied = true;
      this.updatePrices();
    },
    removeVoucher(voucher) {
      voucher.applied = false;
      this.updatePrices();
    },
    updatePrices() {
      let subTotal = 0;
      let discount = 0;

      this.cartItems.forEach(group => {
        group.items.forEach(item => {
          subTotal += item.product_details.productprice * item.quantity;
        });

        this.vouchers.forEach(voucher => {
          if (voucher.shopname === group.busname && voucher.applied) {
            discount += voucher.amount;
          }
        });
      });

      this.subTotal = subTotal.toFixed(2);
      this.discountPrice = discount.toFixed(2);
      this.finalTotal = (subTotal - discount + this.deliveryFee).toFixed(2);
    },

    async addOrUpdateCart(product) {
      try {
        if (!this.user) {
          await this.fetchUser();
        }
    
        const existingCartItem = this.cartItems.flatMap(group => group.items).find(item => item.product_id === product.id);
    
        if (existingCartItem) {
          existingCartItem.quantity = Number(existingCartItem.quantity) + Number(product.quantity);
          existingCartItem.sub_total = existingCartItem.product_details.productprice * existingCartItem.quantity;
          await this.updateCartItem(existingCartItem);
        } else {
          const newCartItem = {
            product_id: product.id,
            tourist_id: this.user.id,
            quantity: product.quantity,
            sub_total: product.productprice * product.quantity,
          };
          const response = await axios.post('/save-cart', newCartItem);
    
          if (response.data && response.data.data) {
            const productDetailsArray = response.data.data.product_details;
            const productDetails = Array.isArray(productDetailsArray) ? productDetailsArray[0] : productDetailsArray;
    
            if (!productDetails || !productDetails.business_details) {
              console.error("Business details are missing in the response data");
              return;
            }
    
            const busname = productDetails.business_details.busname;
            if (!busname) {
              console.error("Bus name is missing in the response data");
              return;
            }
    
            const group = this.cartItems.find(group => group.busname === busname);
            if (group) {
              group.items.push({
                ...response.data.data,
                product_details: productDetails,
                selected: false // Initialize selected property
              });
            } else {
              this.cartItems.push({
                busname,
                items: [{
                  ...response.data.data,
                  product_details: productDetails,
                  selected: false // Initialize selected property
                }]
              });
            }
            console.log("Saved to database:", response.data.data);
          } else {
            console.error("Failed to save to database");
          }
        }
    
        await this.fetchCartItems();
        console.log("Updated cart items:", this.cartItems);
      } catch (error) {
        console.error('Error adding or updating cart item:', error);
      }
    },
    async deleteCartItem(id) {
      try {
        await axios.delete(`/delete-cart`, { data: { ids: [id] } });
        this.cartItems = this.cartItems.map(group => ({
          ...group,
          items: group.items.filter(item => item.id !== id)
        })).filter(group => group.items.length > 0);
        console.log("Deleted cart item:", id);
      } catch (error) {
        console.error('Error deleting cart item:', error);
      }
    },
    async deleteSelectedCartItems(ids) {
      try {
        await axios.delete(`/delete-cart`, { data: { ids } });
        this.cartItems = this.cartItems.map(group => ({
          ...group,
          items: group.items.filter(item => !ids.includes(item.id))
        })).filter(group => group.items.length > 0);
        console.log("Deleted selected cart items:", ids);
      } catch (error) {
        console.error('Error deleting selected cart items:', error);
      }
    },
    async updateCartItemQuantity(productId, quantity) {
      const cartItem = this.cartItems.flatMap(group => group.items).find(item => item.product_id === productId);
      if (cartItem) {
        cartItem.quantity = quantity;
        cartItem.sub_total = cartItem.product_details.productprice * quantity;
        try {
          const response = await axios.put(`/update-cart/${cartItem.id}`, {
            quantity: cartItem.quantity,
            sub_total: cartItem.sub_total
          });
          if (response && response.data) {
            console.log("Updated in database:", response.data);
          } else {
            console.error("Failed to update in database");
          }
        } catch (error) {
          console.error('Error updating cart item:', error);
        }
      }
    },
    updateSelectedItems(items) {
      this.selectedItems = items;
    }
  }
});
