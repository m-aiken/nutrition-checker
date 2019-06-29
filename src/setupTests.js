import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, checkProps } from './utilities/testingUtilities';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});

global.React = React;
global.shallow = shallow;
global.findByTestAttr = findByTestAttr;
global.checkProps = checkProps;
