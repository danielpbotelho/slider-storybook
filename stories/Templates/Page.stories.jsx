import React from 'react'
import { within, userEvent } from '@storybook/testing-library'

import { Page } from '../../components/Templates'

export default {
  title: 'Components/Templates/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

const Template = (args) => <Page {...args} />

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing

export const SliderOnPage = Template.bind({})
