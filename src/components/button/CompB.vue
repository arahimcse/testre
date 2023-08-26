<script  setup>
import {ref } from 'vue'
const data = ref(null)

</script>

<template>
    message here {{ data }} <input v-model="data">
</template>

<style  scoped>
    
</style>
