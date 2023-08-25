import type { Meta, StoryObj } from '@storybook/vue3'
import JAutocomplete from '.'

const meta: Meta<typeof JAutocomplete> = {
  title: 'Components/Autocomplete',
  component: JAutocomplete,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof JAutocomplete>

export const Default: Story = {
  render: (args: any) => ({
    components: { JAutocomplete },
    setup() {
      return { args } 
    },
    template: `
    <j-autocomplete :width="600" placeholder="Enter keyword" label="Search"
      :items="[{ value: 'tb', text: 'Thái Bình' }, { value: 'hn', text: 'Hà Nội' }, { value: 'sg', text: 'Hồ Chí Minh' }]"
      style="margin-top: 30px; margin-bottom: 25px">
    </j-autocomplete>
    `,
    args: {
      thickness: 1,
      length: 400
    }
  }),
}
