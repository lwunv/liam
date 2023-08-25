<script setup>
import { computed } from 'vue'
import { THEME_VARIANT_LIST, CLASS_PREFIX, PREFIX } from '../../utils/constants'

defineOptions({ name: `${PREFIX}Code` })
const props = defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})
const COMPONENT_CLASS = CLASS_PREFIX + 'code'

const colors = computed(() => {
  const variantClasses = THEME_VARIANT_LIST.reduce((cls, variant) => {
    if (!variant) return cls
    cls[`${COMPONENT_CLASS}--${variant}`] = props.variant === variant ? true : false
    return cls
  }, {})
  return variantClasses
})
</script>
<template>
  <code :class="[`${CLASS_PREFIX}code`,colors]">
    <slot></slot>
  </code>
</template>
<style lang="scss">
@use './Code.scss';
</style>
