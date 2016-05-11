/**
  * Code sample for accessing Location Intelligence Geo911 API. This java scripts functions demonstrates the capability of Location Intelligence Geo911 API 
  * To enable 911 engineers and 911 local negotiators for emergency service planning and operations to obtain coverage information on Public Safety Answering Points (PSAPs) for a specified address or location with the XML and JSON format.
 */


var LOCATION_INTELLIGENCE_SERVER_URL="https://api.pitneybowes.com/location-intelligence/geo911/v1/psap/";

//Gets PSAP by Address in XML/JSON format
function getPsapByAddress(responseType,address){
	
	var xhr = new XMLHttpRequest();
	var apiUrl = 'byaddress?address=' + address;
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

//Gets PSAP by Location in XML/JSON format
function getPsapByLocation(responseType, latitude, longitude){
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


