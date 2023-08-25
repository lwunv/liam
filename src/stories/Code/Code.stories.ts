import Code from './Code.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Code> = {
  title: 'Example/Code',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'info', 'success', 'error']
    }
  }
}
export default meta
type Story = StoryObj<typeof Code>

export const Default: Story = {
  render: (args: any) => ({
    components: { Code },
    setup() {
      return { args }
    },
    template: '<Code v-bind="args">{{args.default}}</Code>',
    args: {
      default: 'Primary',
      variant: 'primary'
    }
  })
}
