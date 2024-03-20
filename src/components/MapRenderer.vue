<template>
    <div id="map" class="h-[400px]"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default {
    props: {
        latitude: Number,
        longitude: Number,
        name: String
    },
    methods: {

        initMap() {
            // Create the map instance
            const map = L.map("map").setView([this.latitude, this.longitude], 18); // Use passed latitude and longitude

            // Add a tile layer (OpenStreetMap)
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            //  marker
            const marker = L.marker([this.latitude, this.longitude]).addTo(map);

            // name of shop
            marker.bindPopup(`<b>${this.name}</b>`).openPopup();
        }
    }
    ,
    mounted() {
        if (this.latitude !== undefined && this.longitude !== undefined) {
            console.log("Received Latitude:", this.latitude);
            console.log("Received Longitude:", this.longitude);
            console.log("Selected Item Name:", this.name);
            this.initMap();
        }
    },
};
</script>