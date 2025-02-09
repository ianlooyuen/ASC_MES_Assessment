<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const inspectionRecords = ref([]);

async function fetchInspectionRecords() {
    try {
        const response = await axios.get("http://localhost:3000/inspection-records");
        inspectionRecords.value = response.data;
    } catch (error) {
        console.error("Error fetching production orders:", error);
    }
}
onMounted(fetchInspectionRecords);
</script>

<template>
    <div class="flex rounded-lg p-4 bg-purple-100 w-fit">
        <table class="table-auto border-collapse border-spacing-2">
            <thead>
                <tr class="">
                    <th class="border p-2">ID</th>
                    <th class="border p-2">Product ID</th>
                    <th class="border p-2">Inspection Timestamp</th>
                    <th class="border p-2">Inspector ID</th>
                    <th class="border p-2">Inspection Result</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="record in inspectionRecords" :key="record.id">
                    <td class="border p-2">{{ record.id }}</td>
                    <td class="border p-2">{{ record.product_id }}</td>
                    <td class="border p-2">{{ record.inspection_timestamp }}</td>
                    <td class="border p-2">{{ record.inspector_id }}</td>
                    <td class="border p-2">{{ record.inspection_result }}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>