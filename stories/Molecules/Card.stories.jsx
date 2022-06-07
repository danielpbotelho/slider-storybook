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

const Template = (args) => <Card />

export const Default = Template.bind({})
Default.args = {}
