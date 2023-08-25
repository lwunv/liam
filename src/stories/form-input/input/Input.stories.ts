import type { Meta, StoryObj } from '@storybook/vue3'
import { h } from 'vue'
import Input from './Input.vue'
import { COMPONENT_SIZE_LIST } from '@/utils/constants'

const meta: Meta<typeof Input> = {
  title: 'Components/Form-Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    modelValue: { control: 'text' },
    type: { control: { type: 'select', options: ['text', 'number', 'tel', 'email', 'address', 'password', 'search'] } },
    size: { control: 'select', options: COMPONENT_SIZE_LIST },
    prepend: { control: { type: 'text' } },
    prependClass: { control: 'text' },
    append: { control: 'text' },
    appendClass: { control: 'text' },
    square: { control: 'boolean' },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    valid: { control: 'radio', options: [true, false, null] },
  },
}

export default meta

type Story = StoryObj<typeof Input>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
  render: (args) => ({
    setup() {
      return { args }
    },
    render() {
      return h(Input, { ...args, modelValue: args.modelValue, 'onUpdate:modelValue': (value) => args.modelValue = value })
    }
  }),
}
