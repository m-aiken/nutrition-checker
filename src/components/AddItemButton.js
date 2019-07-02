import React from 'react';
import PropTypes from 'prop-types';

const AddItemButton = props => {
  return (
    <div className="btn-group" data-test="buttonContainer">
      <button
        className="btn btn-primary"
        onClick={props.addIngredientInput}
        data-test="addItemButton"
      >
        Add Item
      </button>
    </div>
  );
};

AddItemButton.propTypes = {
  addIngredientInput: PropTypes.func.isRequired
};

export default AddItemButton;
