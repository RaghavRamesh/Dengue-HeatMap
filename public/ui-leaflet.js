$("#dateSelector").datepicker();

// don't forget to include leaflet-heatmap.js
// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('heatMapHolder').setView([1.340, 103.8200], 11);

// add an OpenStreetMap tile layer
var baseLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var cfg = {
	// radius should be small ONLY if scaleRadius is true (or small radius is intended)
	// if scaleRadius is false it will be the constant radius used in pixels
	"radius": 2,
	"maxOpacity": .8, 
	// scales the radius based on map zoom
	"scaleRadius": true, 
	// if set to false the heatmap uses the global maximum for colorization
	// if activated: uses the data maximum within the current map boundaries 
	//   (there will always be a red spot with useLocalExtremas true)
	"useLocalExtrema": true,
	// which field name in your data represents the latitude - default "lat"
	latField: 'lat',
	// which field name in your data represents the longitude - default "lng"
	lngField: 'lng',
	// which field name in your data represents the data value - default "value"
	valueField: 'count'
};


var heatmapLayer = new HeatmapOverlay(cfg);

var mapActual = new L.Map('heatMapHolder', {
	center: new L.LatLng(1.340, 103.8200),
	zoom: 11,
	layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);