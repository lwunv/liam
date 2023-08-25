<template>
  <div :class="classes">
    <div v-if="hasSlot('default')" :class="`${CLASS_PREFIX}badge__icon`">
      <slot />
    </div>
    <span :class="`${CLASS_PREFIX}badge__content`" :style="styles">
      {{ content }}
    </span>
  </div>
</template>

<script setup lang='ts'>
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { includeVariant, isCssColor } from '@/utils/helpers';
import { computed, useSlots } from 'vue'

defineOptions({ name: `${PREFIX}Badge` })

const props = defineProps({
  content: [String],
  color: [String],
  background: [String],
  dot: [Boolean],
  inline: [Boolean],
  floating: [Boolean],
})

const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}

const classes = computed(() => ({
  [`${CLASS_PREFIX}badge`]: true,
  'inline': props.inline,
  'floating': props.floating,
  'dot': props.dot,
  [props.color as string]: includeVariant(props.color),
}))

const styles = computed(() => {
  const styleObj: any = {}

  if (props.background && isCssColor(props.background)) {
    styleObj.background = props.background
  }

  if (props.color && isCssColor(props.color)) {
    styleObj.color = props.color
  }

  return styleObj
})
</script>

<style lang="scss" scoped>
@import './Badge.scss';
</style>