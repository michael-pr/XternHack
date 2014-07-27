
/*****************************************************************************/
/* CirclesMap: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.CirclesMap.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.CirclesMap.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CirclesMap: Lifecycle Hooks */
/*****************************************************************************/
Template.CirclesMap.created = function () {
};

Template.CirclesMap.rendered = function () {
  GoogleMaps.init({}, function(){
    var circlesDict = [];
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(41.875696,-87.624207)
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos){
        map.setOptions({
          center: new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude),
          zoom: 20
        });
        Circles.find({}).fetch().forEach(function (circle) {
          var center = new google.maps.LatLng(circle.latitude, circle.longitude);
          circlesDict.push({
            id: circle._id.toString(),
            center: center
          });
          var options = {
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: center,
            radius: circle.radius
          };
          cityCircle = new google.maps.Circle(options);
          google.maps.event.addListener(cityCircle, 'click', function(circleA){
            circlesDict.forEach(function(circleB){
              var checkLat = parseInt(circleA.latLng.lat()) == parseInt(circleB.center.lat())
              var checkLon = parseInt(circleA.latLng.lng()) == parseInt(circleB.center.lng());
              if(checkLat && checkLon) {
                window.location = '/circle/' + circleB.id;
              }
            });
          })
        })
      });
    }
    // $.get(Router.path('kmltest'), function(res){
    //   alert(res);
    // });
  });
};

Template.CirclesMap.destroyed = function () {
};


