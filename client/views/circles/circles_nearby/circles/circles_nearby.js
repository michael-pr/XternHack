
/*****************************************************************************/
/* Circles/circlesNearby: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CirclesNearby.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click .nearby-circles-item': function (e, tmpl) {
      var circleId = this._id;
      Session.set("currentCircleId", circleId);
      var path = Router.path("login");
      var finalPath = path + "circle/" + circleId;
      Router.go(finalPath);
   }
});

Template.CirclesNearby.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   circles: function () {
    return Circles.find({});
   }
});

/*****************************************************************************/
/* Circles/circlesNearby: Lifecycle Hooks */
/*****************************************************************************/
Template.CirclesNearby.created = function () {
  Meteor.subscribe("circles_all");
};

Template.CirclesNearby.rendered = function () {
};

Template.CirclesNearby.destroyed = function () {
};


