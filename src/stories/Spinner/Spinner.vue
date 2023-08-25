<script setup>
import { computed } from 'vue'
import { PREFIX } from '../../utils/constants'

defineOptions({ name: `${PREFIX}Checkbox` })

const sizes = {
  xs: '0.75rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem'
}

const props = defineProps({
  size: {
    type: [String, Array],
    default: 'sm'
  },
  label: {
    type: String,
    default: 'Loading...'
  },
  thickness: {
    type: [String, Array],
    default: '3px'
  },
  speed: {
    type: [String, Array],
    default: '0.65s'
  },
  color: {
    type: [String, Array],
    default: 'gray'
  },
  emptyColor: {
    type: [String, Array],
    default: 'transparent'
  }
})
//computed
const sizeLoader = computed(() => sizes[props.size] || props.size)
</script>
<template>
  <div class="loader"></div>
</template>
<style>
.loader {
  display: inline-block;
  border-width: v-bind(thickness);
  border-color: currentColor;
  border-style: solid;
  border-radius: 100%;
  color: v-bind(color);
  border-bottom-color: v-bind(emptyColor);
  border-left-color: v-bind(emptyColor);
  width: v-bind(sizeLoader);
  height: v-bind(sizeLoader);
  animation: spin v-bind(speed) linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
