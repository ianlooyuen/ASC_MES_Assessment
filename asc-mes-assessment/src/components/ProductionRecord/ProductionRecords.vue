<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const productionOrders = ref([])

async function fetchProductionOrders() {
    try {
        const response = await axios.get("http://localhost:3000/production-orders");
        productionOrders.value = response.data;
    } catch (error) {
        console.error("Error fetching production orders:", error);
    }
}
onMounted(fetchProductionOrders);
</script>

<template>
    <div class="flex rounded-lg p-4 bg-purple-100 w-fit">
        <table class="table-auto border-collapse border-spacing-2">
            <thead>
                <tr class="">
                    <th class="border p-2">ID</th>
                    <th class="border p-2">Product ID</th>
                    <th class="border p-2">Batch Number</th>
                    <th class="border p-2">Start Time</th>
                    <th class="border p-2">End Time</th>
                    <th class="border p-2">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in productionOrders" :key="order.id">
                    <td class="border p-2">{{ order.id }}</td>
                    <td class="border p-2">{{ order.product_id }}</td>
                    <td class="border p-2">{{ order.batch_number }}</td>
                    <td class="border p-2">{{ order.start_time || 'N/A' }}</td>
                    <td class="border p-2">{{ order.end_time || 'N/A' }}</td>
                    <td class="border p-2">{{ order.status }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>