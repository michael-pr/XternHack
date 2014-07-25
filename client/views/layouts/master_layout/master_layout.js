
/*****************************************************************************/
/* MasterLayout: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MasterLayout.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click #menu': function (e, tmpl) {
    if (Session.get("navflag") == true) {
      Session.set("navflag", false);
    } else {
      Session.set("navflag", true);
    }
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
};

Template.MasterLayout.destroyed = function () {
};


