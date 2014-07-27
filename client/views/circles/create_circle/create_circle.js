
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
   "click [name='private']": function (e, tmpl) {
      if (Session.get("isPrivate")) {
        Session.set("isPrivate", false);
      } else {l
        Session.set("isPrivate", true);
      }
   },
   "submit form": function (e, tmpl) {
      e.preventDefault();

      var title = tmpl.find("[name='title']").value;
      var description = tmpl.find("[name='description']").value;
      var anonymous = tmpl.find("[name='anonymous']").value;
      anonymous = Boolean(anonymous);
      console.log(anonymous);
      var radius = tmpl.find("[name='radius']").value;

      var password = tmpl.find("[name='password']").value;
      if (password == "") { password = null; }

      var latitude = Session.get("latitude");
      var longitude = Session.get("longitude");

      console.log(latitude);
      console.log(longitude);

      Circles.insert({
        title: title,
        description: description,
        latitude: latitude,
        longitude: longitude,
        radius: radius,
        anonymous: anonymous,
        password: password,
        createdate: new Date,
        userId: Meteor.userId()
      });

      var form = tmpl.find("form");
      form.reset();
    }
});

Template.CreateCircle.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */

   isPrivate: function () {
    return Session.get("isPrivate") ? "" : "hidden"; 
   },
   longitude: function () {
    return Session.get("longitude");
   },
   latitude: function () {
    return Session.get("latitude");
   }

});

/*****************************************************************************/
/* CreateCircle: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateCircle.created = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(recordPosition);
  } else {
    alert("Geolocation is not supported by this browser!");
  }
  function recordPosition(position) {
    Session.set("latitude", position.coords.latitude);
    Session.set("longitude", position.coords.longitude);

    console.log(Session.get("latitude"));
    console.log(Session.get("longitude"));
  }
};

Template.CreateCircle.rendered = function () {
};

Template.CreateCircle.destroyed = function () {
};


