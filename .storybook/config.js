import * as React from 'react'
import { configure, addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'

addParameters({
  options: {
    name: '@repay/react-credit-card',
    url: 'https://github.com/repaygithub/react-credit-card',
  },
  info: false,
})
addDecorator(withInfo())
addDecorator(withKnobs)
addDecorator(story => (
  <div
    style={{
      fontFamily: 'Helvetica, sans serif',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      flexDirection: 'column',
      marginTop: '20px'
    }}
  >
    {story()}
  </div>
))

function loadStories() {
  require('../stories/ReactCreditCard.stories.tsx')
  require('../stories/Examples.stories.tsx')
}

configure(loadStories, module)
