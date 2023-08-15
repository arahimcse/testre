<script setup>
/**
 * #Received Props
 */
defineProps(['title'])
//This props (title) allowed only for template tags. It (title) is not work into JavaScript code. Example
// console.log(title) error occured. title not defined

/**
 * If I want to used the props into JavaScript, we will follow the example
 * const props = defineProps(['title'])
 * console.log(props.title)
 */

</script>

<template>
  <h4>{{ title }}</h4>
</template>

<style scoped>
    
</style>
