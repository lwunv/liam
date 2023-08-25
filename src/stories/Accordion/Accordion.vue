<template>
  <div :class="classes" :style="styles">
    <div :style="itemStyles" :class="`${CLASS_PREFIX}accordion__item ${active === index ? 'open' : ''}`"
      v-for="(item, index) in props?.items" :key="index">
      <div :class="`${CLASS_PREFIX}accordion__title`" @click="active === index ? active = -1 : active = index">
        <strong>
          {{ item.title }}
        </strong>
        <div :class="`${CLASS_PREFIX}accordion__icon`">
          <i class="material-icons">expand_less_icon</i>
          <slot name="iconOpen" v-if="active === index && hasSlot('iconOpen')" />
          <slot name="iconClose" v-if="active !== index && hasSlot('iconClose')" />
        </div>
      </div>
      <div :class="`${CLASS_PREFIX}accordion__content`" ref="content" :style="getContentHeight(index)">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { computed, ref, useSlots } from 'vue'
import { setPropSize } from '@/utils/helpers'

const active = ref(-1);

defineOptions({ name: `${PREFIX}Accordion` })

interface iAccordionItem {
  title?: string;
  content: string;
}

const props = defineProps({
  radius: [String, Number],
  gap: [String, Number],
  color: [String],
  items: [Array as () => iAccordionItem[]]
})

const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}

const classes = computed(() => ({
  [`${CLASS_PREFIX}accordion`]: true
}))

const styles = computed(() => {
  const styleObj: any = {}

  return styleObj
})

const itemStyles = computed(() => {
  const styleObj: any = {}

  if (props.radius) {
    let radius = setPropSize(props.radius)
    styleObj.borderRadius = radius
  }

  let gap = setPropSize(props.gap || 10)
  styleObj.marginBottom = gap

  return styleObj
})

const content = ref([])

const getContentHeight = (index: number) => {
  const item = content?.value[index] as HTMLElement;
  const maxHeight = item ? item.scrollHeight : 0;
  return {
    maxHeight: (maxHeight + 20) + 'px',
    transition: `all ${maxHeight / 200 * 300}ms`
  };
}
</script>

<style lang="scss" scoped>
@import './Accordion.scss';
</style>