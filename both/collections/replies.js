Replies = new Meteor.Collection('replies', {
	schema: {
		postId: {
			type: String
		},
		userId: {
			type: String
		},
		message: {
			type: String,
			min: 0,
			max: 140
		},
		upVote: {
			type: Number
		},
		downVote: {
			type: Number
		}
	}
});