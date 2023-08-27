<script  setup>
import { store } from '../data/store';
</script>

<template>
    From A:  {{ store.count }}
    <button @click="store.increment()">Increment</button>
</template>

<style  scoped>
    
</style>
