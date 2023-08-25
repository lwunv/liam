<script lang="ts" setup>
import './divider.scss'
import { toRef, computed } from 'vue'
import { PREFIX, CLASS_PREFIX } from '@/utils/constants'
import { setPropSize } from '@/utils/helpers'
import type { ThemeVariant } from '@/types/theme'
import type { Color } from '@/types/utils'
import useColor from '@/composables/useColor'

interface Props {
  color?: ThemeVariant | Color
  inset?: boolean
  length?: number | string
  thickness?: number | string
  vertical?: boolean
}

type DividerKey = 'borderRightWidth' | 'borderTopWidth' | 'maxHeight' | 'maxWidth'
type DividerStyles = Partial<Record<DividerKey, string>>

defineOptions({
  name: `${PREFIX}Divider`
})

const props = withDefaults(defineProps<Props>(), {
  color: undefined,
  inset: false,
  length: undefined,
  thickness: undefined,
  vertical: false,
})

const dividerStyles = computed(() => {
  const styles: DividerStyles = {}

  if (props.length) {
    styles[props.vertical ? 'maxHeight' : 'maxWidth'] = setPropSize(props.length)
  }

  if (props.thickness) {
    console.log('thickness', setPropSize(props.thickness))
    styles[props.vertical ? 'borderRightWidth' : 'borderTopWidth'] = setPropSize(props.thickness)
  }

  return styles
})

const {
  classes: colorClasses, styles: colorStyles
} = useColor(toRef(props, 'color'))
</script>

<template>
  <hr
    :class="[
      `${CLASS_PREFIX}divider`,
      {
        [`${CLASS_PREFIX}divider--inset`]: $props.inset,
        [`${CLASS_PREFIX}divider--vertical`]: props.vertical
      },
      colorClasses
    ]"
    :aria-orientation="
      !$attrs.role || $attrs.role === 'separator'
        ? props.vertical
          ? 'vertical'
          : 'horizontal'
        : undefined
    "
    :role="`${$attrs.role || 'separator'}`"
    :style="[dividerStyles, colorStyles]"
  />
</template>
