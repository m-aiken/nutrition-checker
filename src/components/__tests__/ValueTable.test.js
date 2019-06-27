import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utilities/testingUtilities';
import ValueTable from '../responseTableComponents/ValueTable';

const testProps = {
  nutrientQty: [],
  portions: 'Test String'
};

describe('ValueTable component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ValueTable {...testProps} />);
  });

  it('Should render table without errors', () => {
    const table = findByTestAttr(component, 'valueTable');
    expect(table.length).toBe(1);
  });

  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const propsError = checkProps(ValueTable, testProps);
      expect(propsError).toBeUndefined();
    });
  });
});
