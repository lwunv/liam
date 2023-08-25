import type { Meta, StoryObj } from '@storybook/vue3'
import JAlert from '.'

const meta: Meta<typeof JAlert> = {
  title: 'Components/Alert',
  component: JAlert,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof JAlert>

export const Default: Story = {
  render: (args: any) => ({
    components: { JAlert },
    setup() {
      return { args } 
    },
    template: `
    <j-alert style="margin-top: 15px" color="success"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor." />

    <j-alert style="margin-top: 15px" color="info"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor." />

    <j-alert style="margin-top: 15px" color="warning"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor." />

    <j-alert style="margin-top: 15px" color="danger" duration="0"
      text="Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor.">
    </j-alert>
    `,
    args: {
      thickness: 1,
      length: 400
    }
  }),
}
