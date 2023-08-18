<script  setup>
/**
 * #Props Declaration
 * https://vuejs.org/guide/components/props.html#props-declaration
 * 
 * declaring props using an array of strings
 * defineProps(['title','number'])
 * 
 * declaring props use the object
 * defineProps({
 * title: String,
 * likes: Number})
 * 
 */

// defineProps(['title'])
const props = defineProps({
    title:String,
    author:Object,
    gettingMessage:String
})
/**
 * #Static vs. Dynamic Props
 * Link@ https://vuejs.org/guide/components/props.html#static-vs-dynamic-props
 */

</script>

<template>
    title: {{ props.title }}
    <h1>Getting {{ props.author }}</h1>
    
</template>

<style scoped>
    
</style>
