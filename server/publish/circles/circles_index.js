/*****************************************************************************/
/* CirclesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('circles_index', function (id) {
  return Circles.find({_id: id});
});

Meteor.publish("circles_posts", function (circleId) {
	return Posts.find({circleId: circleId});
});

Meteor.publish("circles_post", function (postId) {
	return Posts.find({_id: postId});
});

Meteor.publish("posts_replies", function (postId) {
	return Replies.find({postId: postId});
});
