import type { Meta, StoryObj } from '@storybook/vue3'
import { h, resolveComponent } from 'vue'
import { STORIES_THEME_COLOR_ARGS_TYPE, PREFIX } from '@/utils/constants'
import Divider from './Divider.vue'

const meta: Meta<typeof Divider> = {
  title: 'Components/Containment/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    color: STORIES_THEME_COLOR_ARGS_TYPE,
    inset: { control: 'boolean' },
    length: { control: { type: 'number', min: 1, max: 9999, step: 1 } },
    thickness: { control: { type: 'range', min: 1, max: 20, step: 1 } },
    vertical: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Divider>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    thickness: 1,
    length: 400
  },
  render: (args) => ({
    components: { [`${PREFIX}Divider`]: Divider },
    setup() {
      return { args }
    },
    render() {
      const Divider = resolveComponent(`${PREFIX}Divider`)
      return h('div', { style: { width: '100%', height: '30px' } }, [
        h(Divider, { ...args })
      ])
    }
  })
}
