<template>
    <div>id {{ id }}</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const id = route.params.id
onMounted(() => {
    console.log("onMounted", route.params.id)
}) 
</script>