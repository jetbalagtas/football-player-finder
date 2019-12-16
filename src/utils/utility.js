/** @desc Updates the state object
 * @param oldObject state object to be updated
 * @param updatedProperties object with udpated the property(ies)
 */
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

/** @desc Checks the validity of values entered in inputs
 * @param value event.target.value
 * @param rules (object)
 */
export const checkValidity = (value, rules) => {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.isString) {
    isValid = typeof(value.trim()) === 'string';
  }
  if (rules.isWithinRange) {
    isValid = value >= rules.minVal && value <= rules.maxVal;
  }
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid
  }
  return isValid;
};
