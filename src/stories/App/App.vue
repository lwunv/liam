<template>
  <div :class="classes">
    <div :class="wrapClasses">
      <slot />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { computed } from 'vue'

defineOptions({name: `${PREFIX}App`})

const props = defineProps({
  rtl: [Boolean],
  fullHeight: [Boolean],
  fullWidth: [Boolean],
  directionRow: [Boolean],
  directionColumn: [Boolean],
  alignCenter: [Boolean],
})

const classes = computed(() => ({
  [`${CLASS_PREFIX}application`]: true,
  rtl: props.rtl,
  'full-height': props.fullHeight,
  'full-width': props.fullWidth
}))
const wrapClasses = computed(() => ({
  [`${CLASS_PREFIX}application__wrap`]: true,
  'container-fluid': props.fullWidth,
  container: !props.fullWidth,
  'direction-row': props.directionRow,
  'direction-column': props.directionColumn,
  center: props.alignCenter
}))
</script>

<style lang="scss" scoped>
@import './App.scss';
</style>