<template>
  <span v-if="!props?.item?.link || isCurrent">
    {{ props?.item?.label }}
  </span>
  <router-link v-else-if="props?.item?.router || isRouter" :to="props?.item?.link">
    {{ props?.item?.label }}
  </router-link>
  <a v-else :href="props?.item?.link">
    {{ props?.item?.label }}
  </a>
</template>

<script setup lang="ts">
import { PREFIX } from '@/utils/constants'

defineOptions({name: `${PREFIX}BreadcrumbLink`})

const props = defineProps({
  isCurrent: [Boolean],
  isRouter: [Boolean],
  item: [Object]
})
</script>