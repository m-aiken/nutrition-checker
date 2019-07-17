import React from 'react';
import PropTypes from 'prop-types';

const RemoveAllButton = props => {
  return (
    <div className="remove-all-button" data-test="removeAllButton">
      <button
        type="button"
        onClick={props.resetAll}
        className="btn btn-danger"
        data-test="removeAll"
      >
        Remove All Items
      </button>
    </div>
  );
};

RemoveAllButton.propTypes = {
  resetAll: PropTypes.func.isRequired
};

export default RemoveAllButton;
