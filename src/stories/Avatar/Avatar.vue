<template>
  <div :class="classes">
    <slot name="label" v-if="hasSlot('label') && labelLeft" />
    <span v-if="props.label && labelLeft" :class="`${CLASS_PREFIX}avatar__label`">
      {{ props.label }}
    </span>
    <div :class="`${CLASS_PREFIX}avatar__wrapper`" :style="styles">
      <slot name="icon" v-if="hasSlot('icon')" />
      <img v-if="props.image" :src="props.image" :alt="props?.alt || props?.label || 'avatar'" />
      <span v-else>
        {{ props?.alt || props?.label }}
      </span>
    </div>    
    <slot name="label" v-if="hasSlot('label') && !labelLeft" />
    <span v-else-if="props.label && !labelLeft" :class="`${CLASS_PREFIX}avatar__label`">
      {{ props.label }}
    </span>
  </div>
</template>

<script setup lang='ts'>
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { computed, useSlots } from 'vue'
import { setPropSize } from '@/utils/helpers'

defineOptions({name: `${PREFIX}Avatar`})

const props = defineProps({
  alt: [String],
  hoverEffect: [String],
  backgroundColor: [String],
  image: [String],
  size: [Number, String],
  label: [String],
  labelLeft: [Boolean],
})

const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}

const classes = computed(() => ({
  [`${CLASS_PREFIX}avatar`]: true,
  [props.hoverEffect as string]: props.hoverEffect
}))

const styles = computed(() => {
  const styleObj: any = {}

  if (props.backgroundColor) {
    styleObj.background = props.backgroundColor
  }
  
  if (props.size) {
    let size = setPropSize(props.size)
    styleObj.width = size
    styleObj.height = size
  }

  return styleObj
})
</script>

<style lang="scss" scoped>
@import './Avatar.scss';
</style>