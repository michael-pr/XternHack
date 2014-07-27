CirclesIndexController = RouteController.extend({
  onRun: function () {

  },	

  waitOn: function () {
  	var id = this.params._id;
    Session.set("currentCircleId", id)
  	return [Meteor.subscribe("circles_index", this.params._id)];
  },

  data: function () {
  	var id = this.params._id;
  	var circle = Circles.findOne({_id: id});

  	if (!circle)
  		alert("NO SUCH CIRCLE!");

  	console.log(this.params._id);

  	return circle;
  },

  action: function () {
    this.render();
  }
});
