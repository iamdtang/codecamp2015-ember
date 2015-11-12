import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // host: 'http://itp-api.herokuapp.com',
  host: 'http://localhost:3000',
  namespace: 'api/v2'
});
