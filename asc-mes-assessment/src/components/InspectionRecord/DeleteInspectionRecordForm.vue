<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

const inspectionRecords = ref([]);
const inspectionRecord = ref({
    id: ""
});

async function fetchInspectionRecords() {
    try {
        const response = await axios.get("http://localhost:3000/inspection-records");
        inspectionRecords.value = response.data;
    } catch (error) {
        console.error("Error fetching production orders:", error);
    }
}

async function removeInspectionRecord() {
    try {
        await axios.delete(`http://localhost:3000/inspection-records/${inspectionRecord.value.id}`, inspectionRecord.value);
        fetchInspectionRecords();
    } catch (error) {
        console.error("Error updating inspection records:", error);
    }
}

onMounted(fetchInspectionRecords);
</script>

<template>
    <div class="bg-purple-100 rounded-lg mt-8 w-fit p-8">
        <div class="mb-2">
            <h1 class="font-medium p-2">Delete Inspection</h1>
        </div>
        <form class="space-y-2" @submit.prevent="removeInspectionRecord">
            <div class="flex justify-between pl-2 pr-2">
                <label class="mr-2">
                    ID
                </label>
                <input v-model="inspectionRecord.id" type="text" id="id" name="id" class="border bg-pink-100 rounded-lg pt-1 pb-1 pl-2 pr-2">
            </div>
            <div class="flex justify-center mt-6 p-2">
                <button type="submit" class="bg-purple-700 hover:bg-pink-500 text-purple-100 rounded-lg p-2 w-full">Submit</button>
            </div>
        </form>
    </div>
</template>