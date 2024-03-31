import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@sirios/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/S1R1OS.png',
    alt: 'SiRiOS Tecnologia em Investimentos',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}