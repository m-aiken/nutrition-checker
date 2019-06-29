import AppDescription from '../AppDescription';

const testProps = {
  resetAll: () => {}
};

describe('AppDescription component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AppDescription {...testProps} />);
  });

  it('Should render paragraph without errors', () => {
    const description = findByTestAttr(wrapper, 'description');
    expect(description.length).toBe(1);
  });

  it('Should render paragraph 2 without errors', () => {
    const descPartTwo = findByTestAttr(wrapper, 'descPtTwoWithButton');
    expect(descPartTwo.length).toBe(1);
  });

  it('Should render "Remove All" button without errors', () => {
    const removeAllButton = findByTestAttr(wrapper, 'removeAll');
    expect(removeAllButton.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(AppDescription, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
