
/*****************************************************************************/
/* PostReplies: Event Handlers and Helpersss .js*/
/*****************************************************************************/
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

Template.PostReplies.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
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


