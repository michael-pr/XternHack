Circles = new Meteor.Collection('circles', {
	schema: {
		title: {
			type: String,
			label: "Title",
			max: 60,
			min: 2
		},
		description: {
			type: String,
			label: "Description",
			max: 200,
			min: 0,
			optional: true
		},
		longitude: {
			type: String
		},
		latitude: {
			type: String
		},
		radius: {
			type: Number,
			label: "Radius",
			min: 1,
			max: 20
		},
		createdate: {
			type: Date
		},
		anonymous: {
			type: Boolean,
			label: "Anonymous"
		},
		password: {
			type: String,
			label: "Password"
		},
		userId: {
			type: String
		}
	}
});

/*
 * Add query methods like this:
 *  Circles.findPublic = function () {
 *    return Circles.find({is_public: true});
 *  }
 */
