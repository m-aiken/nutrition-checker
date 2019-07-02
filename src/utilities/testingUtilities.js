import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsError;
};

export const testApiResponse = {
  data: {
    totalNutrients: {
      ENERC_KCAL: { label: 'Energy', quantity: 954.84, unit: 'kcal' },
      VITC: { label: 'Vitamin C', quantity: 50.23, unit: 'mg' }
    },
    totalDaily: {
      ENERC_KCAL: { label: 'Energy', quantity: 47.74, unit: '%' },
      VITC: { label: 'Vitamin C', quantity: 55.81, unit: '%' }
    }
  }
};

export const testState = {
  nutrientQty: [
    { label: 'Energy', quantity: 954.84, unit: 'kcal' },
    { label: 'Vitamin C', quantity: 50.23, unit: 'mg' }
  ],
  dailyPercent: [
    { label: 'Energy', quantity: 47.74, unit: '%' },
    { label: 'Vitamin C', quantity: 55.81, unit: '%' }
  ]
};
