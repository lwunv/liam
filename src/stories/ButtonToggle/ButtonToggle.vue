<script lang="ts" setup>
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { useSlots, ref, computed } from 'vue'

defineOptions({ name: `${PREFIX}ButtonToggle` })

const props = defineProps({
  modelValue: {
    type: [Array, String],
    default: undefined
  },
  size: {
    type: String,
    default: 'sm'
  },
  variant: {
    type: String,
    default: 'outlined'
  },
  variantColor: {
    type: String,
    default: 'default'
  },
  isAttached: {
    type: Boolean,
    default: false
  },
  spacing: {
    type: [Number, Array, String],
    default: '1rem'
  },
  multiple: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:modelValue'])
const COMPONENT_CLASS = CLASS_PREFIX + 'btn-toggle'

const slots = useSlots()
//computed
// const childrenToShow = computed(() => {
//   const clones = slots?.default()?.map((node) => {
//       return node
//     })
//   return clones
// })
const spaceButton = computed(() => (props.isAttached ? 0 : props.spacing))
const classBtnToggle = computed(() => {
  return props.isAttached && props.variant ? `${COMPONENT_CLASS}--${props.variant}` : ''
})

//methods
const handleClickButton = (e: any) => {
  if (props.isAttached && e && e.props) {
    if (props.multiple) {
      let value: string[] = props.modelValue || []
      const index = value.indexOf(e.props.value)
      if (index > -1) {
        value.splice(index, 1)
      } else {
        value.push(e.props.value)
        emits('update:modelValue', value)
      }
    } else {
      emits('update:modelValue', e.props.value)
    }
  }
}
const checkValueGroup = (e: any) => {
  if (e && e.props?.value) {
    if (props.multiple) {
      let value: string[] = props.modelValue || []
      const index = value.indexOf(e.props.value)
      return index > -1
    } else {
      return props.modelValue === e.props.value
    }
  }
}
</script>
<template>
  <div :class="[`${CLASS_PREFIX}button-toggle`, classBtnToggle]" v-if="$slots.default">
    <component
      v-for="(child, index) in $slots.default()"
      :key="`show-more-${String(child.key)}-${index}`"
      :is="child"
      :size="size"
      :variant="variant"
      :variantColor="variantColor"
      v-on:click.stop="handleClickButton(child)"
      :class="[checkValueGroup(child) ? `${CLASS_PREFIX}button--active` : '']"
    >
    </component>
  </div>
</template>
<style lang="scss">
@use './ButtonToggle.scss';
@use '@/assets/scss/abstracts/variables';

.#{variables.$prefix}button-toggle {
  gap: v-bind(spaceButton);
}
</style>
