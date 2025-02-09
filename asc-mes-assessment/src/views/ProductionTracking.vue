<script setup>
import AddNewProductionRecordForm from '@/components/ProductionRecord/AddNewProductionRecordForm.vue';
import DeleteProductionRecordForm from '@/components/ProductionRecord/DeleteProductionRecordForm.vue';
import EditProductionRecordForm from '@/components/ProductionRecord/EditProductionRecordForm.vue';
import ProductionRecords from '@/components/ProductionRecord/ProductionRecords.vue';
import { ref } from 'vue';

const addForm = ref(false)
const editForm = ref(false)
const deleteForm = ref(false)

function handleClick(formType) {
    addForm.value = formType === 'add';
    editForm.value = formType === 'edit';
    deleteForm.value = formType === 'delete';
}
</script>

<template>
    <main>
        <div>
            <h1 class="text-4xl font-bold text-purple-500 mb-6">Production Tracking</h1>
        </div>
        <div class="flex justify-start content-end space-x-2 mb-2">
            <h2 class="text-2xl font-bold text-purple-400 pr-4">Production Orders</h2>
            <button @click="handleClick('add')" class="bg-purple-700 hover:bg-pink-500 text-purple-100 p-2 rounded-xl font-medium w-24">Add New</button>
            <button @click="handleClick('edit')" class="bg-purple-700 hover:bg-pink-500 text-purple-100 p-2 rounded-xl font-medium w-24">Edit</button>
            <button @click="handleClick('delete')" class="bg-purple-700 hover:bg-pink-500 text-purple-100 p-2 rounded-xl font-medium w-24">Delete</button>
        </div>
        <div>
            <ProductionRecords/>
        </div>
        <div v-if="addForm">
            <AddNewProductionRecordForm/>
        </div>
        <div v-if="editForm">
            <EditProductionRecordForm/>
        </div>
        <div v-if="deleteForm">
            <DeleteProductionRecordForm/>
        </div>
    </main>
</template>