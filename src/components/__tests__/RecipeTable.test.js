import RecipeTable from '../recipeTableComponents/RecipeTable';

const testProps = {
  portions: 'Test String',
  updatePortions: () => {},
  addIngredientInput: () => {},
  submitRecipe: () => {},
  recipeText: [],
  updateIngredient: () => {},
  removeIngredient: () => {}
};

describe('RecipeTable component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RecipeTable {...testProps} />);
  });

  it('Should render table without errors', () => {
    const table = findByTestAttr(wrapper, 'recipeTable');
    expect(table.length).toBe(1);
  });

  it('Should render button container without errors', () => {
    const buttonContainer = findByTestAttr(wrapper, 'recipeAddSubmitButtons');
    expect(buttonContainer.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(RecipeTable, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
