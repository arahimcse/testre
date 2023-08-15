<script setup>
/**
 * #Listening to Events
 * Link@ https://vuejs.org/guide/essentials/component-basics.html#listening-to-events
 */
defineProps(['title'])
defineEmits(['enlarge-text'])
/**
 * above example valid only for template tags
 * If i want to used in JavaScript, we need to used if deffernt way. Example
 * const emits = defineEmits(['enlarge-text'])
 * emits('enlarge-text')
 */

</script>

<template>
     <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <!-- Thanks to the @enlarge-text="postFontSize += 0.1" listener, the parent will receive the event and update the value of postFontSize. -->
</template>

<style scoped>
    
</style>
