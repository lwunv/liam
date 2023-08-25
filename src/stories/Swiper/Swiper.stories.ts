import type { Meta, StoryObj } from '@storybook/vue3'
import JBottomNavigation from '.'

const meta: Meta<typeof JBottomNavigation> = {
  title: 'Components/BottomNavigation',
  component: JBottomNavigation,
  tags: ['autodocs'],
  argTypes: {
    // color: { control: 'color', description: 'CSS color or theme color name' },
  },
}

export default meta
type Story = StoryObj<typeof JBottomNavigation>

export const Default: Story = {
  render: (args: any) => ({
    components: { JBottomNavigation },
    setup() {
      return { args } 
    },
    template: `
    <j-bottom-navigation
      :items="[{ link: 'tb', text: 'Thái Bình' }, { link: 'hn', text: 'Hà Nội' }, { link: 'sg', text: 'Hồ Chí Minh' }]"
      style="margin-top: 30px; margin-bottom: 25px">
    </j-bottom-navigation>
    `,
    args: {
      thickness: 1,
      length: 400
    }
  }),
}
