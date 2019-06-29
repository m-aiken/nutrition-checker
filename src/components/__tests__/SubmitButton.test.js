import SubmitButton from '../recipeTableComponents/SubmitButton';

const testProps = {
  submitRecipe: () => {}
};

describe('SubmitButton component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SubmitButton {...testProps} />);
  });

  it('Should render div without errors', () => {
    const container = findByTestAttr(wrapper, 'submitContainer');
    expect(container.length).toBe(1);
  });

  it('Should render button without errors', () => {
    const button = findByTestAttr(wrapper, 'submitButton');
    expect(button.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(SubmitButton, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
