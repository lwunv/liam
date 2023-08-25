import type { Meta, StoryObj } from '@storybook/vue3'
import { JBreadcrumb, JBreadcrumbItem } from '.'

const meta: Meta<typeof JBreadcrumb> = {
  title: 'Components/Breadcrumb',
  component: JBreadcrumb,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof JBreadcrumb>

export const Default: Story = {
  render: (args: any) => ({
    components: { JBreadcrumb, JBreadcrumbItem },
    setup() {
      return { args }
    },
    template: `
    <j-breadcrumb :items="[
      { link: '/', label: 'Home', separator: '>>' },
      { link: 'about', label: 'About', separator: '=>', router: true },
      { link: 'components', label: 'Components' }
    ]"/>

    <j-breadcrumb :items="[
      { link: '/', label: 'Home' },
      { link: 'about', label: 'About', separator: '=>' },
      { link: 'components', label: 'Components' }
    ]">
      <template #separator>//</template>
    </j-breadcrumb>

    <j-breadcrumb>
      <j-breadcrumb-item>
        <a>Home</a>
      </j-breadcrumb-item>
      <j-breadcrumb-item>
        <a>About</a>
      </j-breadcrumb-item>
      <j-breadcrumb-item isCurrent>
        <span>Components</span>
      </j-breadcrumb-item>
    </j-breadcrumb>

    <j-breadcrumb>
      <j-breadcrumb-item>
        <a>Home</a>
        <template #separator>//</template>
      </j-breadcrumb-item>
      <j-breadcrumb-item :item="{ link: 'about', label: 'About', separator: '=>' }" />
      <j-breadcrumb-item isCurrent>
        <span>Components</span>
      </j-breadcrumb-item>
    </j-breadcrumb>
    `,
    args: {
      thickness: 1,
      length: 400
    }
  }),
}
