<!-- <script setup>
defineProps(['modelValue']) //this is default props for v-model
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template> -->

<script setup>
defineProps(['name']) //this is default props for v-model
defineEmits(['update:name'])
</script>

<template>
  <form action="">
    <label for="name">Child </label>
    <input 
    id="name"
    type="text"
    :value="name"
    @input="$emit('update:name', $event.target.value)" 
  />
  <!-- @input="$emit('update:name', $event.target.value)" is a  event listner-->
  </form>
 
</template>