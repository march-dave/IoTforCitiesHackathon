/**
 * Code sample for accessing Location Intelligence GeoSearch API. This java scripts functions demonstrates the capability of Location Intelligence GeoSearch API 
 * with the XML and JSON format.
 */


var LOCATION_INTELLIGENCE_SERVER_URL="https://api.pitneybowes.com/location-intelligence/geosearch/v1/";

/**
 * Returns list of places in XML or JSON formats
 * @param responseType
 * @param addressLine
 * @param originLatitude
 * @param originLongitude
 * @param searchRadius
 * @param searchRadiusUnit
 * @param maxCandidates
 */

function geoSearch(responseType,addressLine,originLatitude,originLongitude,searchRadius,searchRadiusUnit,maxCandidates){
	
	var xhr = new XMLHttpRequest();
	var apiUrl = 'locations?searchText=' + addressLine + '&latitude=' + originLatitude + '&longitude=' + originLongitude + '&searchRadius=' + searchRadius + '&searchRadiusUnit=' + searchRadiusUnit + '&maxCandidates=' + maxCandidates;
	xhr.open('GET', LOCATION_INTELLIGENCE_SERVER_URL +apiUrl);
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