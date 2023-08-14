import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './login-form'

import { BrowserRouterDecorator } from '@/common/utils/decorators.tsx'

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [BrowserRouterDecorator],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
