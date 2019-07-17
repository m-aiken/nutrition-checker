import RecipeTable from '../RecipeTable';

const testProps = {
  resetAll: () => {},
  portions: 'Test String',
  updatePortions: () => {},
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

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(RecipeTable, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
