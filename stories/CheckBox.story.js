import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Toggle } from '../components'
import Container from './Container'

storiesOf('Checkbox Button', module)
  .addDecorator((story) => <Container action={action} value={false}>{story()}</Container>)
  .add('Default', () => (
    <Toggle
      name='basic'
      type='checkbox'
      label={'I am label'}
    />
  ))
  .add('Disabled', () => (
    <Toggle
      name='story1'
      label='hello'
      disabled
      count={6}
      type='checkbox'
    />
  ))
  .add('Tag', () => (
    <Toggle
      name={'tag'}
      label={'hello'}
      count={6}
      mode={'tag'}
      type={'checkbox'}
    />
  ))
  .add('Tag Disabled', () => (
    <Toggle
      name={'tag'}
      label={'hello'}
      count={6}
      mode={'tag'}
      type={'checkbox'}
      disabled
    />
  ))
