
/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
function switchNavFlag(){
  (Session.get("navflag") == true) ? Session.set("navflag", false) : Session.set("navflag", true);
}
function showHideNav(){
  var viewportWidth = $(window).width() * 0.7;
  $('article').animate({'left':(Session.get("navflag")) ? '0' : viewportWidth}, 150)
}
Template.MasterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click #menu': function (e, tmpl) {
    switchNavFlag();
    showHideNav();
   },
   'click a': function (e, tmpl) {
    switchNavFlag();
    showHideNav();
   }
});

Template.MasterLayout.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
   navflag: function () {
    return Session.get("navflag") ? "menu-hidden" : ""; 
   }
});

/*****************************************************************************/
/* MasterLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.MasterLayout.created = function () {
};

Template.MasterLayout.rendered = function () {
  switchNavFlag();
};

Template.MasterLayout.destroyed = function () {
};


