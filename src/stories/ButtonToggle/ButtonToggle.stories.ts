import JButton from '@/stories/containment/button'
import JButtonToggle from '@/stories/ButtonToggle'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof JButtonToggle> = {
  title: 'Components/Containment/ButtonToggle',
  tags: ['autodocs'],
  argTypes: {
    isAttached: { control: 'boolean' },
    spacing: { control: 'string' },
    variantColor: {
      options: ['primary', 'secondary', 'info', 'success', 'error']
    },
    variant: {
      options: ['default', 'text', 'plain', 'outlined']
    },
    size: {
      options: ['sm', 'md', 'lg']
    },
    multiple:{ control: 'boolean' },
  }
}
export default meta
type Story = StoryObj<typeof JButtonToggle>

export const Default: Story = {
  render: (args: any) => ({
    components: { JButton, JButtonToggle },
    setup() {
      return { args }
    },
    template:
      '<JButtonToggle v-bind="args"><JButton>Button</JButton><JButton>Button</JButton></JButtonToggle>',
    args: {
      spacing: '16px',
      size: 'sm'
    }
  })
}
