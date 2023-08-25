import JButton from './Button.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof JButton> = {
  title: 'Components/Containment/Button',
  tags: ['autodocs'],
  argTypes: {
    link: { control: 'boolean' },
    to: { control: 'string' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    variant: {
      options: ['text', 'filled', 'outlined', 'tonal', 'elevated']
    },
    size: {
      options: ['sm', 'md', 'lg']
    }
  }
}
export default meta
type Story = StoryObj<typeof JButton>

export const Default: Story = {
  render: (args: any) => ({
    components: { JButton },
    setup() {
      return { args }
    },
    template: '<JButton v-bind="args">Demo</JButton>',
    args: {
      default: 'Primary',
      size: 'md'
    }
  })
}
