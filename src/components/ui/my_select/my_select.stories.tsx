import type { Meta, StoryObj } from '@storybook/react'

import { MySelect } from './'

const meta = {
  title: 'Components/Select',
  component: MySelect,
  tags: ['autodocs'],
} satisfies Meta<typeof MySelect>

export default meta
type Story = StoryObj<typeof meta>

export const MySelectStory: Story = {}
