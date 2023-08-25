import JCard from './Card.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof JCard> = {
  title: 'Example/JCard',
  tags: ['autodocs'],
  argTypes: {
    rounded: { control: 'boolean' },
    subtitle: { control: 'string' },
    title: { control: 'string' },
    text: { control: 'string' },
    actions: { control: 'string' },
    width: { control: 'string' },
    variant: {
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain']
    }
  }
}
export default meta
type Story = StoryObj<typeof JCard>

export const Default: Story = {
  render: (args: any) => ({
    components: { JCard },
    setup() {
      return { args }
    },
    template: '<JCard v-bind="args">dwee</JCard>',
    args: {
      subtitle: 'Subtitle',
      title: 'title',
      text: 'To check if a slot is empty, you can use $slots, an object representing the slots passed by the parent component.',
      variant: 'outlined'
    }
  })
}
