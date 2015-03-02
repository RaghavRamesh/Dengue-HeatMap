$("#dateSelector").datepicker();

// don't forget to add gmaps-heatmap.js
var myLatlng = new google.maps.LatLng(1.340, 103.8200);
// map options,
var myOptions = {
    zoom: 11,
    center: myLatlng
};
// standard map
map = new google.maps.Map(document.getElementById("heatMapHolder"), myOptions);
// heatmap layer
heatmap = new HeatmapOverlay(map, {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    "radius": 0.01,
    "maxOpacity": 1, 
    // scales the radius based on map zoom
    "scaleRadius": true, 
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries 
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'north',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'east',
    // which field name in your data represents the data value - default "value"
    valueField: 'cases'
});

var data = [{"north":37132,"east":26499,"cases":3},{"north":36512,"east":30240,"cases":1},{"north":36774,"east":30255,"cases":2},{"north":36665,"east":30226,"cases":1},{"north":36729,"east":30060,"cases":1},{"north":36739,"east":30198,"cases":1},{"north":36917,"east":30187,"cases":1},{"north":36871,"east":30126,"cases":5},{"north":36840,"east":30163,"cases":4},{"north":36868,"east":30000,"cases":1},{"north":36930,"east":30041,"cases":2},{"north":36958,"east":29990,"cases":3},{"north":36790,"east":29988,"cases":2},{"north":36761,"east":29957,"cases":4},{"north":36718,"east":29942,"cases":1},{"north":36792,"east":29955,"cases":1},{"north":36774,"east":29841,"cases":5},{"north":37167,"east":30007,"cases":1},{"north":38400,"east":33011,"cases":6},{"north":37132,"east":26499,"cases":5},{"north":32394,"east":19865,"cases":2},{"north":32292,"east":19720,"cases":4},{"north":32221,"east":19786,"cases":1},{"north":46639,"east":27341,"cases":1},{"north":46772,"east":27185,"cases":4},{"north":46022,"east":27267,"cases":1},{"north":38814,"east":34346,"cases":2},{"north":38958,"east":34171,"cases":3},{"north":38988,"east":34097,"cases":1},{"north":30619,"east":24748,"cases":1},{"north":30856,"east":24786,"cases":2},{"north":30856,"east":24786,"cases":1},{"north":30856,"east":24786,"cases":1},{"north":33053,"east":33537,"cases":3},{"north":33064,"east":33609,"cases":1},{"north":38782,"east":30595,"cases":2},{"north":38782,"east":30595,"cases":1},{"north":33572,"east":35005,"cases":2},{"north":33406,"east":35087,"cases":1},{"north":37250,"east":15522,"cases":2},{"north":37250,"east":15522,"cases":1},{"north":45325,"east":27869,"cases":1},{"north":45325,"east":27869,"cases":1},{"north":45325,"east":27869,"cases":1},{"north":39048,"east":30464,"cases":1},{"north":39048,"east":30464,"cases":1},{"north":34767,"east":38821,"cases":1},{"north":34767,"east":38821,"cases":1},{"north":37529,"east":32376,"cases":1},{"north":37773,"east":31059,"cases":1},{"north":38745,"east":34191,"cases":1},{"north":38784,"east":34099,"cases":1},{"north":37250,"east":34430,"cases":2},{"north":35341,"east":29909,"cases":1},{"north":35341,"east":29909,"cases":1},{"north":39195,"east":32108,"cases":1},{"north":39049,"east":32120,"cases":1}]
var convertDataToLatLng = function(data) {
    var y_lower = 17000, y_higher = 52000, x_lower = 0, x_higher = 58000, x_diff = x_higher - x_lower, y_diff = y_higher - y_lower, lat_lower = 1.1700043443089982, 
    lat_higher = 1.4865267420862995, lng_lower = 103.58173868050201, lng_higher = 104.10290194894894, lat_diff = lat_higher - lat_lower, lng_diff = lng_higher - lng_lower;
    var convertedData = [], tempData = {};

    for (var i = 0; i<data.length; i++) {
        tempData['north'] = (data[i]['north'] * lat_diff/y_diff) + lat_lower;
        tempData['east'] = (data[i]['east'] * lng_diff/x_diff) + lng_lower;
        tempData['cases'] = data[i]['cases'];
        convertedData.push(tempData);
        tempData = {};
    }
    return convertedData;
};

console.log("convertedData:", convertDataToLatLng(data));

var testData = {
    max: 23,
    data: convertDataToLatLng(data)
};

heatmap.setData(testData);

var points = [];
var max = 0;
var width = 840;
var height = 400;
var len = 200;

while (len--) {
    var val = Math.floor(Math.random()*100);
    max = Math.max(max, val);
    var point = {
        x: Math.floor(Math.random()*width),
        y: Math.floor(Math.random()*height),
        value: val
    };
    points.push(point);
}

console.log("points", points);