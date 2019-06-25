import React from 'react';
import PropTypes from 'prop-types';

const PercentageTable = props => {
  return (
    <table className="table percentage-table" data-test="percentageTable">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Nutrient</th>
          <th scope="col">% of daily recommended</th>
        </tr>
      </thead>
      <tbody>
        {props.dailyPercent.map((nutrient, idx) => (
          <tr key={idx}>
            <th scope="row">{nutrient.label}</th>
            <td>{`${(nutrient.quantity / props.portions).toFixed(2)} ${
              nutrient.unit
            }`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

PercentageTable.propTypes = {
  dailyPercent: PropTypes.array.isRequired,
  portions: PropTypes.string.isRequired
};

export default PercentageTable;
