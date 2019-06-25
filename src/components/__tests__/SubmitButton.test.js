import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/testingUtilities';
import SubmitButton from '../recipeTableComponents/SubmitButton';

const testProps = {
  submitRecipe: () => {}
};

describe('SubmitButton component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<SubmitButton {...testProps} />);
  });

  it('Should render div without errors', () => {
    const container = findByTestAttr(component, 'submitContainer');
    expect(container.length).toBe(1);
  });

  it('Should render button without errors', () => {
    const button = findByTestAttr(component, 'submitButton');
    expect(button.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    const propsError = checkProps(SubmitButton, testProps);
    expect(propsError).toBeUndefined();
  });
});
