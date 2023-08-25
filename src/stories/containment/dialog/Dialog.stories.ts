import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Dialog from './Dialog.vue'
import { COMPONENT_SIZE_LIST } from '@/utils/constants'
// import Button from '../button/Button.vue'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Containment/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'boolean' },
    width: { control: { type: 'number', min: 280, max: 9999, step: 1 } },
    maxWidth: { control: { type: 'number', min: 280, max: 9999, step: 1 } },
    size: { control: 'select', options: COMPONENT_SIZE_LIST },
    modalClass: { control: 'text' },
    headerClass: { control: 'text' },
    bodyClass: { control: 'text' },
    footerClass: { control: 'text' }
  },
}

export default meta

type Story = StoryObj<typeof Dialog>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    title: "Dialog title"
  },
  render: (args) => ({
    components: { JDialog: Dialog },
    setup() {
      const handleClick = () => {
        args.modelValue = !args.modelValue
      }

      return { args, handleClick }
    },
    render() {
      return h('div', {}, [
        h('button', { onClick: this.handleClick }, 'Open Dialog'),
        h(Dialog, {
          ...args,
          onOk: () => this.args.modelValue = false,
          onCancel: () => this.args.modelValue = false
        }, () => 'Dialog content')
      ])
    }
  }),
}
