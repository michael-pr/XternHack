
/*****************************************************************************/
/* CirclesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CirclesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CirclesIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   circles: function() {
    return Circles.find({});
   }
});

/*****************************************************************************/
/* CirclesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.CirclesIndex.created = function () {
};

Template.CirclesIndex.rendered = function () {
};

Template.CirclesIndex.destroyed = function () {
};


