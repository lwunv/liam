import type { Meta, StoryObj } from '@storybook/vue3'
import JBadge from '.'

const meta: Meta<typeof JBadge> = {
  title: 'Components/Badge',
  component: JBadge,
  tags: ['autodocs'],
  argTypes: {
    // color: { control: 'color', description: 'CSS color or theme color name' },
  },
}

export default meta
type Story = StoryObj<typeof JBadge>

export const Default: Story = {
  render: (args: any) => ({
    components: { JBadge },
    setup() {
      return { args } 
    },
    template: `
      <j-badge content="90" color="error" style="margin-right: 50px;">
        <span>Alert</span>
      </j-badge>
      <j-badge content="90" color="success" dot style="margin-right: 50px;">
        <span>Home</span>
      </j-badge>
      <j-badge content="100" inline color="#03fc5e" style="margin-right: 50px;">
        Cart
      </j-badge>
      <j-badge content="1000" floating color="#000" background="#03fc5e" style="margin-right: 50px;">
        Message
      </j-badge>
    `,
    args: {
      thickness: 1,
      length: 400
    }
  }),
}
