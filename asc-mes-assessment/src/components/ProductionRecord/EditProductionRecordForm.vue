<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const props = defineProps({
  orderId: Number
});

const productionOrders = ref([])

const productionOrder = ref({
  id: "",
  product_id: "",
  batch_number: "",
  start_time: "",
  end_time: "",
  status: ""
});

async function fetchProductionOrders() {
    try {
        const response = await axios.get("http://localhost:3000/production-orders");
        productionOrders.value = response.data;
    } catch (error) {
        console.error("Error fetching production orders:", error);
    }
}

async function updateProductionOrder() {
  try {
    await axios.put(`http://localhost:3000/production-orders/${productionOrder.value.id}`, productionOrder.value);
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
            <h1 class="font-medium p-2">Edit Production Record</h1>
        </div>
        <form class="space-y-2" @submit.prevent="updateProductionOrder">
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    ID
                </label>
                <input v-model="productionOrder.id" type="number" id="id" name="id" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label>
                    Product ID
                </label>
                <input v-model="productionOrder.product_id" type="text" id="product-id" name="product-id" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    Batch Number
                </label>
                <input v-model="productionOrder.batch_number" type="text" id="batch-number" name="batch-number" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    Start Time
                </label>
                <input v-model="productionOrder.start_time" type="datetime-local" id="start-time" name="start-time" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    End Time
                </label>
                <input v-model="productionOrder.end_time" type="datetime-local" id="end-time" name="end-time" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    Status
                </label>
                <input v-model="productionOrder.status" type="text" id="status" name="status" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-center mt-6 p-2">
                <button type="submit" class="bg-purple-700 hover:bg-pink-500 text-purple-100 rounded-lg p-2 w-full">Submit</button>
            </div>
        </form>
    </div>
</template>