import Ember from 'ember';

export default Ember.Controller.extend({
  artistHasSongs: Ember.computed('model.songs', function() {
    return this.get('model.songs.length') > 0;
  }),

  songsSorting: ['playCount:desc'],
  sortedSongs: Ember.computed.sort('model.songs', 'songsSorting'),

  actions: {
    onLike(song) {
      console.log('liked!', song.toJSON());
    }
  }
});
