<script setup>
import { store } from '../data/store';
</script>

<template>
    From B: {{ store.count }}
    <button @click="store.increment()">Incerment</button>
</template>
