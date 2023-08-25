<template>
  <li :class="`${CLASS_PREFIX}breadcrumb_item`" v-if="hasSlot('default')">
    <slot />
    <template v-if="!isCurrent">
      <j-breadcrumb-separator v-if="hasSlot('separator')" :separator="props?.item?.separator">
        <slot name="separator" v-if="hasSlot('separator')" />
      </j-breadcrumb-separator>
      <j-breadcrumb-separator v-else :separator="props?.item?.separator" />
    </template>
  </li>
  <li :class="`${CLASS_PREFIX}breadcrumb_item`" v-else>
    <j-breadcrumb-link :item="props?.item" :isCurrent="isCurrent" :isRouter="isRouter" />
    <template v-if="!isCurrent">
      <j-breadcrumb-separator v-if="hasSlot('separator')" :separator="props?.item?.separator">
        <slot name="separator" v-if="hasSlot('separator')" />
      </j-breadcrumb-separator>
      <j-breadcrumb-separator v-else :separator="props?.item?.separator" />
    </template>
  </li>
</template>

<script setup lang="ts">
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { useSlots } from 'vue'
import JBreadcrumbLink from './BreadcrumbLink.vue'
import JBreadcrumbSeparator from './BreadcrumbSeparator.vue'

defineOptions({name: `${PREFIX}BreadcrumbItem`})

const props = defineProps({
  isCurrent: [Boolean],
  isRouter: [Boolean],
  item: [Object]
})
const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}
</script>