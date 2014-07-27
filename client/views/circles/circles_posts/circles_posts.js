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
   },
   'click .fa-chevron-up': function (e, tmpl) {
      e.preventDefault();
      var selection = $(e.target);
      if(selection.hasClass('orange')) {
        selection.removeClass('orange');
        voteDown(this._id);
      } else {
        voteUp(this._id);
        selection.addClass('orange');
        var otherVote = $(selection.parent().children('.fa-chevron-down')[0]);
        if(otherVote.hasClass('blue')){
          otherVote.removeClass('blue');
        }
      }
   },
   'click .fa-chevron-down': function (e, tmpl) {
      e.preventDefault();
      var selection = $(e.target);
      if(selection.hasClass('blue')) {
        selection.removeClass('blue');
        voteUp(this._id);
      } else {
        voteDown(this._id);
        selection.addClass('blue');
        var otherVote = $(selection.parent().children('.fa-chevron-up')[0]);
        if(otherVote.hasClass('orange')){
          otherVote.removeClass('orange');
        }
      }
   }
});

function goToPost (postId) {
  Session.set("currentPostId", postId);
  var path = Router.path("login");
  var finalPath = path + "post/" + postId;
  Router.go(finalPath);
}

function voteUp (postId) {
  Posts.update(postId, {$inc: {upVote: 1}});
}

function voteDown (postId) {
  Posts.update(postId, {$inc: {downVote: 1}});
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


