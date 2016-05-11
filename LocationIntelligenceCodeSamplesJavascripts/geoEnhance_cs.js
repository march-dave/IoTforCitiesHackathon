/**
 * Code sample for accessing Location Intelligence GeoEnhance API. This java scripts functions demonstrates the capability of Location Intelligence GeoEnhance API 
 * with the XML and JSON format.
 */


var LOCATION_INTELLIGENCE_SERVER_URL="https://api.pitneybowes.com/location-intelligence/geoenhance/v1/";

/**
 * Returns Reverse Geocoded Address in XML or JSON formats
 * @param responseType
 * @param latitude
 * @param longitude
 * @param searchRadiusUnit
 */
function reverseGeocode(responseType, latitude, longitude, searchRadiusUnit){	
	var xhr = new XMLHttpRequest();
	var apiUrl = 'address/bylocation?latitude=' + latitude + '&longitude=' + longitude  ;
	if(searchRadiusUnit != null && searchRadiusUnit != undefined){
		apiUrl += "&searchRadiusUnit=" + searchRadiusUnit; 
	}
	xhr.open('GET', LOCATION_INTELLIGENCE_SERVER_URL + apiUrl);
	if (responseType=='XML'){
		xhr.setRequestHeader('Content-type', 'application/xml');
		xhr.setRequestHeader('Accept', 'application/xml');
	}
	else if (responseType=='JSON'){
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.setRequestHeader('Accept', 'application/json');
	}
	xhr.send(null);
	return true;		
}

/**
 * Returns searched place in XML or JSON formats
 * @param responseType
 * @param latitude
 * @param longitude
 * @param levelHint (optional)
 */
function searchPlace(responseType, latitude, longitude, levelHint){
	var xhr = new XMLHttpRequest();
	var apiUrl = 'place/bylocation?latitude=' + latitude + '&longitude=' + longitude;
	if(levelHint != null && levelHint != undefined){
		apiUrl += "&levelHint=" + levelHint; 
	}
	xhr.open('GET', LOCATION_INTELLIGENCE_SERVER_URL + apiUrl);
	if (responseType=='XML'){
		xhr.setRequestHeader('Content-type', 'application/xml');
		xhr.setRequestHeader('Accept', 'application/xml');
	}
	else if (responseType=='JSON'){
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.setRequestHeader('Accept', 'application/json');
	}
	xhr.send(null);
	return true;	
}

/**
 * Returns POIs by location in XML or JSON formats
 * @param responseType
 * @param latitude
 * @param longitude
 * @param category (optional)
 * @param maxCandidates (optional)
 * @param searchRadius (optional)
 * @param searchRadiusUnit (optional)
 */
function getPOIsByLocation(responseType, latitude, longitude, category, maxCandidates, searchRadius, searchRadiusUnit, searchPriority, searchDataset){
	var xhr = new XMLHttpRequest();
	var apiUrl = 'poi/bylocation?latitude=' + latitude + '&longitude=' + longitude;
	if(category != null && category != undefined){
		apiUrl += "&category=" + category; 
	}
	if(maxCandidates != null && maxCandidates != undefined){
		apiUrl += "&maxCandidates=" + maxCandidates; 
	}
	if(searchRadius != null && searchRadius != undefined){
		apiUrl += "&searchRadius=" + searchRadius; 
	}
	if(searchRadiusUnit != null && searchRadiusUnit != undefined){
		apiUrl += "&searchRadiusUnit=" + searchRadiusUnit; 
	}
	if(searchPriority != null && searchPriority != undefined){
		apiUrl += "&searchPriority=" + searchPriority; 
	}
	if(searchDataset != null && searchDataset != undefined){
		apiUrl += "&searchDataset=" + searchDataset; 
	}
	xhr.open('GET', LOCATION_INTELLIGENCE_SERVER_URL + apiUrl);
	if (responseType=='XML'){
		xhr.setRequestHeader('Content-type', 'application/xml');
		xhr.setRequestHeader('Accept', 'application/xml');
	}
	else if (responseType=='JSON'){
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.setRequestHeader('Accept', 'application/json');
	}
	xhr.send(null);
	return true;		
}

/**
 * Returns Timezone in XML or JSON formats
 * @param responseType
 * @param latitude
 * @param longitude
 * @param timestamp
 */
function getTimezoneByLocation(responseType, latitude, longitude, timestamp){	
	var xhr = new XMLHttpRequest();
	var apiUrl = 'timezone/bylocation?timestamp=' + timestamp + '&latitude=' + latitude + '&longitude=' + longitude;
	xhr.open('GET', LOCATION_INTELLIGENCE_SERVER_URL + apiUrl);
	if (responseType=='XML'){
		xhr.setRequestHeader('Content-type', 'application/xml');
		xhr.setRequestHeader('Accept', 'application/xml');
	}
	else if (responseType=='JSON'){
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.setRequestHeader('Accept', 'application/json');
	}
	xhr.send(null);
	return true;		
}