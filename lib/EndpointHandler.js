var Utils = require('./DeUtils');

module.exports = class EndpointHandler {
	constructor(name, urlSegment, version, needsParams = true) {
		this.name = name;
		// this is different from Crystalys in order to talk to Daedalus properly
		this.urlSegment = name;
		this.needsParams = needsParams;

		this.parameters = [];
	}

	getName() {
		return this.name;
	}

	getParameters() {
		return this.parameters;
	}

	getUrlSegment() {
		return this.urlSegment;
	}

	getSteamWebApiVersion() {
		return this.version;
	}

	needsParameters() {
		return this.needsParameters;
	}

	addParameter(parameterHandler) {
		this.parameters.push(parameterHandler);

		return this; // allow chaining
	}

	addParameters(parameterHandlers) {
		for (let parameterIndex = 0; parameterIndex < parameterHandlers.length; parameterIndex++) {
			this.parameters.push(parameterHandlers[parameterIndex]);
		}

		return this; // allow chaining
	}

	generateEndpoint(segments) {
		const urlSegments = segments.slice(0); // create shallow copy of array
		urlSegments.push(this.urlSegment);
		urlSegments.push(this.version);

		const endpoint = {};
		endpoint.values = {};
		endpoint.urlSegments = urlSegments;
		endpoint.getUrlSegments = function() {
			return this.urlSegment;
		};

		let parameterIndex = 0;
		let parameter;
		let endpointParam;

		if (this.needsParams) { // generate the endpoint with the parameters but no sendRequest function
			for (parameterIndex = 0; parameterIndex < this.parameters.length; parameterIndex++) {
				parameter = this.parameters[parameterIndex].generateParameter(urlSegments);
				endpoint[this.parameters[parameterIndex].getName()] = parameter;
				endpointParam = endpoint[this.parameters[parameterIndex].getName()];

				// immediately invoked function to save the proper references to the parameter function
				// using an IIFE is pretty ugly, but the best way I could come up with to dynamically
				// generate parameter functions for each endpoint as needed...
				(function(param) {
					endpoint[param.name] = function(value) {
						endpoint.values[param.urlSegment] = value;

						return this;
					};

					endpoint.sendRequest = function() {
						const requestUrl = Utils.generateRequestUrl(urlSegments, endpoint.values);

						var promise = Utils.sendXHRRequest(requestUrl);

						endpoint.values = {};

						return promise;
					};
				}(parameter));
			}

			endpoint.requestable = false;
		} else { // generate the endpoint with the parameters but also with a sendRequest function
			for (parameterIndex = 0; parameterIndex < this.parameters.length; parameterIndex++) {
				parameter = this.parameters[parameterIndex].generateParameter(urlSegments);
				endpoint[this.parameters[parameterIndex].getName()] = parameter;
				endpointParam = endpoint[this.parameters[parameterIndex].getName()];

				// immediately invoked function to save the proper references to the parameter function
				(function(param) {
					endpoint[param.name] = function(value) {
						endpoint.values[param.urlSegment] = value;

						return this;
					};

					endpoint.sendRequest = function() {
						const requestUrl = Utils.generateRequestUrl(urlSegments, endpoint.values);

						const promise = Utils.sendXHRRequest(requestUrl);

						endpoint.values = {};

						return promise;
					};
				}(parameter));
			}

			endpoint.requestable = true;
		}

		return endpoint;
	}
};