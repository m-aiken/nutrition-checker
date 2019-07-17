import RemoveAllButton from '../RemoveAllButton';

const testProps = {
  resetAll: () => {}
};

describe('RemoveAllButton component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RemoveAllButton {...testProps} />);
  });

  it('Should render div without errors', () => {
    const btnContainer = findByTestAttr(wrapper, 'removeAllButton');
    expect(btnContainer.length).toBe(1);
  });

  it('Should render button without errors', () => {
    const button = findByTestAttr(wrapper, 'removeAll');
    expect(button.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(RemoveAllButton, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
