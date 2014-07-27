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
   'click .circle-post-content': function (e, tmpl) {
      var postId = this._id;
      goToPost(postId);
    },
   'click .circle-post-comments': function (e, tmpl) {
      var postId = this._id;
      goToPost(postId);
   }
});

function goToPost (postId) {
  Session.set("currentPostId", postId);
  var path = Router.path("login");
  var finalPath = path + "post/" + postId;
  Router.go(finalPath);
}

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


