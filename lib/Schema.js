'use strict';

var Utils = require('./Utils');
var Endpoint = require('./Endpoint');

module.exports = class Schema {
	constructor(name, url) {
		this.name = name;
		this.url = url;

		this.endpoints = {};
		this.endptFuncs = {};

		return this;
	}

	///
	/// This method will add an endpoint to Schema.endpoints and
	/// dynamically create a function to define that endpoint's value
	/// (only if the endpoint accepts no parameters)
	///
	/// params:
	///		endpointName:		The name of the parameter as its used in Crystalys.
	///		endpointUrl:		The string that will be used in the URL segment generated when making a request to the Steam WebAPI.
	///		needsParameters: 	True if the endpoint requires at least one parameter, false otherwise.
	///
	addEndpoint(endpointName, endpointUrl, needsParameters) {
		useStrict();

		var endpoint = new Endpoint(this, endpointName, endpointUrl);

		if (!needsParameters) {
			let sendRequest = function() {
				useStrict();

				let requestUrl = '';

				var baseUrl = 'https://api.steampowered.com/';
				let schemaUrl = this.parent.parent.url;
				let endpointUrl = this.parent.url;
				let apiKey = Utils.getApiKey();

				for (let parameter in this.parameters) {
					if (parameter.required) {
						Utils.log('the request was not sent due to a required parameter not being given a value.');
						return;
					}
				}

				requestUrl = baseUrl + schemaUrl + endpointUrl + '?key=' + apiKey;

				return rp(requestUrl);
			};

			this[endpointName].sendRequest = sendRequest;
		}

		return endpoint;
	}
};