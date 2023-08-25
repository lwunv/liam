import type { Meta, StoryObj } from '@storybook/vue3'
import JBanner from '.'

const meta: Meta<typeof JBanner> = {
  title: 'Components/Banner',
  component: JBanner,
  tags: ['autodocs'],
  argTypes: {
    // color: { control: 'color', description: 'CSS color or theme color name' },
  },
}

export default meta
type Story = StoryObj<typeof JBanner>

export const Default: Story = {
  render: (args: any) => ({
    components: { JBanner },
    setup() {
      return { args } 
    },
    template: `
    <j-banner :width="800" stacked avatar="https://picsum.photos/100/100?random"
      link="home"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus."
      title="title">
      <template #actions><button>Actions</button></template>
    </j-banner>
    `,
    args: {
      thickness: 1,
      length: 400
    }
  }),
}
