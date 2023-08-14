<script setup>
/**
 * #Template Syntax
 * link@ https://vuejs.org/guide/essentials/template-syntax.html
 * 
 */

/**
 * #Text Interpolation
 * link@ https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation
 */
let mes = "Welcome to Vue JS Template Syntax"

/**
 * #Row HTML
 * Link@ https://vuejs.org/guide/essentials/template-syntax.html#raw-html
 */
let rawHtml = `<span style="color: red">This should be red.</span>`

/**
 * #Attribute Bindings
 * Link@ https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings
 */
let dynamicId = 'demo'

/**
 * #Boolean Attributes
 * Link@ https://vuejs.org/guide/essentials/template-syntax.html#boolean-attributes
 */
let isButtonDisabled = true

/**
 * #Dynamically Binding Multiple Attributes
 * link@ https://vuejs.org/guide/essentials/template-syntax.html#dynamically-binding-multiple-attributes
 */
const objectOfAttrs = {
    id: 'container',
    class: 'wrapper'
}

/**
 * #Using JavaScript Expressions
 * Link# https://vuejs.org/guide/essentials/template-syntax.html#using-javascript-expressions
 * 
 */
let number = 1
let ok = true
let message = "Using JavaScript Expressions"
let id = "ce-10046"

/**
 * #Expressions Only
 * Link@ https://vuejs.org/guide/essentials/template-syntax.html#expressions-only
 * variable used from above example
 */

</script>

<template>
    <div class="container w-5/6 mx-auto text-center">
        <h1 class="text-3xxl my-5 font-bold text-yellow-400">Vue JS Template Syntax</h1>
        <div class="text-interpolation my-5">
            <h2 class="text-indigo-500">Text Interpolation</h2>
            <span>{{ mes }}</span>
        </div>

        <div class="raw-html my-5">
            <h2 class=" text-red-400">Raw HTML</h2>
            <p>Using text interpolation: {{ rawHtml }}</p>
            <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        </div>

        <div class="attribute-bindings my-5">
            <h2 class=" text-purple-500">Attribute Bindings</h2>
            <p :id="dynamicId">ID "{{ dynamicId }}" bind as a attributes in this html tag</p>

        </div>

        <div class="boolean-attributes my-5">
            <h2 class=" text-purple-600">Boolean Attributes</h2>
            <button class=" disabled" :disabled="isButtonDisabled">Button</button>
        </div>

        <div class="multiple-attributes my-5">
            <h2 class=" text-purple-600">Dynamically Binding Multiple Attributes</h2>
            <p v-bind="objectOfAttrs">ID "{{ objectOfAttrs.id }}" and CLASS "{{ objectOfAttrs.class }}" bind as a multiple
                attributes in this HTML tags</p>
        </div>

        <div class="javascript-expressions my-5">
            <h2 class=" text-purple-600">Using JavaScript Expressions</h2>
            {{ number + 1 }}
            {{ ok ? 'YES' : 'NO' }}
            {{ message.split('').reverse().join('') }}
            <p :id="`list-${id}`"></p>
        </div>


        <div class="expressions-only my-5">
            <h2 class=" text-purple-600">Expressions Only</h2>
            <!-- this is a statement (not work in template syntax), not an expression: -->
            <!-- {{ let a = 1 }} -->

            <!-- flow control won't work either, use ternary expressions -->
            <!-- {{ if (ok) { return message } }} (not work in template syntax)-->
             {{ ok ? message: "" }} <!-- ternary operator work in template syntax -->
        </div>
    </div>
</template>

<style scoped></style>
