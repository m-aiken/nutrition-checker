import AddItemButton from '../recipeTableComponents/AddItemButton';

const testProps = {
  addIngredientInput: () => {}
};

describe('AddItemButton component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddItemButton {...testProps} />);
  });

  it('Should render div without errors', () => {
    const btnContainer = findByTestAttr(wrapper, 'buttonContainer');
    expect(btnContainer.length).toBe(1);
  });

  it('Should render button without errors', () => {
    const button = findByTestAttr(wrapper, 'addItemButton');
    expect(button.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(AddItemButton, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
