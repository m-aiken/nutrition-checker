import React, { Component, Fragment } from 'react';
import AddItemButton from './AddItemButton';
import SubmitButton from './SubmitButton';
import PropTypes from 'prop-types';

class RecipeTable extends Component {
  static propTypes = {
    portions: PropTypes.string.isRequired,
    updatePortions: PropTypes.func.isRequired,
    addIngredientInput: PropTypes.func.isRequired,
    submitRecipe: PropTypes.func.isRequired,
    recipeText: PropTypes.array.isRequired,
    updateIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired
  };

  render() {
    return (
      <Fragment>
        <table className="table recipe-table" data-test="recipeTable">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                Recipe
                <span style={{ float: 'right' }}>Portions Produced:</span>
              </th>
              <th scope="col">
                <input
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
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn-group-justified" data-test="recipeAddSubmitButtons">
          <AddItemButton addIngredientInput={this.props.addIngredientInput} />
          <SubmitButton submitRecipe={this.props.submitRecipe} />
        </div>
      </Fragment>
    );
  }
}

export default RecipeTable;
