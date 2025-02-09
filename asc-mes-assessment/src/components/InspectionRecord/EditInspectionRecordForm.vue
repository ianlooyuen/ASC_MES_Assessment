<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const inspectionRecord = ref({
    id: "", product_id: "", inspection_timestamp: "", inspector_id: "", inspection_result: ""
});

async function fetchInspectionRecords() {
    try {
        const response = await axios.get("http://localhost:3000/inspection-records");
        inspectionRecord.value = response.data;
    } catch (error) {
        console.error("Error fetching inspection records:", error);
    }
}

async function updateInspectionRecord() {
  try {
    await axios.put(`http://localhost:3000/inspection-records/${inspectionRecord.value.id}`, inspectionRecord.value);
    fetchInspectionRecords();
  } catch (error) {
    console.error("Error updating inspection record:", error);
  }
}

onMounted(fetchInspectionRecords);
</script>

<template>
    <div class="bg-purple-100 rounded-lg mt-8 w-fit p-8">
        <div class="mb-2">
            <h1 class="font-medium p-2">Edit Inspection</h1>
        </div>
        <form class="space-y-2" @submit.prevent="updateInspectionRecord">
            <div class="flex justify-between pl-2 pr-2">
                <label>
                    ID
                </label>
                <input v-model="inspectionRecord.id" type="text" id="product-id" name="product-id" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label>
                    Product ID
                </label>
                <input v-model="inspectionRecord.product_id" type="text" id="product-id" name="product-id" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    Inspection Timestamp
                </label>
                <input v-model="inspectionRecord.inspection_timestamp" type="datetime-local" id="inspection-timestamp" name="inspection-timestamp" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    Inspector ID
                </label>
                <input v-model="inspectionRecord.inspector_id"  type="text" id="inspector-id" name="inspector-id" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    Inspection Result
                </label>
                <input v-model="inspectionRecord.inspection_result" type="text" id="inspection-result" name="inspection-result" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-center mt-6 p-2">
                <button type="submit" class="bg-purple-700 hover:bg-pink-500 text-purple-100 rounded-lg p-2 w-full">Submit</button>
            </div>
        </form>
    </div>
</template>