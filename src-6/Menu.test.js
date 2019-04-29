import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Menu,MenuItem} from './Menu'

// telling enzyme to connect to our app
configure({ adapter : new Adapter() })

describe('<MenuItem />',() => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Menu />)
  })

  it('should display four <MenuItem /> when authenticated',() => {
      // create shallow copy of menu component
      //let wrapper = shallow(<Menu isAuthenticated />)
      wrapper.setProps({isAuthenticated: true})
      expect(wrapper.find(MenuItem)).toHaveLength(4)

  })

  it('should display three <MenuItem /> when not authenticated',() => {

      //let wrapper = shallow(<Menu />)
      expect(wrapper.find(MenuItem)).toHaveLength(3)

  })

})
