import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = props => {
  return (
    <div className="btn-group">
      <button className="btn btn-danger" onClick={props.submitRecipe}>
        Submit
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  submitRecipe: PropTypes.func.isRequired
};

export default SubmitButton;
