<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'

const dashboardMetrics = ref(0)

async function fetchDashboardMetrics() {
    try {
        const response = await axios.get("http://localhost:3000/dashboard-metrics");
        dashboardMetrics.value = response.data;
        console.log(dashboardMetrics.value)
    } catch (error) {
        console.error("Error fetching dashboard metrics:", error);
    }
}
onMounted(fetchDashboardMetrics)
</script>

<template>
    <main>
        <div>
            <h1 class="text-4xl font-bold text-purple-500 mb-6">Dashboard</h1>
        </div>
        <div class="mb-2">
            <h2 class="text-2xl font-bold text-purple-400 pr-4">Manufacturing metrics</h2>
        </div>
        <div class="flex justify-start space-x-8">
            <div class="flex flex-col p-8 rounded-lg bg-purple-100 w-64 items-center justify-center hover:bg-pink-200">
                <span class="flex text-6xl mb-2 font-bold">{{ dashboardMetrics.total_production }}</span>
                <h2 class="text-xl font-medium mb-2 text-purple-500">Total Production</h2>
            </div>
            <div class="flex flex-col p-8 rounded-lg bg-purple-100 w-64 items-center justify-center hover:bg-pink-200">
                <span class="flex text-6xl mb-2 font-bold">{{ dashboardMetrics.active_machines }}</span>
                <h2 class="text-xl font-medium mb-2 text-purple-500">Active Machines</h2>
            </div>
            <div class="flex flex-col p-8 rounded-lg bg-purple-100 w-64 items-center justify-center hover:bg-pink-200">
                <span class="flex text-6xl mb-2 font-bold">{{ dashboardMetrics.defect_rate }}</span>
                <h2 class="text-xl font-medium text-purple-500">Defect Rate</h2>
            </div>
        </div>
    </main>
</template>