import type { CSSProperties, Ref } from 'vue'
import { isRef, toRefs, reactive, watchEffect } from 'vue'
import { isCssColor } from '../utils/helpers'
import { CLASS_PREFIX } from '@/utils/constants'

export interface ColorData {
  classes: Ref<string[]>,
  styles: Ref<CSSProperties>
}

const useColor = (color?: string | Ref<string | undefined>): ColorData => {
  const result = reactive<
    { classes: string[], styles: CSSProperties }
  >({
    classes: [],
    styles: {}
  })

  watchEffect(() => {
    const colorValue = isRef(color) ? color.value : color

    if (!colorValue) {
      result.classes = []
      result.styles = {}
      return
    }

    if (isCssColor(colorValue)) {
      result.styles.color = colorValue
    } else {
      result.classes = [`${CLASS_PREFIX}text-${colorValue}`]
    }
  }, { flush: 'sync' })

  return toRefs(result)
}

export default useColor
