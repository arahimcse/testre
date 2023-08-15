<script  setup>
import { ref } from 'vue'
/**
 * #Using a Component
 * Link@ https://vuejs.org/guide/essentials/component-basics.html#using-a-component
 */
import ButtonCount from './components/ButtonCount.vue';

/**
 * #Passing Props
 * Link@ https://vuejs.org/guide/essentials/component-basics.html#passing-props
 */
import BlogPost from './components/BlogPost.vue'
import ListingEvent from './components/ListingEvent.vue';
import ComponentSlot from './components/ComponentSlot.vue';


const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

/**
 * 
 */
const postFontSize = ref(1)
</script>

<template>
  <div class="container w-5/6 mx-auto text-center flex flex-col">
    <div class="my-5 text-green-400">
      <h1>Here is a child component!</h1>
      <ButtonCount />
    </div>


    <div class="my-5 text-yellow-400 flex flex-col">
      <!-- Components can be reused as many times as you want: -->
      <h1>Here are many child components!</h1>
      <ButtonCount />
      <ButtonCount />
      <ButtonCount />
    </div>

    <!-- Once a prop is registered, you can pass data to it as a custom attribute, like this: -->
    <!-- <div class="items">
      <h2 class=" text-violet-500">Passing Props (as a custom attribute)</h2>
      <BlogPost title="My journey with Vue" />
      <BlogPost title="Blogging with Vue" />
      <BlogPost title="Why Vue is so fun" />
    </div> -->
    
    <div class="my-5">
      <h2 class=" text-violet-500">Passing Props (as an array of posts in your parent component)</h2>
      <BlogPost 
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      />
    </div>

    <div class="my-5 text-red-400" :style="{ fontSize: postFontSize + 'em' }">
      <h2 class=" text-violet-500">Listening to Events(click event communication back to the parent)</h2>
      <ListingEvent
      v-for="post in posts"
      :key="post.id"
      :title ="post.title"
      @enlarge-text="postFontSize +=0.1"
      />
    </div>

    <div class="my-5 container text-left w-3/12 mx-auto border border-red-600 p-4">
      <ComponentSlot>This is an alert box</ComponentSlot>
    </div>
  </div>
</template>

<style scoped></style>
