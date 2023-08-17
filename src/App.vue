<script  setup>
import { ref } from 'vue'
import { shallowRef } from 'vue'
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



/**
 * #Dynamic Components
 * Link@ https://vuejs.org/guide/essentials/component-basics.html#dynamic-components
 */
import CompA from './components/dcomponents/CompA.vue';
import CompB from './components/dcomponents/CompB.vue';
import CompC from './components/dcomponents/CompC.vue';
const isActive = shallowRef(CompA)

/**
 * Another Dynamic components Example
 */
import Home from './components/adcomponents/Home.vue';
import About from './components/adcomponents/About.vue';
import Archive from './components/adcomponents/Archive.vue';
const currentTab = ref('Home')

const tabs = {
  Home,
  About,
  Archive
}
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
      <BlogPost v-for="post in posts" :key="post.id" :title="post.title" />
    </div>

    <div class="my-5 text-red-400" :style="{ fontSize: postFontSize + 'em' }">
      <h2 class=" text-violet-500">Listening to Events(click event communication back to the parent)</h2>
      <ListingEvent v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize += 0.1" />
    </div>

    <div class="my-5 container text-left w-3/12 mx-auto border border-red-600 p-4">
      <ComponentSlot>This is an alert box</ComponentSlot>
    </div>


    <div class="my-5 mx-auto p-4">
      <h2>Dynamic Components Example</h2>
      <label ><input type="radio" v-model="isActive" :value="CompA" /> A</label>
      <label class="mx-2"><input type="radio" v-model="isActive" :value="CompB" /> B</label>
      <label><input type="radio" v-model="isActive" :value="CompC" /> C</label>
      <KeepAlive>
        <component :is="isActive"></component>
      </KeepAlive>
    </div>
    
    <div class="my-5 mx-auto p-4">
      {{ currentTab }}
      <h2>Another Dynamic Components Example</h2>
      <ul>
        <button class="mx-2 py-2 px-1 border border-yellow-600 text-white bg-slate-400"  
        v-for="(tab,index) in tabs"
       :key="tab"
       :class="{ active: currentTab === index }"
       @click="currentTab = index"> {{ index }}</button>
      </ul>
      <KeepAlive>
        <component :is="tabs[currentTab]"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped></style>
