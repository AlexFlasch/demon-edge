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

		let apiComponentUrl = this.parent.parent.url;
		let endpointUrl = this.parent.url;
		let parameterStrings = [];

		let parameterObj = {};

		for (let parameter in this.parent.parameters) {
			let parameterName = parameter.name;
			let parameterValue = parameter.value;

			if (parameterValue === null && parameter.required) {
				Utils.log('the request was not sent due to a required parameter not being given a value.');
				return;
			} else if (parameterValue === null) {
				continue;
			}

			parameterObj[parameterName] = parameterValue;
		}

		requestUrl = baseUrl + apiComponentUrl + endpointUrl;

		for (let i = 0; i < parameterStrings.length; i++) {
			requestUrl += parameterStrings[i];
		}

		Utils.log(requestUrl);

		return Utils.sendXHRRequest(requestUrl);
	}
};