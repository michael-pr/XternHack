/*****************************************************************************/
/* CirclesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('circles_index', function (id) {
  // return different circle depending on if id was passed or not
  return Circles.find( (id) ? {_id: id} : {} );
});
