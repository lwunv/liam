<template>
  <div :class="classes" :style="styles">
    <div :class="wrapClasses" :style="{ height: `${props.height || 64}px` }">
      <div :class="`${CLASS_PREFIX}app-bar__title`">
        <i v-if="!props.hiddenIcon && !props.iconRight" :class="`${CLASS_PREFIX}app-bar__icon`" @click="iconClick()">
          <slot name="icon" v-if="hasSlot('icon')" />
          <icon-menu v-else />
        </i>
        <slot name="title" v-if="hasSlot('title')" />
        <span v-else :class="`${CLASS_PREFIX}app-bar__title`">{{ props.title }}</span>
      </div>
      <div v-if="hasSlot('navigation')" :class="`${CLASS_PREFIX}app-bar__navigation`">
        <slot name="navigation" />
      </div>
      <div :class="`${CLASS_PREFIX}app-bar__append`">
        <slot name="append" />
        <i v-if="!props.hiddenIcon && props.iconRight" :class="`${CLASS_PREFIX}app-bar__icon`" @click="iconClick()">
          <slot name="icon" v-if="hasSlot('icon')" />
          <icon-menu v-else />
        </i>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { computed, useSlots } from 'vue'
import IconMenu from '../../assets/icons/icon-menu.svg'

defineOptions({name: `${PREFIX}AppBar`})

const props = defineProps({
  fullWidth: [Boolean],
  shadow: [Boolean],
  height: [Number],
  elevation: [Number],
  collapse: [String],
  title: [String],
  image: [String],
  hiddenIcon: [Boolean],
  sticky: [Boolean],
  iconRight: [Boolean]
})

const emit = defineEmits(['iconClick'])

const iconClick = () => emit('iconClick')

const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}

const classes = computed(() => ({
  [`${CLASS_PREFIX}app-bar`]: true,
  collapse: props.collapse,
  'box-shadow': props.shadow,
  'sticky': props.sticky,
}))

const wrapClasses = computed(() => ({
  [`${CLASS_PREFIX}app-bar__wrap`]: true,
  'container-fluid': props.fullWidth,
  container: !props.fullWidth
}))

const styles = computed(() => {
  const styleObj: any = {}
  
  if (props.image) {
    styleObj.background = `url(${props.image})`
  }

  return styleObj
})
</script>

<style lang="scss" scoped>
@import './AppBar.scss';
</style>