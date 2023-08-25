<template>
  <div v-if="showAlert" :class="classes" :style="styleObj">
    <div :class="`${CLASS_PREFIX}alert__icon`">
      <icon-error v-if="icon === 'danger' || icon === 'error'" />
      <icon-warning v-if="icon === 'warning'" />
      <icon-info v-if="icon === 'info'" />
      <icon-success v-if="icon === 'success'" />
      <slot name="icon" v-if="hasSlot('icon')" />
    </div>
    <div v-if="props.title" :class="`${CLASS_PREFIX}alert__title`">{{ props.title }}</div>
    <div :class="`${CLASS_PREFIX}alert__content`">{{ props.text }}</div>
    <div v-if="!props.disableClose" :class="`${CLASS_PREFIX}alert__close`" @click="showAlert = false">
      <slot name="icon" v-if="hasSlot('closeIcon')" />
      <icon-close />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed, onMounted, ref, useSlots } from 'vue'
import IconClose from '../../assets/icons/icon-close.svg'
import IconError from '../../assets/icons/icon-error.svg'
import IconWarning from '../../assets/icons/icon-warning.svg'
import IconInfo from '../../assets/icons/icon-info.svg'
import IconSuccess from '../../assets/icons/icon-success.svg'
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { convertToRGBA, includeVariant } from '@/utils/helpers'

defineOptions({ name: `${PREFIX}Alert` })

const showAlert = ref(true);

const props = defineProps({
  color: [String],
  icon: [String],
  title: [String],
  text: [String],
  duration: [Number, String],
  disableClose: [Boolean],
  shadow: [Boolean],
  prominent: [Boolean],
})

function closeAlert() {
  showAlert.value = false;
}

onMounted(() => {
  if (props.duration !== 0) {
    setTimeout(closeAlert, typeof props.duration === "string" ? parseInt(props.duration) : props.duration || 5000);
  }
});

const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}

const icon = props.icon || props.color || ''

const classes = computed(() => ({
  [`${CLASS_PREFIX}alert`]: true,
  [props.color as string]: includeVariant(props.color),
  'box-shadow': props.shadow
}))

const styleObj = computed(() => {
  const style: any = {}

  if (props.color) {
    style.color = props.color
    style.background = convertToRGBA(props.color, 0.25)
  }

  return style
})
</script>

<style lang="scss" scoped>
@import './Alert.scss';
</style>