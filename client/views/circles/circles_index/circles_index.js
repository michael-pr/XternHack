
/*****************************************************************************/
/* CirclesIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CirclesIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   "submit form": function (e, tmpl) {
      e.preventDefault();

      var message = tmpl.find("[name='message']").value;
      var circleId = Session.get("currentCircleId");

      Posts.insert({
        circleId: circleId,
        userId: Meteor.userId(),
        message: message,
        upVote: 0,
        downVote: 0,
        createdate: new Date,
        numComments: 0
      });

      var form = tmpl.find("form");
      form.reset();
   },
   "click .circle-options-post, .circle-options-post i": function(e, tmpl) {
      e.preventDefault();
      var tform = $('#theForm');
      // console.log(tform);
      // console.log(tform.hasClass('hidden'));
      // console.log($('#theForm').hasClass('hidden'));
      if(tform.hasClass('hidden')){
        tform.removeClass('hidden');
      } else {
        tform.addClass('hidden');
      }
   }
});

Template.CirclesIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

});

/*****************************************************************************/
/* CirclesIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.CirclesIndex.created = function () {
};

Template.CirclesIndex.rendered = function () {
};

Template.CirclesIndex.destroyed = function () {
};


