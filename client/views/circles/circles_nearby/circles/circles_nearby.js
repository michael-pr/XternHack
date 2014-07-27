
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


