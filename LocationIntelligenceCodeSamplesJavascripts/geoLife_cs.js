/**
 * Code sample for accessing Location Intelligence GeoLife API. This java scripts functions demonstrates the capability of Location Intelligence GeoLife API 
 * with the XML and JSON format.
 */


var LOCATION_INTELLIGENCE_SERVER_URL="https://api.pitneybowes.com/location-intelligence/geolife/v1/demographics/";


/**
 * Returns GeoLife Variables by address in XML or JSON formats
 * @param responseType
 * @param address
 * @param filter
 * @param profile
 * @param country
 */
function getGeoLifeByAddress(responseType,address,filter,profile,country){
	var xhr = new XMLHttpRequest();
	var apiUrl = 'byaddress?address=' + address;
	if (filter!= null || filter != ''){
		apiUrl += '&filter=' + filter;
	}
	if (profile!= null || profile != ''){
		apiUrl += '&profile=' + profile;
	}
	if (country!= null || country != ''){
		apiUrl += '&country=' + country;
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
 * Returns GeoLife Variables by location in XML or JSON formats
 * @param responseType
 * @param latitude
 * @param longitude
 * @param filter
 * @param profile
 */
function getGeoLifeByLocation(responseType, latitude, longitude, filter){
	var xhr = new XMLHttpRequest();
	var apiUrl = 'bylocation?latitude=' + latitude + '&longitude=' + longitude;
	if (filter!= null || filter != ''){
		apiUrl += '&filter=' + filter;
	}
	if (profile!= null || profile != ''){
		apiUrl += '&profile=' + profile;
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

var LOCATION_INTELLIGENCE_SERVER_URL="https://api.pitneybowes.com/location-intelligence/geolife/v1/segmentation/";

/**
 * Returns GeoLife Segmentation Variables by address in XML or JSON formats
 * @param responseType
 * @param address
 * @param country
 */
function getSegmentationByAddress(responseType, address, country){	
	var xhr = new XMLHttpRequest();
	var apiUrl = 'byaddress?address=' + address;
	if (country!= null || country != ''){
		apiUrl += '&country=' + country;
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
 * Returns GeoLife Segmentation Variables by location in XML or JSON formats
 * @param responseType
 * @param latitude
 * @param longitude
 */
function getSegmentationByLocation(responseType, latitude, longitude){
	var xhr = new XMLHttpRequest();
	var apiUrl = 'bylocation?latitude=' + latitude + '&longitude=' + longitude;
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