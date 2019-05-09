import React, { Component, Fragment } from 'react';
import axios from 'axios';

import AppDescription from './AppDescription';
import RecipeTable from './recipeTableComponents/RecipeTable';
import ResponseTables from './responseTableComponents/ResponseTables';

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

  submitRecipe = e => {
    e.preventDefault();
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
  };

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
        <AppDescription resetAll={this.resetAll} />
        <RecipeTable
          portions={this.state.portions}
          updatePortions={this.updatePortions}
          addIngredientInput={this.addIngredientInput}
          submitRecipe={this.submitRecipe}
          recipeText={this.state.recipeText}
          updateIngredient={this.updateIngredient}
          removeIngredient={this.removeIngredient}
        />
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
