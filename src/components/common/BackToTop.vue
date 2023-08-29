<template>
    <button :class="`btn-back-to-top ${visible ? 'visible' : ''}`" @click={handleClick}>
        ^
    </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(true)

const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    visible.value = scrollTop > 0
}

const handleClick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

window.addEventListener('scroll', handleScroll)
</script>

<style lang="scss">
@use '../../assets/scss/abstracts/_variables.scss';

.btn-back-to-top {
    position: fixed;
    right: 15px;
    top: 45%;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    transition: all 300ms;
    background: variables.$gray-900;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: variables.$primary;

    &.visible {
        opacity: 1;
        visibility: visible;
    }
}
</style>