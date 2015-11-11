import DS from 'ember-data';

export default DS.Model.extend({
  artistName: DS.attr('string'),
  songs: DS.hasMany('song', { async: true })
});
