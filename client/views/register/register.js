
/*****************************************************************************/
/* Register: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Register.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   "submit #login-form": function(event, template) {
    event.preventDefault();
    
    Accounts.createUser({
      email: template.find("[name='email-login']").value,
      password: template.find("[name='password-login']").value
    });

    if (Meteor.user())
      Router.go("circles.map");
    else
      Router.go("login");
  }
});

Template.Register.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.created = function () {
};

Template.Register.rendered = function () {
};

Template.Register.destroyed = function () {
};


