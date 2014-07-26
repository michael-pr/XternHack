CirclesIndexController = RouteController.extend({
  waitOn: function () {
  	Meteor.subscribe('circles_index');
  },

  data: function () {
  },

  action: function () {
    this.render();
  }
});
