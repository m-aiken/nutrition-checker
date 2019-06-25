import React from 'react';
import PropTypes from 'prop-types';

const ValueTable = props => {
  return (
    <table className="table" data-test="valueTable">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Nutrient</th>
          <th scope="col">Value (per portion)</th>
        </tr>
      </thead>
      <tbody>
        {props.nutrientQty.map((nutrient, idx) => (
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

ValueTable.propTypes = {
  nutrientQty: PropTypes.array.isRequired,
  portions: PropTypes.string.isRequired
};

export default ValueTable;
