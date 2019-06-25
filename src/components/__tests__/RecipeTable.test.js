import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/testingUtilities';
import RecipeTable from '../recipeTableComponents/RecipeTable';

const testProps = {
  portions: 'Test string',
  updatePortions: () => {},
  addIngredientInput: () => {},
  submitRecipe: () => {},
  recipeText: [],
  updateIngredient: () => {},
  removeIngredient: () => {}
};

describe('RecipeTable component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<RecipeTable {...testProps} />);
  });

  it('Should render table without errors', () => {
    const table = findByTestAttr(component, 'recipeTable');
    expect(table.length).toBe(1);
  });

  it('Should render button container without errors', () => {
    const buttonContainer = findByTestAttr(component, 'recipeAddSubmitButtons');
    expect(buttonContainer.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(RecipeTable, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
