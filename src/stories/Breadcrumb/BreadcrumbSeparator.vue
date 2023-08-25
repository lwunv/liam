<template>
  <div :class="`${CLASS_PREFIX}breadcrumb_separator`" v-if="hasSlot('default')">
    <slot v-if="hasSlot('default')" />
  </div>
  <div :class="`${CLASS_PREFIX}breadcrumb_separator`" v-else v-html="props?.separator || '/'"> </div>
</template>

<script setup lang="ts">
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { useSlots } from 'vue'

defineOptions({name: `${PREFIX}BreadcrumbSeparator`})

const props = defineProps({
  separator: [Object, String]
})

const slots = useSlots()
const hasSlot = (name: string) => {
  return !!slots[name]
}
</script>