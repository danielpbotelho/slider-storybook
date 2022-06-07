import React from 'react'

import { Text } from '@/components/Atoms'

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  parameters: {
    layout: 'fullscreen',
  },
}

const Template = (args) => <Text {...args} />

export const Paragraph = Template.bind({})
Paragraph.args = {}
