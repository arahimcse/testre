<script  setup>
import { ref, reactive, shallowRef } from 'vue'
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

/**
 * #Props Declaration
 * https://vuejs.org/guide/components/props.html#props-declaration
 */

import ComponentPops from './components/ComponentPops.vue';

/**
 * #Static vs. Dynamic Props
 * Link@ https://vuejs.org/guide/components/props.html#static-vs-dynamic-props
 */
const items = reactive({
  title: "Parenting",
  author: { name: "Abdur Rahim", age: 35 }
})

/**
 * #Component Events
 * Link@ https://vuejs.org/guide/components/events.html#component-events
 */
import MyComponents from './components/MyComponents.vue';
const count = ref(1)
const count1 = ref(1)
const count2 = ref(1)

function increaseCount(n) {
  count2.value += n
}
import Button from './components/buttons/Button.vue'
import Button1 from './components/buttons/Button1.vue'
import Button2 from './components/buttons/Button2.vue'

/**
 * #Component v-model
 * Link@ https://vuejs.org/guide/components/v-model.html#component-v-model
 */
import ComponentsModel from './components/ComponentsModel.vue';
const person =reactive({
  name:"Abdur Rahim",
  gender:"Male",
  about:"This is abdur rahim from tangail. He is a govt. serven. His occupation is teaching on a college as lecturer.",
  age:34,
  designation:"Craft Instructor"
})

/**
 * #Provide / Inject
 * Link@ https://vuejs.org/guide/components/provide-inject.html#provide-inject
 */
import { provide } from 'vue'
const message = ref('hello')
provide('message', message)
import Child from './components/Child.vue';
import ProviderItem from './components/ProviderItem.vue';
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
      <label><input type="radio" v-model="isActive" :value="CompA" /> A</label>
      <label class="mx-2"><input type="radio" v-model="isActive" :value="CompB" /> B</label>
      <label><input type="radio" v-model="isActive" :value="CompC" /> C</label>
      <KeepAlive>
        <component :is="isActive"></component>
      </KeepAlive>
    </div>

    <div class="my-5 mx-auto p-4">
      <h2>Another Dynamic Components Example</h2>
      <ul>
        <button class="mx-2 py-2 px-1 border border-yellow-600 text-white bg-slate-400" v-for="(tab, index) in tabs"
          :key="tab" :class="{ active: currentTab === index }" @click="currentTab = index"> {{ index }}</button>
      </ul>
      <KeepAlive>
        <component :is="tabs[currentTab]"></component>
      </KeepAlive>
    </div>

    <div class="my-5 mx-auto">
      <h2>Props Declaration</h2>
      <ComponentPops title="this is title" />
    </div>


    <div class="my-5 mx-auto">
      <h2>Prop Passing Details</h2>
      <!-- <ComponentPops getting-message="Hello"/> -->
      <ComponentPops gettingMessage="Hello" />
    </div>

    <div class="my-5 mx-auto">
      <h2>Prop static values</h2>
      <ComponentPops title="My journey with Vue" />
    </div>

    <div class="my-5 mx-auto">
      <h2>Prop assigned dynamically</h2>
      <!-- Dynamically assign the value of a variable -->
      <ComponentPops :title="items.title" />

      <!-- Dynamically assign the value of a complex expression -->
      <ComponentPops :title="items.title + ' by ' + items.author.name" />
    </div>

    <div class="my-5 mx-auto">
      <h2>Binding Multiple Properties Using an Object</h2>

      <ComponentPops v-bind="items" />
      <!-- <ComponentPops :title="items.title + ' by ' + items.author.name" /> -->
    </div>

    <div class="my-5 mx-auto">
      <h2>Component Events(Emitting and Listening to Events)</h2>

      <MyComponents>
        <template #button1>
          <Button @some-event="count++" > {{ count }}</Button>
        </template>

      </MyComponents>
    </div>

    <div class="my-5 mx-auto">
      <h2>Event Arguments</h2>
      <MyComponents >
        <template #button2>
          <Button1 @increase-by="(n) => count1 += n" >{{ count1 }}</Button1>
        </template>
      </MyComponents>
    </div> 
    
    <div class="my-5 mx-auto">
      <h2>Event Arguments</h2>
      <MyComponents >
        <template #button3>
          <Button2 @increase-by="increaseCount">{{ count2 }}</Button2>
        </template>
      </MyComponents>
    </div> 
    
    <div class="my-5 mx-auto">
      <h2>Component v-model</h2>
      <!-- <ComponentsModel v-model="person.name"/> this will set default props name "modelValue" -->
      <ComponentsModel v-model:name="person.name"/> <!-- this will set props name "name" -->
      <form action="">
        <label for="name">Parent </label>
        <input  id="name" v-model="person.name">
      </form>
    </div>
    
    <div class="my-5 mx-auto flex flex-col">
      <h2>Provide / Inject</h2>
      <input type="text" v-model="message">
      <Child/>
    </div>

    <div class="my-5 mx-auto flex flex-col">
      <h2>Provide / Inject Example 1</h2>
      <ProviderItem/>
    </div>
  </div>
</template>

<style scoped></style>
