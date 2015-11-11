import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://itp-api.herokuapp.com',
  namespace: 'api/v2'
});
