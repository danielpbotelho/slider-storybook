import React from 'react'

import { Text } from '@/components/Atoms'

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
}

const Template = (args) => <Text {...args} />

export const Paragraph = Template.bind({})
Paragraph.args = {
  variant: 'paragraph',
  children: 'SIMPLE PARAGRAPH',
}

export const Title = Template.bind({})
Title.args = {
  variant: 'title',
  children: 'SIMPLE TITLE',
}

export const Detail = Template.bind({})
Detail.args = {
  variant: 'text-detail',
  children: 'SIMPLE TEXT DETAIL',
}
