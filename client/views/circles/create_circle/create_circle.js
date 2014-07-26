
/*****************************************************************************/
/* CreateCircle: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CreateCircle.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CreateCircle.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

   isPrivate: function () {
    console.log($("input[name='private']"));
    return false; 
    //return $("#privateCheckbox").prop("checked") ? "" : "hidden";
   }

});

/*****************************************************************************/
/* CreateCircle: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateCircle.created = function () {
};

Template.CreateCircle.rendered = function () {
};

Template.CreateCircle.destroyed = function () {
};


