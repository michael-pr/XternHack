
/*****************************************************************************/
/* Login: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Login.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   "submit #login-form": function(event, template) {
    event.preventDefault();
    Meteor.loginWithPassword(
      template.find("[name='email-login']").value,
      template.find("[name='password-login']").value,
      function(error) {
        if (error) {
          alert("There was an error logging in.")
        }
      }
    );

    if (!Meteor.user())
      Router.go("circles.map");
    else
      Router.go("login");
  }
});

Template.Login.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};


