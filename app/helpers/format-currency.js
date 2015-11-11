import Ember from 'ember';

export function formatCurrency(params/*, hash*/) {
  if (params[0]) {
    return '$' + params[0].toFixed(2);
  }
}

export default Ember.Helper.helper(formatCurrency);
