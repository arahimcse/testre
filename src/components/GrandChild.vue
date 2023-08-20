<script setup>
import { inject } from 'vue'
const message = inject('message')
</script>

<template>My message is {{ message }}</template>

<style scoped></style>
