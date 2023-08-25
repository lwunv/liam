import { ThemeColors } from "@/types/theme"

export const PREFIX = 'J'
export const CLASS_PREFIX = 'j-'

export const THEME_VARIANT_LIST = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'dark',
  'light'
]
export const TYPE_VARIANT_LIST = [
  'text',
  'elevated',
  'tonal',
  'outlined',
  'filled'
]
export const COMPONENT_SIZE_LIST = ['default', 'md', 'sm', 'lg', 'xl']

export const STORIES_THEME_COLOR_ARGS_TYPE = {
  control: {
    type: 'color',
    presetColors: [
      { color: ThemeColors.PRIMARY, title: 'Primary' },
      { color: ThemeColors.SECONDARY, title: 'Secondary' },
      { color: ThemeColors.SUCCESS, title: 'Success' },
      { color: ThemeColors.INFO, title: 'Info' },
      { color: ThemeColors.WARNING, title: 'Warning' },
      { color: ThemeColors.DANGER, title: 'Danger' },
      { color: ThemeColors.LIGHT, title: 'Light' },
      { color: ThemeColors.DARK, title: 'Dark' },
    ]
  },
  description: 'CSS color or theme color name'
}
