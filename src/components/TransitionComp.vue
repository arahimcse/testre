<script setup>
import { ref, computed } from 'vue'
import gsap from 'gsap'
/**
 * #Transition
 * Link@ https://vuejs.org/guide/built-ins/transition.html#transition
 */
const show = ref(true)

/**
 * #Named Transitions
 * Link@ https://vuejs.org/guide/built-ins/transition.html#named-transitions
 */
const isShow = ref(true)

/**
 * #TransitionGroup
 * Link@ https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup
 */
const query = ref('')

const list = [
    { msg: 'Bruce Lee' },
    { msg: 'Jackie Chan' },
    { msg: 'Chuck Norris' },
    { msg: 'Jet Li' },
    { msg: 'Kung Fury' }
]

const computedList = computed(() => {
    return list.filter((item) => item.msg.toLowerCase().includes(query.value))
})

function onBeforeEnter(el) {
    el.style.opacity = 0
    el.style.height = 0
}

function onEnter(el, done) {
    gsap.to(el, {
        opacity: 1,
        height: '1.6em',
        delay: el.dataset.index * 0.15,
        onComplete: done
    })
}

function onLeave(el, done) {
    gsap.to(el, {
        opacity: 0,
        height: 0,
        delay: el.dataset.index * 0.15,
        onComplete: done
    })
}

/**
 * #KeepAlive
 * Link@ https://vuejs.org/guide/built-ins/keep-alive.html#keepalive
 */
import CompA from './button/CompA.vue';
import CompB from './button/CompB.vue';
import { shallowRef } from 'vue';
const current = shallowRef(CompA)
</script>

<template>
    <div class="container">
        <div class="transition-container">
            <button @click="show = !show" class="mrk">tottle</button>
            <transition>
                <p v-show="show">hello</p>
            </transition>
        </div>

        <div class="transition-container">
            <button @click="isShow = !isShow">Toggle</button>
            <Transition name="bounce">
                <p v-if="isShow" style="text-align: center;">
                    Hello here is some bouncy text!
                </p>
            </Transition>
        </div>

        <div class="transition-container">
            <input v-model="query">
            <TransitionGroup tag="ul" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
                <li v-for="(item, index) in computedList" :key="item.msg" :data-index="index">
                    {{ item.msg }}
                </li>
            </TransitionGroup>
        </div>

        <div class="keep-alive">
            <label> <input v-model="current" :value="CompA" type="radio"/> A </label>
            <label> <input v-model="current" :value="CompB" type="radio"/> B </label>
            <keep-alive>
                <component :is="current"></component>
            </keep-alive>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
}

.transition-container {
    margin: 10px auto;
    padding: 5px;
}

.keep-alive{
    display: flex;
    flex-flow: column wrap;
}
.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease-in 0.5s, transform 1s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translate(50px, 50px);
}

.mrk {
    padding: 10px;
    background: #5558e6;
    border: 1px solid #807c7f;
}

/**
*this 2nd example 
*/
.bounce-enter-active {
    animation: bounce-in 2s ease-in-out 0.5s infinite alternate;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

/**
Section 3 for the  transition group animations
 */
</style>
