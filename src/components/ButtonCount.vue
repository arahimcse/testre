<script setup>
/**
 * #Components Basics
 * Link@  https://vuejs.org/guide/essentials/component-basics.html
 * 
 */

/**
 * #Defining a Component
 * Link@ https://vuejs.org/guide/essentials/component-basics.html#defining-a-component
 */
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>


<style scoped>

</style>