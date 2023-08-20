<script  setup>
import { ref, provide } from 'vue'
import InjectItem from './InjectItem.vue'
const location = ref('Bangladesh')
function updateLocation()
{
    location.value = 'India'
}
provide('location',{
    location,
    updateLocation
})
</script>
<template>
    <InjectItem/>
</template>

<style  scoped>
    
</style>
