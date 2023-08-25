<script lang="ts" setup>
import './dialog.scss'
import { computed, ref, watchEffect, watch } from 'vue'
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { setPropSize } from '@/utils/helpers'
// import Button from '@/stories/containment/button/Button.vue'
import type { ComponentSize } from '@/types/theme'

interface Props {
  modelValue?: boolean
  static?: boolean
  width?: string | number
  maxWidth?: string | number
  size?: ComponentSize
  centered?: boolean
  title?: string
  okLoading?: boolean
  cancelLoading?: boolean
  footer?: boolean
  header?: boolean
  cancelText?: string
  okText?: string
  noBackdrop?: boolean
  transition?: 'fade' | 'scale' | boolean // true = 'fade'
  modalClass?: string | string[] | Record<string, any>
  headerClass?: string | string[] | Record<string, any>
  bodyClass?: string | string[] | Record<string, any>
  footerClass?: string | string[] | Record<string, any>
  btnCancelProps?: Record<string, any>
  btnOkProps?: Record<string, any>
  closeIcon?: string
}

defineOptions({
  name: `${PREFIX}Dialog`,
  inheritAttrs: false
})

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  size: 'default',
  footer: true,
  header: true,
  cancelText: 'Cancel',
  okText: 'Save',
  transition: 'fade',
  modalClass: '',
  headerClass: '',
  bodyClass: '',
  footerClass: '',
  btnCancelProps: () => ({}),
  btnOkProps: () => ({ variant: 'primary' }),
  closeIcon: '×'
})

const emit = defineEmits<{
  'update:modelValue': [modelValue: boolean]
  ok: []
  cancel: []
}>()

defineSlots<{
  default(props: {}): any
  header(props: {}): any
  closeIcon(props: {}): any
  footer(props: {}): any
  cancelText(props: {}): any
  okText(props: {}): any
}>()

const isHidden = ref(props.static ? false : !props.modelValue)
const isTransitioning = ref(false)

const visible = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

const handleKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Esc' || event.key === 'Escape') {
    emit('cancel')
  }
}

watchEffect((onCleanup) => {
  window.addEventListener('keyup', handleKeyUp)

  onCleanup(() => {
    window.removeEventListener('keyup', handleKeyUp)
  })
})

watch(visible, (newVisible) => {
  if (newVisible && isHidden.value) {
    isHidden.value = false
  }
})
</script>

<template>
  <Teleport v-if="!isHidden" to="body" :disabled="static">
    <div
      v-show="visible"
      :class="[
        `${CLASS_PREFIX}dialog`,
        { [`${CLASS_PREFIX}dialog--centered`]: centered },
        modalClass
      ]"
    >
      <div v-if="!noBackdrop" :class="`${CLASS_PREFIX}dialog__backdrop`" @click="emit('cancel')" />

      <div
        v-bind="$attrs"
        :class="[
          `${CLASS_PREFIX}dialog__dialog`,
          {
            [`${CLASS_PREFIX}dialog__dialog--sm`]: size === 'sm',
            [`${CLASS_PREFIX}dialog__dialog--md`]: size === 'md',
            [`${CLASS_PREFIX}dialog__dialog--lg`]: size === 'lg'
          }
        ]"
        tabindex="-1"
        role="dialog"
        :style="{
          width: width ? setPropSize(width) : undefined,
          maxWidth: maxWidth ? setPropSize(maxWidth) : undefined
        }"
      >
        <div :class="`${CLASS_PREFIX}dialog__content`" role="document">
          <div :class="[`${CLASS_PREFIX}dialog__header`, headerClass]">
            <slot name="header">
              <div :class="`${CLASS_PREFIX}dialog__header-content`">
                <h5 :class="`${CLASS_PREFIX}dialog__header-title`">{{ title }}</h5>
                <button
                  :class="`${CLASS_PREFIX}dialog__btn-close`"
                  aria-label="Close"
                  @click="emit('cancel')"
                >
                  <!-- TODO: Resolve slot icon -->
                  <slot name="closeIcon">
                    <span class="material-icons">close</span>
                  </slot>
                </button>
              </div>
            </slot>
          </div>

          <div :class="[`${CLASS_PREFIX}dialog__body`, bodyClass]">
            <slot />
          </div>

          <div :class="[`${CLASS_PREFIX}dialog__footer`, footerClass]">
            <Button
              v-bind="btnCancelProps"
              :class="`${CLASS_PREFIX}dialog__footer-btn`"
              :loading="cancelLoading"
              :size="size"
              @click="emit('cancel')"
            >
              <slot name="cancelText">{{ cancelText }}</slot>
            </Button>

            <Button
              v-bind="btnOkProps"
              :class="`${CLASS_PREFIX}dialog__footer-btn`"
              :loading="okLoading"
              :size="size"
              @click="emit('ok')"
            >
              <slot name="okText">{{ okText }}</slot>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
