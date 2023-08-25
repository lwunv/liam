<script setup>
import { computed } from 'vue'
import { THEME_VARIANT_LIST, CLASS_PREFIX, PREFIX } from '../../utils/constants'

defineOptions({ name: `${PREFIX}Checkbox` })
const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: ''
  },
  id: String,
  name: String,
  value: [String, Boolean],
  label: String,
  variant: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'md'
  },
  isDisabled: Boolean,
  isInvalid: Boolean,
  trueValue: {
    type: Boolean,
    default: true
  },
  falseValue: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['update:modelValue'])
const COMPONENT_CLASS = CLASS_PREFIX + 'checkbox'

//computed
const isChecked = computed(() => {
  if (props.modelValue instanceof Array) {
    return props.modelValue.includes(props.value)
  }
  return props.modelValue === props.trueValue
})
const classCheckbox = computed(() => {
  const sizes = {
    'size-sm': props.size === 'sm',
    'size-md': props.size === 'md',
    'size-lg': props.size === 'lg'
  }
  const variantClasses = THEME_VARIANT_LIST.reduce((cls, variant) => {
    if (!variant) return cls
    cls[`${COMPONENT_CLASS}--${variant}`] = props.variant === variant ? true : false
    return cls
  }, {})
  const disabledClass = { 'j-checkbox--disabled': true }
  return { ...sizes, ...(props.isDisabled ? disabledClass : variantClasses) }
})
//methods
const updateInput = (event) => {
  console.log('frmo')
  let checked = event.target.checked
  if (props.modelValue instanceof Array) {
    let newValue = [...props.modelValue]
    if (checked) {
      newValue.push(props.value)
    } else {
      newValue.splice(newValue.indexOf(props.value))
    }
    emits('update:modelValue', newValue)
  } else {
    emits('update:modelValue', checked ? props.trueValue : props.falseValue)
  }
}
</script>
<template>
  <label :class="[`${CLASS_PREFIX}checkbox`,classCheckbox]">
    <input
      type="checkbox"
      :value="value"
      :checked="isChecked"
      @change="updateInput"
      :disabled="isDisabled"
      hidden
    />
    <i v-if="!isChecked" class="material-icons">check_box_outline_blank</i>
    <i v-else class="material-icons">check_box</i>
    <span class="label" v-if="label">{{ label }}</span>
  </label>
</template>
<style lang="scss">
@use './Checkbox.scss';
</style>
