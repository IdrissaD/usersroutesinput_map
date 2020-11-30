var osm_layer = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {

	attribution: '<a href = "https://areskidrissa.cc" target = "_blank">areskidrissa.cc</a> Map data &copy; <a href="https://www.openstreetmap.org/" target = "_blank">OpenStreetMap</a> contributors, ' +

	'<a href="https://creativecommons.org/licenses/by-sa/2.0/" target = "_blank">CC-BY-SA</a>'

	});


var mymap = L.map('mapid').setView([45.757523270000576, 4.831581115722656], 5);

osm_layer.addTo(mymap);

const fileSelector = document.getElementById('file-selector');
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);

    for (file of fileList) {
    	console.log(fileList.length)
    	fileName = file.name
    	extension = fileName.split('.').pop()

    	var ObjectURL = URL.createObjectURL(file)    	

    	var customLayer = L.geoJson(null, {
    		onEachFeature(feature, layer)
    		{layer.bindPopup('<p><b>' + feature.properties.name + '</b></p><p>'+ parseFloat(turf.length(feature.geometry, {units: 'kilometers'})).toFixed(0) + ' km</p>')}
        })
        console.log(customLayer)   	

    	if (extension == 'kml') {
    		omnivore.kml(ObjectURL, null, customLayer).addTo(mymap)}

    	else if (extension == 'gpx') {
    		omnivore.gpx(ObjectURL, null, customLayer).addTo(mymap)}

        else if (extension == 'geojson') {
            omnivore.geojson(ObjectURL, null, customLayer).addTo(mymap)}

    }});