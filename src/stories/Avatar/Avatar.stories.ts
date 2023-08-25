import type { Meta, StoryObj } from '@storybook/vue3'
import JAvatar from '.'

const meta: Meta<typeof JAvatar> = {
  title: 'Components/Avatar',
  component: JAvatar,
  tags: ['autodocs'],
  argTypes: {
    // color: { control: 'color', description: 'CSS color or theme color name' },
  },
}

export default meta
type Story = StoryObj<typeof JAvatar>

export const Default: Story = {
  render: (args: any) => ({
    components: { JAvatar },
    setup() {
      return { args } 
    },
    template: `
    <j-avatar image="https://picsum.photos/100/100?random" shadow />
    `,
    args: {
      thickness: 1,
      length: 400
    }
  }),
}
