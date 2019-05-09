import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const AppDescription = props => {
  return (
    <Fragment>
      <p>
        List the items in your favourite recipes and we will provide the
        nutritional information. You can enter either quantity or weight for
        each item. (ie. 4 carrots or 300 grams of carrots)
      </p>
      <p>
        Please also provide the number of portions your recipe produces.
        <span style={{ float: 'right' }}>
          <button
            type="button"
            onClick={props.resetAll}
            className="btn btn-danger"
          >
            Remove All Items
          </button>
        </span>
      </p>
    </Fragment>
  );
};

AppDescription.propTypes = {
  resetAll: PropTypes.func.isRequired
};

export default AppDescription;
