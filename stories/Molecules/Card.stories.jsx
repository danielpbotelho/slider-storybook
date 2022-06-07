import React from 'react'

import { Card } from '@/components/Molecules'

export default {
  title: 'Components/Molecules/Card',
  component: Card,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  index: 1,
  currentIndex: 2,
  detail: `Client in Atlanta`,
  message: `Owning my home allowed me to
  become an entrepreneur and
  laid down a path to financial
  freedom.`,
}

export const Highlighted = Template.bind({})
Highlighted.args = {
  index: 1,
  currentIndex: 1,
  detail: `Client in Atlanta`,
  message: `Owning my home allowed me to
  become an entrepreneur and
  laid down a path to financial
  freedom.`,
}
