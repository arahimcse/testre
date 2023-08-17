<script setup>
import { ref } from 'vue';
const searchText = ref('Abdur Rahim')
</script>

<template>
    <h1>This is component C</h1>
    <h1>Reverse Input: {{ searchText.split('').reverse().join('')  }}</h1>
    <input 
    :value="searchText"
    @input="searchText = $event.target.value" />
</template>
