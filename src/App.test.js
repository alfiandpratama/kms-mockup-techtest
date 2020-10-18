import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Dashboard from './views/dashboard/Dashboard.js'
import Registration from './views/registrations/Registration.js'
import Registrations from './views/registrations/Registrations.js'

it('mounts without crashing', () => {
  const wrapper = shallow(<App />)
  wrapper.unmount()
})

it('mounts dashboard without crashing', () => {
  const wrapper = shallow(<Dashboard />)
  wrapper.unmount()
})

it('mounts registration without crashing', () => {
  const wrapper = shallow(<Registration />)
  wrapper.unmount()
})

it('mounts registrations without crashing', () => {
  const wrapper = shallow(<Registrations />)
  wrapper.unmount()
})
