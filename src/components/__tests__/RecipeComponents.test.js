import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import RecipeComponents from '../RecipeComponents';
import { testApiResponse, testState } from '../../utilities/testingUtilities';

describe('Axios call in RecipeComponents component', () => {
  describe('When Submit button is clicked', () => {
    const spy = jest.spyOn(RecipeComponents.prototype, 'submitRecipe');

    let mock;
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<RecipeComponents />);
      mock = new MockAdapter(axios);
      wrapper.setState({
        recipeText: [
          { item: '6 apples' },
          { item: '100 grams sugar' },
          { item: '200ml water' }
        ]
      });
      wrapper.update();

      mock
        .onPost(
          'https://api.edamam.com/api/nutrition-details?app_id=1cd49b91&app_key=7267afc5389517435a4eb5ce1ac7a68b',
          {
            title: '',
            yield: '1',
            ingr: ['6 apples', '100 grams sugar', '200ml water']
          }
        )
        .reply(200, testApiResponse.data);
      const submitBtn = findByTestAttr(wrapper, 'submitButton');
      submitBtn.simulate('click');
    });

    afterEach(() => {
      mock.reset();
    });

    it('should call submitRecipe fn', () => {
      expect(spy).toHaveBeenCalled();
    });

    it('should set state.nutrientQty', () => {
      expect(wrapper.state().nutrientQty).toEqual(testState.nutrientQty);
    });

    it('should set state.dailyPercent', () => {
      expect(wrapper.state().dailyPercent).toEqual(testState.dailyPercent);
    });
  });
});
