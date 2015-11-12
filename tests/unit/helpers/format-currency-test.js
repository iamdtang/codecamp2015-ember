import { formatCurrency } from '../../../helpers/format-currency';
import { module, test } from 'qunit';

module('Unit | Helper | format currency');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = formatCurrency([42]);
  assert.equal(result, '$42.00');
});
