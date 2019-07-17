import AppDescription from '../AppDescription';

describe('AppDescription component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AppDescription />);
  });

  it('Should render paragraph without errors', () => {
    const description = findByTestAttr(wrapper, 'description');
    expect(description.length).toBe(1);
  });

  it('Should render paragraph 2 without errors', () => {
    const descPartTwo = findByTestAttr(wrapper, 'descPtTwo');
    expect(descPartTwo.length).toBe(1);
  });
});
