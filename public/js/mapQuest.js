function initMap() {
	L.mapquest.key = 'KNsvyq6o3Yba38hr7rUQqPkAPdkcxuOR';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.87872302170223, -117.23585382604509],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12
	});

	L.marker([32.87872302170223, -117.23585382604509]).addTo(map);
}