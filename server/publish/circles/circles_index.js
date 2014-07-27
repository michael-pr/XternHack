/*****************************************************************************/
/* CirclesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('circles_index', function (id) {
  return Circles.find({_id: id});
});
