import React, { Component, Fragment } from 'react';
import axios from 'axios';

import AppDescription from './AppDescription';
import RecipeTable from './RecipeTable';
import ResponseTables from './responseTableComponents/ResponseTables';
import AddItemButton from './AddItemButton';

export class RecipeComponents extends Component {
  constructor() {
    super();
    this.state = {
      recipeName: '',
      portions: '1',
      recipeText: [{ item: '' }],
      nutrientQty: [],
      dailyPercent: []
    };
    this.submitRecipe = this.submitRecipe.bind(this);
  }

  updatePortions = e => {
    const { value } = e.target;
    this.setState({ portions: value });
  };

  addIngredientInput = e => {
    e.preventDefault();
    this.setState({
      recipeText: this.state.recipeText.concat({ item: '' })
    });
  };

  updateIngredient = idx => e => {
    const { value } = e.target;
    const newItem = this.state.recipeText.map((item, stateIdx) => {
      if (idx !== stateIdx) return item;
      return { ...item, item: value };
    });
    this.setState({ recipeText: newItem });
  };

  removeIngredient = idx => () => {
    this.setState({
      recipeText: this.state.recipeText.filter(
        (item, stateIdx) => idx !== stateIdx
      )
    });
  };

  submitRecipe() {
    const ingredientsArray = this.state.recipeText.map(item => {
      return item.item;
    });

    axios
      .post(
        'https://api.edamam.com/api/nutrition-details?app_id=1cd49b91&app_key=7267afc5389517435a4eb5ce1ac7a68b',
        {
          title: this.state.recipeName,
          yield: this.state.portions.toString(),
          ingr: ingredientsArray
        }
      )
      .then(res => {
        this.setState({
          nutrientQty: Object.values(res.data.totalNutrients),
          dailyPercent: Object.values(res.data.totalDaily)
        });
      })
      .catch(err => console.log(err));
  }

  resetAll = e => {
    this.setState({
      recipeText: [{ item: '' }],
      nutrientQty: [],
      dailyPercent: []
    });
  };

  render() {
    return (
      <Fragment>
        <AppDescription />
        <RecipeTable
          resetAll={this.resetAll}
          portions={this.state.portions}
          updatePortions={this.updatePortions}
          addIngredientInput={this.addIngredientInput}
          submitRecipe={this.submitRecipe}
          recipeText={this.state.recipeText}
          updateIngredient={this.updateIngredient}
          removeIngredient={this.removeIngredient}
        />
        <div className="btn-group-justified" data-test="recipeAddSubmitButtons">
          <AddItemButton addIngredientInput={this.addIngredientInput} />
          <div className="btn-group" data-test="submitContainer">
            <button
              className="btn btn-danger"
              onClick={this.submitRecipe}
              data-test="submitButton"
            >
              Submit
            </button>
          </div>
        </div>
        <ResponseTables
          nutrientQty={this.state.nutrientQty}
          dailyPercent={this.state.dailyPercent}
          portions={this.state.portions}
        />
      </Fragment>
    );
  }
}

export default RecipeComponents;
