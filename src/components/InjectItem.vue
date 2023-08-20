<script  setup>
import { inject } from 'vue'
const { location, updateLocation } = inject('location')
</script>

<template>
    <h1>Location: {{ location }}</h1>
    <button @click="updateLocation">Update Location</button>
</template>

<style  scoped>
    
</style>
