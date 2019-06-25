import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/testingUtilities';
import AppDescription from '../AppDescription';

const testProps = {
  resetAll: () => {}
};

describe('AppDescription component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<AppDescription {...testProps} />);
  });

  it('Should render paragraph without errors', () => {
    const description = findByTestAttr(component, 'description');
    expect(description.length).toBe(1);
  });

  it('Should render paragraph 2 without errors', () => {
    const descPartTwo = findByTestAttr(component, 'descPtTwoWithButton');
    expect(descPartTwo.length).toBe(1);
  });

  it('Should render "Remove All" button without errors', () => {
    const removeAllButton = findByTestAttr(component, 'removeAll');
    expect(removeAllButton.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(AppDescription, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
