<script lang="ts" setup>
import { computed } from 'vue'
import JSpinner from '../../Spinner'
import { TYPE_VARIANT_LIST, THEME_VARIANT_LIST, CLASS_PREFIX, PREFIX } from '@/utils/constants'
import type { ThemeVariant, TypeVariant, ComponentSize } from '@/types/theme'

interface Props {
  to?: string
  link?: boolean
  variant?: TypeVariant
  variantColor?: ThemeVariant
  isDisabled?: boolean
  isActive?: boolean
  isLoading?: boolean
  size?: ComponentSize
  leftIcon?: string
  rightIcon?: string
  rounded?: boolean
}

interface classProps {
  [key: string]: boolean
}
defineOptions({ name: `${PREFIX}Button` })
const props = withDefaults(defineProps<Props>(), {
  to: '',
  link: false,
  variant: 'elevated',
  variantColor: 'primary',
  isDisabled: false,
  isActive: false,
  isLoading: false,
  size: 'md',
  leftIcon: undefined,
  rightIcon: undefined,
  rounded: true
})

const COMPONENT_CLASS = CLASS_PREFIX + 'btn'

const classBtn = computed(() => {
  const sizeClasses = {
    'btn--sm': props.size === 'sm',
    'btn--md': props.size === 'md',
    'btn--lg': props.size === 'lg'
  };
  const disabledClass= {
    'btn--disabled': props.isDisabled
  }
  const otherClasses = {
    [`${COMPONENT_CLASS}--loading`]: props.isLoading,
    [`${COMPONENT_CLASS}--rounded`]: props.rounded
  };
  const variantClasses = props.variant ? { [`${COMPONENT_CLASS}--${props.variant}`]: true } : {};
  const variantColorClasses = props.variantColor
    ? { [`${COMPONENT_CLASS}--${props.variantColor}`]: true }
    : {};
  return { ...sizeClasses, ...variantClasses, ...variantColorClasses,...disabledClass, ...otherClasses }
})
</script>
<template>
  <button v-if="!link" :class="[`${CLASS_PREFIX}button`, classBtn]" :disabled="isDisabled">
    <JSpinner v-if="isLoading" :size="size" />
    <slot name="prepend" v-if="$slots.prepend || leftIcon">
      <i class="material-icons left">{{ leftIcon }}</i>
    </slot>
    <slot></slot>
    <slot name="append" v-if="$slots.append || rightIcon">
      <i class="material-icons right">{{ rightIcon }}</i>
    </slot>
  </button>
  <router-link v-else :to="to">
    <button :class="[`${CLASS_PREFIX}button`, classBtn]" :disabled="isDisabled">
      <JSpinner v-if="isLoading" />
      <slot name="prepend" v-if="$slots.prepend || leftIcon">
        <i class="material-icons left">{{ leftIcon }}</i>
      </slot>
      <slot></slot>
      <slot name="append" v-if="$slots.append || rightIcon">
        <i class="material-icons right">{{ rightIcon }}</i>
      </slot>
    </button>
  </router-link>
</template>
<style lang="scss">
@use './Button.scss';
</style>
