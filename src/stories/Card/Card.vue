<script setup>
import { CLASS_PREFIX, TYPE_VARIANT_LIST, PREFIX } from '../../utils/constants'
import { computed } from 'vue'

defineOptions({ name: `${PREFIX}Card` })
const props = defineProps({
  rounded: {
    type: [Boolean, String, Number],
    default: false
  },
  subtitle: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  actions: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'elevated'
    //'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'
  },
  width: {
    type: [String, Number],
    default: undefined
  }
})

//
const COMPONENT_CLASS = CLASS_PREFIX + 'card'

const styleCard = computed(() => {
  const width =
    typeof props.width === 'string'
      ? props.width
      : typeof props.width === 'number'
      ? `${props.width}px`
      : '100%'
  const rounded =
    typeof props.rounded === 'boolean' && props.rounded
      ? '1rem'
      : typeof props.rounded === 'number'
      ? `${props.rounded}px`
      : typeof props.rounded === 'string'
      ? props.rounded
      : 'none'
  return {
    '--card-width': width,
    '--card-border-radius': rounded
  }
})
const classCard = computed(() => {
  const variantClasses = TYPE_VARIANT_LIST.reduce((cls, variant) => {
    if (!variant) return cls
    cls[`${COMPONENT_CLASS}--${variant}`] = props.variant === variant ? true : false
    return cls
  }, {})
  return { ...variantClasses }
})
</script>
<template>
  <div :class="[`${CLASS_PREFIX}card`, classCard]" :style="styleCard">
    <div v-if="title || $slot?.title" :class="`${CLASS_PREFIX}card__title`">
      <slot name="title">{{ title || '' }}</slot>
    </div>
    <div v-if="subtitle || $slot?.subtile" :class="`${CLASS_PREFIX}card__subtitle`">
      <slot name="subtile">{{ subtitle || '' }}</slot>
    </div>
    <div v-if="text || $slots?.text" :class="`${CLASS_PREFIX}card__text`">
      <slot name="text">{{ text || '' }}</slot>
    </div>
    <slot></slot>
    <div v-if="actions || $slots?.actions" :class="`${CLASS_PREFIX}card__actions`">
      <slot name="actions">{{ actions || '' }}</slot>
    </div>
    <span :class="`${CLASS_PREFIX}card__underlay`"></span>
  </div>
</template>
<style lang="scss">
@use './Card.scss';
</style>
