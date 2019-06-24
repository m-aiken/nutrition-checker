import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/testingUtilities';
import PercentageTable from '../responseTableComponents/PercentageTable';

const testProps = {
  dailyPercent: [],
  portions: 'Test String'
};

describe('PercentageTable component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PercentageTable {...testProps} />);
  });

  it('Should render table without errors', () => {
    const table = findByTestAttr(component, 'percentageTable');
    expect(table.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    const propsError = checkProps(PercentageTable, testProps);
    expect(propsError).toBeUndefined();
  });
});
