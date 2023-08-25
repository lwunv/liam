import type { Meta, StoryObj } from '@storybook/vue3'
import JAccordion from '.'

const meta: Meta<typeof JAccordion> = {
  title: 'Components/Accordion',
  component: JAccordion,
  tags: ['autodocs'],
  argTypes: {
    // color: { control: 'color', description: 'CSS color or theme color name' },
  },
}

export default meta
type Story = StoryObj<typeof JAccordion>

export const Default: Story = {
  render: (args: any) => ({
    components: { JAccordion },
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
