
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
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(41.875696,-87.624207)
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos){
        var params = $.param({longitude:pos.coords.longitude,
                              latitude:pos.coords.latitude});
        var url = 'http://circleboard.meteor.com' + Router.path('kmltest') + '?' + params;
        console.log(url);
        var georssLayer = new google.maps.KmlLayer({
          url: url
        });
        georssLayer.setMap(map);
      });
    }
    // $.get(Router.path('kmltest'), function(res){
    //   alert(res);
    // });
  });
};

Template.CirclesMap.destroyed = function () {
};


