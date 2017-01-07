import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { text, boolean, number, select, object } from '@kadira/storybook-addon-knobs'
import { Toggle, Group } from '../components'
import Container from './Container'

const firstArg = name => {
  const actionFn = action(name)
  return (...args) => actionFn(args[0])
}

const value = [{
  id: 1,
  label: 'Swimming Pool',
  count: 6
}, {
  id: 2,
  label: 'Gymnasium'
}, {
  id: 3,
  label: 'Parking'
}]

storiesOf('Playground', module)
  .add('Toggle Component', () => (
    <Container action={firstArg} value={false}>
      <Toggle
        name={text('Name', 'basic')}
        className={text('Classname', 'demo')}
        type={select('Type', ['radio', 'checkbox', 'switch'], 'radio')}
        label={text('Label', 'I am label')}
        attributes={object('Attributes', {})}
        count={number('Count', 6)}
        disabled={boolean('Disabled', false)}
        iconLabel={text('icon Label', '')}
        mode={select('Mode', ['normal', 'tag'], 'normal')}
        value={boolean('Value', false)}
      />
    </Container>
  ))
  .add('Group Component', () => {
    const valueKnob = object('Value', value)
    return <Container action={firstArg} value={valueKnob}>
      <Group
        name={text('Name', 'basic')}
        className={text('Classname', 'group')}
        type={select('Type', ['radio', 'checkbox', 'switch'], 'radio')}
        disabled={boolean('disabled', false)}
        mode={select('Mode', ['normal', 'tag'], 'normal')}
        value={valueKnob}
      />
    </Container>
  })
