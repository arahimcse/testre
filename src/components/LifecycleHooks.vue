<script setup>
/**
 * Each Vue component instance goes through a series of initialization steps when it's created - for example, it needs to set up data
 * observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs 
 * functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.
 */
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
const items = [
    'onBeforeMount',
    'onMounted',
    'onBeforeUpdate',
    'onUpdated',
    'onBeforeUnmount',
    'onUnmounted',
    'onErrorCaptured',
    'onRenderTracked',
    'onRenderTriggered',
    'onActivated',
    'onDeactivated',
    'onServerPrefetch'
]
onBeforeMount(() => {
    console.log('Onbefore Mounted')
})
onMounted(() => {
    console.log('onMounted')
})
onBeforeUpdate(() => {
    console.log("onBeforeUpdate")
})
onUpdated(() => {
    console.log("onUpdated")
})
onBeforeUnmount(() => {
    console.log("onBeforeUnmount")
})
onUnmounted(() => {
    console.log("onUnmounted")
})

const check = ref(0)
</script>

<template>
    <h1 class=" text-3xl text-center mt-50 mb-10">list of life cycle hooks</h1>
    <ul class="list-none text-center">
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
    <div class="flex flex-col justify-center">
        <button type="button" class="w-[100px] rounded-none bg-blue-600 p-2 text-white text-center my-10 mx-auto"
            @click="check++">Update {{ check }}</button>
        <h2 class="mx-auto my-5 text-3xl">Vuejs 3 Lifecycle hook diagram</h2>
        <img :src="`lifecycle.16e4c08e.png`" alt="" class="mx-auto">
    </div>
</template>

<style scoped></style>
