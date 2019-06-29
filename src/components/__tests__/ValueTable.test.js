import ValueTable from '../responseTableComponents/ValueTable';

const testProps = {
  nutrientQty: [],
  portions: 'Test String'
};

describe('ValueTable component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ValueTable {...testProps} />);
  });

  it('Should render table without errors', () => {
    const table = findByTestAttr(wrapper, 'valueTable');
    expect(table.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(ValueTable, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
