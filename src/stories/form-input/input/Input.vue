<script lang="ts" setup>
import './input.scss'
import { computed, ref } from 'vue'
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import type { ComponentSize } from '@/types/theme'

type InputType = 'text' | 'number' | 'tel' | 'email' | 'address' | 'password' | 'search'

interface Props {
  modelValue?: string | number
  type?: InputType
  size?: ComponentSize
  prepend?: string
  prependClass?: string | string[] | Record<string, any>
  append?: string
  appendClass?: string | string[] | Record<string, any>
  square?: boolean
  rounded?: boolean
  disabled?: boolean
  readonly?: boolean
  valid?: boolean | null
}

defineOptions({
  name: `${PREFIX}Input`,
  inheritAttrs: false
})

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  size: 'default',
  valid: null
})

const emit = defineEmits<{
  'update:modelValue': [modelValue: string | number]
}>()

defineSlots<{
  prepend(props: {}): any
  append(props: {}): any
}>()

const inputEl = ref<HTMLInputElement>()
const isFocused = ref(false)

const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

const classes = computed(() => ({
  [`${CLASS_PREFIX}input--${props.size}`]: props.size === 'default' ? false : true,
  [`${CLASS_PREFIX}input--square`]: props.square,
  [`${CLASS_PREFIX}input--rounded`]: props.rounded,
  [`${CLASS_PREFIX}input--focused`]: isFocused.value,
  [`${CLASS_PREFIX}input--disabled`]: props.disabled,
  [`${CLASS_PREFIX}input--readonly`]: props.readonly,
  [`${CLASS_PREFIX}input--valid`]: props.valid === true,
  [`${CLASS_PREFIX}input--invalid`]: props.valid === false
}))

const focus = () => {
  inputEl.value && inputEl.value.focus()
}

defineExpose({
  focus
})
</script>

<template>
  <div :class="[`${CLASS_PREFIX}input`, classes]">
    <div v-if="$slots.prepend || prepend" :class="[`${CLASS_PREFIX}input__prepend`, prependClass]">
      <slot name="prepend">
        {{ prepend }}
      </slot>
    </div>

    <input
      ref="inputEl"
      v-model="value"
      v-bind="$attrs"
      :class="`${CLASS_PREFIX}input__input`"
      :type="type"
      :disabled="disabled"
      :readonly="readonly"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <div v-if="$slots.append || append" :class="[`${CLASS_PREFIX}input__append`, appendClass]">
      <slot name="append">
        {{ append }}
      </slot>
    </div>
  </div>
</template>
