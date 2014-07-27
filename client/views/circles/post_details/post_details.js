
/*****************************************************************************/
/* PostDetails: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PostDetails.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PostDetails.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   post: function () {
    var postId = Session.get("currentPostId");
    return Posts.findOne({_id: postId});
   }
});

/*****************************************************************************/
/* PostDetails: Lifecycle Hooks */
/*****************************************************************************/
Template.PostDetails.created = function () {
  Meteor.subscribe("circles_post", Session.get("currentPostId"));
};

Template.PostDetails.rendered = function () {
};

Template.PostDetails.destroyed = function () {
};


