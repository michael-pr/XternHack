
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
    "submit form": function (e, tmpl) {
      e.preventDefault();

      var message = tmpl.find("[name='message']").value;
      var postId = Session.get("currentPostId");

      Replies.insert({
        postId: postId,
        userId: Meteor.userId(),
        message: message,
        upVote: 0,
        downVote: 0,
        createdate: new Date
      });

      var form = tmpl.find("form");
      form.reset();
   }
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


