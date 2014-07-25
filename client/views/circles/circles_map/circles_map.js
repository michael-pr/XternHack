
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
    var georssLayer = new google.maps.KmlLayer({
      url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss'
    });
    georssLayer.setMap(map);
  });
};

Template.CirclesMap.destroyed = function () {
};


