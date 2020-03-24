import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import React from 'react'
import '../src/index.scss'

const CENTER_STYLE = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
  flexDirection: 'column',
}

addDecorator(withKnobs)
addDecorator(storyFn => <div style={CENTER_STYLE}>{storyFn()}</div>)

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'React boilerpate',
    }),
    panelPosition: 'right',
  },
  backgrounds: [{ name: 'Background', value: '#16161a', default: true }],
})

configure(require.context('../src', true, /\.stories\.js$/), module)
