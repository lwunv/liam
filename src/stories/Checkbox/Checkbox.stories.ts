import Checkbox from './Checkbox.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof Checkbox> = {
  title: 'Example/JCheckbox',
  tags: ['autodocs'],
  argTypes: {
    isDisabled: { control: 'string' },
    variant: {
      options: ['primary', 'secondary', 'info', 'success', 'error']
    },
    size: {
      options: ['sm', 'md', 'lg']
    }
  }
}
export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args: any) => ({
    components: { Checkbox },
    setup() {
      return { args }
    },
    template: '<Checkbox v-bind="args"></Checkbox>',
    args: {
      default: 'Primary',
      size: 'sm',
      label: 'Demo'
    }
  })
}
