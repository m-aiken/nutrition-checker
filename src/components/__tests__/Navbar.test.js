import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utilities/testingUtilities';
import Navbar from '../Navbar';

describe('Navbar component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Navbar />);
  });

  it('Should render navbar without errors', () => {
    const navbar = findByTestAttr(component, 'navbar');
    expect(navbar.length).toBe(1);
  });

  it('Should render nav span without errors', () => {
    const navSpan = findByTestAttr(component, 'navbarSpan');
    expect(navSpan.length).toBe(1);
  });
});
