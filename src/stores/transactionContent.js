// src/stores/transactionContent.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTransactionStore = defineStore('transactionContent', {
  state: () => ({
    transactions: []
  }),
  actions: {
    async fetchTransactions() {
      try {
        const response = await axios.post('/displayTrans');
        this.transactions = response.data;
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    },
    async confirmOrderReceived(orderId) {  // Removed productId
      try {
        const response = await axios.post('/confirmOrderReceived', { orderid: orderId });
        if (response.data.success) {
          this.updatePaymentStatus(orderId, 'Completed');
          return true;
        }
      } catch (error) {
        console.error('Error confirming order received:', error);
      }
      return false;
    },
    updatePaymentStatus(orderId, status) {
      this.transactions.forEach(transaction => {
        if (transaction.orderid === orderId) {
          transaction.paymentstatus = status;
          transaction.products.forEach(product => {
            product.paymentstatus = status;
          });
        }
      });
    },
    extractLatLong(maplink) {
      const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
      const match = maplink.match(regex);
      if (match && match.length >= 3) {
        const latitude = parseFloat(match[1]);
        const longitude = parseFloat(match[2]);
        return { latitude, longitude };
      }
      const altRegex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
      const altMatch = maplink.match(altRegex);
      if (altMatch && altMatch.length >= 3) {
        const latitude = parseFloat(altMatch[1]);
        const longitude = parseFloat(altMatch[2]);
        return { latitude, longitude };
      }
      return { latitude: null, longitude: null };
    },
    buyAgain(item, router) {
      if (!router) {
        console.error('Router instance is required.');
        return;
      }

      const generateLink = (category, busid, productname, maplink) => {
        const { latitude, longitude } = this.extractLatLong(maplink);
        switch (category) {
          case 'Shop':
            return `/category/shop/makati/${busid}?item=${encodeURIComponent(productname)}&latitude=${latitude}&longitude=${longitude}`;
          case 'Restaurant':
            return `/category/eat/LittleTokyo/${busid}?item=${encodeURIComponent(productname)}&latitude=${latitude}&longitude=${longitude}`;
          default:
            return '#';
        }
      };

      console.log('buyAgain called with item:', item);
      const link = generateLink(item.category, item.busid, item.productname, item.maplink);
      console.log('Navigating to link:', link);
      router.push(link);
    }
  }
});
