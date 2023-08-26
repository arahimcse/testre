<script setup>
import { ref } from 'vue'
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
    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-flow: column wrap;
    align-content: center;
}
.transition-container{
 margin: 10px auto;
 padding: 5px;
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
</style>
