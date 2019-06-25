import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = props => {
  return (
    <div className="btn-group" data-test="submitContainer">
      <button
        className="btn btn-danger"
        onClick={props.submitRecipe}
        data-test="submitButton"
      >
        Submit
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  submitRecipe: PropTypes.func.isRequired
};

export default SubmitButton;
