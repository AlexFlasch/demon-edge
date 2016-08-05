'use strict';

var rp = require('request-promise');
var Utils = require('./Utils');

module.exports = class Parameter {
	constructor(parent, name, url, required) {
		this.parent = parent;
		this.name = name;
		this.value = null; // undefined until user specifies a value
		this.url = url;
		this.required = required;
	}

	///
	/// This method will generate the request URL for the API call that's been chained together,
	/// send the request, and return a promise object to the user to resolve when needed.
	///
	/// params: none
	///
	sendRequest() {
		let requestUrl = '';

		let baseUrl = 'https://api.steampowered.com/';
		let apiComponentUrl = this.parent.parent.url;
		let endpointUrl = this.parent.url;
		let apiKey = Utils.getApiKey();
		let parameterStrings = [];

		for (let parameter in this.parent.parameters) {
			let parameterUrl = parameter.url;
			let parameterValue = parameter.value;

			if (parameterValue === null && parameter.required) {
				Utils.log('the request was not sent due to a required parameter not being given a value.');
				return;
			} else if (parameterValue === null) {
				continue;
			}

			let parameterString = '&' + parameterUrl + '=' + parameterValue.toString();
			parameterStrings.push(parameterString);
		}

		requestUrl = baseUrl + apiComponentUrl + endpointUrl + '?key=' + apiKey;

		for (let i = 0; i < parameterStrings.length; i++) {
			requestUrl += parameterStrings[i];
		}

		Utils.log(requestUrl);

		return Utils.sendXHRRequest(requestUrl);
	}
};