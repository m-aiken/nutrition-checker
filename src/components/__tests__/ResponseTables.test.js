import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/testingUtilities';
import ResponseTables from '../responseTableComponents/ResponseTables';

const testProps = {
  nutrientQty: [],
  dailyPercent: [],
  portions: 'Test String'
};

describe('ResponseTables component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ResponseTables {...testProps} />);
  });

  it('should render without errors', () => {
    const container = findByTestAttr(component, 'tablesContainer');
    expect(container.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(ResponseTables, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
