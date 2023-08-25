<template>
  <div :class="classes" :style="styles">
    <div :class="`${CLASS_PREFIX}banner__main`">
      <div v-if="avatar" :class="`${CLASS_PREFIX}banner__avatar`" @click="navigateToLink">
        <j-avatar :image="avatar" />
      </div>
      <div v-else-if="hasSlot('icon')" :class="`${CLASS_PREFIX}banner__avatar`" @click="navigateToLink">
        <slot name="icon" />
      </div>
      <div :class="`${CLASS_PREFIX}banner__content`">
        <h5 v-if="title" :class="`${CLASS_PREFIX}banner__title`" @click="navigateToLink">{{ title }}</h5>
        <p :class="`${CLASS_PREFIX}banner__text`" :style="{ lineClamp: 2 }" v-html="content"></p>
      </div>
    </div>

    <div :class="`${CLASS_PREFIX}banner__actions`">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { computed, useSlots } from 'vue'
import JAvatar from '../Avatar'
import { useRouter } from 'vue-router'

defineOptions({ name: `${PREFIX}Banner` })

const props = defineProps({
  avatar: [String],
  icon: [String],
  content: [String],
  color: [String],
  stacked: [Boolean],
  title: [String],
  link: [String],
  width: [Number, String],
  lines: [Number, String],
  background: [String]
})

const router = useRouter();

const navigateToLink = () => {
  if (props.link) {
    router.push(props.link);
  }
}

const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}

const classes = computed(() => ({
  [`${CLASS_PREFIX}banner`]: true,
  'stacked': props.stacked,
  [`lines_${props.lines}`]: props.lines,
  'haslink': props.link,
}))

const styles = computed(() => {
  const styleObj: any = {}

  if (props.background) {
    styleObj.background = `url(${props.background})`
  }

  if (props.color) {
    styleObj.color = props.color
  }
  
  if (props.width) {
    let width = props.width
    if (typeof width === 'number') width = `${width}px`
    styleObj.width = width
  }

  return styleObj
})
</script>

<style lang="scss" scoped>
@import './Banner.scss';
</style>