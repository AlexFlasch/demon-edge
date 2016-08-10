'use strict';

var apiKey = '';

module.exports = {
	log: function log(message) {
		console.error('CRIT: ' + message);
	},
	clone: function clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	},
	setApiKey: function setApiKey(key) {
		apiKey = key;
	},
	getApiKey: function getApiKey() {
		if (apiKey !== '') {
			return apiKey;
		} else {
			this.log('API key is not set');
			return null;
		}
	},

	// concatenates all the urlSegments into one http url
	// could probably be done a bit more cleanly, but this will work for now
	generateEndpointRequestUrl: function generateEndpointRequestUrl(urlSegments) {
		var key = this.getApiKey();

		// 0 = baseUrl
		// 1 = schemaUrl
		// 2 = endpointUrl
		// 3 = apiVersion
		var requestUrl = urlSegments[0] + '/' + urlSegments[1] + '/' + urlSegments[2] + '/' + urlSegments[3] + '?key=' + key;
		// var requestUrl = urlSegments[0]; // baseUrl
		// requestUrl += '/' + urlSegments[1]; // schemaUrl
		// requestUrl += '/' + urlSegments[2]; // endpointUrl
		// requestUrl += '/' + urlSegments[3]; // apiVersion
		// requestUrl += '?key=' + key; // add apiKey

		return requestUrl;
	},

	// concatenates all the urlSegments into one http url with query parameters
	generateRequestUrl: function generateRequestUrl(urlSegments, parameters) {
		var requestUrl = this.generateEndpointRequestUrl(urlSegments);

		var parameterNames = Object.keys(parameters);

		// append parameters as such: &<param_name>=<param_value>
		for (var i = 0; i < parameterNames.length; i++) {
			requestUrl += '&' + parameterNames[i] + '=' + parameters[parameterNames[i]];
		}

		return requestUrl;
	},

	// sends a vanilla js xhr request, but wrapped in an ES6 promise
	// return the promise object for the user to resolve when needed
	sendXHRRequest: function sendXHRRequest(url) {
		var promise = new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send();

			xhr.onload = function () {
				if (this.status >= 200 && this.status <= 300) {
					resolve(this.response);
				} else {
					reject(this.statusText);
				}
			};

			xhr.onerror = function () {
				reject(this.statusText);
			};
		});

		return promise;
	}
};