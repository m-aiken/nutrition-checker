import React from 'react';
import PropTypes from 'prop-types';

import ValueTable from './ValueTable';
import PercentageTable from './PercentageTable';

const ResponseTables = props => {
  return (
    <div className="response-tables" data-test="tablesContainer">
      <ValueTable nutrientQty={props.nutrientQty} portions={props.portions} />
      <PercentageTable
        dailyPercent={props.dailyPercent}
        portions={props.portions}
      />
    </div>
  );
};

ResponseTables.propTypes = {
  nutrientQty: PropTypes.array.isRequired,
  dailyPercent: PropTypes.array.isRequired,
  portions: PropTypes.string.isRequired
};

export default ResponseTables;
