import Spinner from './Spinner.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Spinner> = {
  title: 'Example/Spinner',
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color', description: 'CSS color or theme color name' },
    size: {
      options: ['sm', 'md', 'lg']
    }
  }
}
export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  render: (args: any) => ({
    components: { Spinner },
    setup() {
      return { args }
    },
    template: '<Spinner v-bind="args"></Spinner>',
    args: {
      color: 'red',
      size: 'md'
    }
  })
}
