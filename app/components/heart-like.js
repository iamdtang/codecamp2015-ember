import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like() {
      this.set('liked', true);
      this.attrs.like();
      // this.get('song').save();
    }
  }
});
