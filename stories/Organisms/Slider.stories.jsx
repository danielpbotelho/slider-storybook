import React from 'react'

import { Slider } from '@/components/Organisms'

export default {
  title: 'Components/Organisms/Slider',
  component: Slider,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

const Template = (args) => <Slider />

export const Default = Template.bind({})
Default.args = {}
