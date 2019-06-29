import PercentageTable from '../responseTableComponents/PercentageTable';

const testProps = {
  dailyPercent: [],
  portions: 'Test String'
};

describe('PercentageTable component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PercentageTable {...testProps} />);
  });

  it('Should render table without errors', () => {
    const table = findByTestAttr(wrapper, 'percentageTable');
    expect(table.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(PercentageTable, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
