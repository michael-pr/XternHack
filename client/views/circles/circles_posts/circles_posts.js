/*****************************************************************************/
/* CirclesPosts: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CirclesPosts.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CirclesPosts.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

   posts: function () {
    return Posts.find({circleId: Session.get("currentCircleId")});
   },
   vote: function () {
    var vote = this.upVote - this.downVote;
    return vote;
   }

});

/*****************************************************************************/
/* CirclesPosts: Lifecycle Hooks */
/*****************************************************************************/
Template.CirclesPosts.created = function () {
  Meteor.subscribe('circles_posts', Session.get("currentCircleId"));
  console.log(Session.get("currentCircleId"));
};

Template.CirclesPosts.rendered = function () {

};

Template.CirclesPosts.destroyed = function () {
};


