<template>
  <div :class="classes" :style="styles">
    <a href="/" v-if="!hiddenHome" :class="`${CLASS_PREFIX}bottom-navigation__item item-home`">
      <img alt="bottom logo" class="logo" src="@/assets/logo.svg" height="90" />
    </a>
    <a v-for="(item, index) of items" :key="index" :href="item.link"
      :class="`${CLASS_PREFIX}bottom-navigation__item ${indexActive === index ? 'active' : ''}`">{{ item.text }}</a>
  </div>
</template>

<script setup lang='ts'>
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { computed } from 'vue'

defineOptions({ name: `${PREFIX}Swiper` })

const props = defineProps({
  hiddenHome: [Boolean],
  items: [Array as any],
  wrap: [Boolean],
  active: [Number],
})

const classes = computed(() => ({
  [`${CLASS_PREFIX}bottom-navigation`]: true,
  'wrap': props.wrap,
}))

const indexActive = computed(() => {
  return props.active
})

const styles = computed(() => {
  const styleObj: any = {}

  return styleObj
})
</script>

<style lang="scss" scoped>
@import './BottomNavigation.scss';
</style>