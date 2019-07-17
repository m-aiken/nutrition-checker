import React, { Fragment } from 'react';

const AppDescription = () => {
  return (
    <Fragment>
      <p className="description" data-test="description">
        List the items in your favourite recipes and we will provide the
        nutritional information. You can enter either quantity or weight for
        each item. (ie. 4 carrots or 300 grams of carrots)
      </p>
      <p className="description" data-test="descPtTwo">
        Please also provide the number of portions your recipe produces.
      </p>
    </Fragment>
  );
};

export default AppDescription;
