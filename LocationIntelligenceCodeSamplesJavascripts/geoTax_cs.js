/**
 * Code sample for accessing LBS GeoTax API. This java scripts functions demonstrates the capability of LBS GeoTax API 
 * to get particular Automotive or General tax rates by address in XML and JSON response formats.
 */


var LOCATION_INTELLIGENCE_SERVER_URL="https://api.pitneybowes.com/location-intelligence/geotax/v1/";

//Gets particular Tax Rate by Address in XML/JSON format
function getParticularTaxRateByAddress(responseType,taxRateTypeId, address){
	
	var xhr = new XMLHttpRequest();
	var apiUrl = 'taxrate/' + taxRateTypeId + '/byaddress?address=' + address;
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

//Gets particular Tax Rate by Location in XML/JSON format
function getParticularTaxRateByLocation(responseType, taxRateTypeId, latitude, longitude){
	var xhr = new XMLHttpRequest();
	var apiUrl = 'taxrate/' + taxRateTypeId + '/bylocation?latitude=' + latitude + '&longitude=' + longitude;
	
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

//Calculates particular Tax by Address in XML/JSON format for a given purchase amount
function calculateParticularTaxByAddress(responseType, taxRateTypeId, address,purchaseAmount){
	var xhr = new XMLHttpRequest();
	var apiUrl = 'tax/' + taxRateTypeId + '/byaddress?address=' + address + '&purchaseAmount=' + purchaseAmount;
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

//Calculates particular Tax by Location in XML/JSON format for a given purchase amount
function calculateParticularTaxByLocation(responseType, taxRateTypeId, latitude, longitude,purchaseAmount) {
	var xhr = new XMLHttpRequest();
	var apiUrl = 'tax/' + taxRateTypeId + '/bylocation?latitude=' + latitude + '&longitude=' + longitude + '&purchaseAmount=' + purchaseAmount;
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

