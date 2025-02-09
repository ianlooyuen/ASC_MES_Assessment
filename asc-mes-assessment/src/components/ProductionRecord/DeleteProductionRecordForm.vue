<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const productionOrders = ref([]);
const productionOrder = ref({
    id: ""
});

async function fetchProductionOrders() {
    try {
        const response = await axios.get("http://localhost:3000/production-orders");
        productionOrders.value = response.data;
    } catch (error) {
        console.error("Error fetching production orders:", error);
    }
}

async function removeProductionOrder() {
    try {
        await axios.delete(`http://localhost:3000/production-orders/${productionOrder.value.id}`, productionOrder.value);
        console.log(productionOrder);
        fetchProductionOrders();
    } catch (error) {
        console.error("Error updating production order:", error);
    }
}

onMounted(fetchProductionOrders);
</script>

<template>
<div class="bg-purple-100 rounded-lg mt-8 w-fit p-8">
        <div class="mb-2">
            <h1 class="font-medium p-2">Delete Production Record</h1>
        </div>
        <form class="space-y-2" @submit.prevent="removeProductionOrder">
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    ID
                </label>
                <input v-model="productionOrder.id" type="text" id="id" name="id" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between mt-6 p-2">
                <button type="submit" class="bg-purple-700 hover:bg-pink-500 text-purple-100 rounded-lg p-2 w-full">Submit</button>
            </div>
        </form>
    </div>
</template>