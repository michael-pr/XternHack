
/*****************************************************************************/
/* PostReplies: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PostReplies.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.PostReplies.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   replies: function () {
    var postId = Session.get("currentPostId");
    return Replies.find({postId: postId});
   }
});

/*****************************************************************************/
/* PostReplies: Lifecycle Hooks */
/*****************************************************************************/
Template.PostReplies.created = function () {
  Meteor.subscribe('posts_replies', Session.get("currentPostId"));
  console.log(Session.get("currentPostId"));
};

Template.PostReplies.rendered = function () {
};

Template.PostReplies.destroyed = function () {
};


