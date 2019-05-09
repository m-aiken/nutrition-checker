import React from 'react';
import PropTypes from 'prop-types';

const AddItemButton = props => {
  return (
    <div className="btn-group">
      <button className="btn btn-primary" onClick={props.addIngredientInput}>
        Add Item
      </button>
    </div>
  );
};

AddItemButton.propTypes = {
  addIngredientInput: PropTypes.func.isRequired
};

export default AddItemButton;
