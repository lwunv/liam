<template>
  <nav :class="`${CLASS_PREFIX}breadcrumb`">
    <ol v-if="hasSlot('default')">
      <slot />
    </ol>
    <ol v-else>
      <template v-for="(item, index) in props?.items" :key="index">
        <j-breadcrumb-item v-if="hasSlotItem(item)" :isCurrent="index === lastIndex">
          <slot name="item" :isCurrent="index === lastIndex"
            :item="{ ...item, separator: item?.separator || props.separator }">
          </slot>
          <template #separator v-if="hasSlot('separator')">
            <slot name="separator" />
          </template>
        </j-breadcrumb-item>
        <j-breadcrumb-item v-else :item="{ ...item, separator: item?.separator || props.separator }"
          :isCurrent="index === lastIndex">
          <template #separator v-if="hasSlot('separator')">
            <slot name="separator" />
          </template>
        </j-breadcrumb-item>
      </template>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { ref, useSlots } from 'vue'
import JBreadcrumbItem from './BreadcrumbItem.vue'

defineOptions({name: `${PREFIX}Breadcrumb`})

interface iBreadcrumbItem {
  label: string;
  link?: string;
  separator?: string;
  router?: boolean;
}

const props = defineProps({
  items: {
    type: Array as () => iBreadcrumbItem[],
    required: false,
  },
  separator: [String]
})
const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}

const hasSlotItem = (item: any) => {
  return !!slots['item'] && item
}
const lastIndex = ref(props?.items && props?.items?.length > 1 ? props?.items?.length - 1 : 0)
</script>
  
<style lang="scss">
@import './Breadcrumb.scss';
</style>

