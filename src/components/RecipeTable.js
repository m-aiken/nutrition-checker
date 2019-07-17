import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import RemoveAllButton from './RemoveAllButton';

class RecipeTable extends Component {
  static propTypes = {
    resetAll: PropTypes.func.isRequired,
    portions: PropTypes.string.isRequired,
    updatePortions: PropTypes.func.isRequired,
    recipeText: PropTypes.array.isRequired,
    updateIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <RemoveAllButton resetAll={this.props.resetAll} />
        <table className="table recipe-table" data-test="recipeTable">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                Recipe
                <span className="portions">Portions:</span>
                <span className="portions-produced">Portions Produced:</span>
              </th>
              <th scope="col">
                <input
                  className="portion-number"
                  type="number"
                  value={this.props.portions}
                  onChange={this.props.updatePortions}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.recipeText.map((item, idx) => (
              <tr key={idx}>
                <th scope="row" style={{ width: '100%' }}>
                  <input
                    type="text"
                    value={item.item}
                    onChange={this.props.updateIngredient(idx)}
                    placeholder={'ingredient...'}
                  />
                </th>
                <th scope="row">
                  <button
                    type="button"
                    onClick={this.props.removeIngredient(idx)}
                    className="btn btn-danger remove-button"
                  >
                    Remove
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default RecipeTable;
