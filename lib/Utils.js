'use strict';

var axios = require('axios');
var apiData = require('../data/api.json');

module.exports = {
	daedalusUrl: 'localhost',
	daedalusPort: 80,
	log: function log(message) {
		console.error('CRIT: ' + message);
	},
	clone: function clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	},

	// concatenates all the urlSegments into one http url
	// could probably be done a bit more cleanly, but this will work for now
	generateEndpointRequestUrl: function generateEndpointRequestUrl(urlSegments) {
		// 0 = apiUrl
		// 1 = schemaUrl
		// 2 = endpointUrl
		var requestUrl = urlSegments[0] + '/' + urlSegments[1] + '/' + urlSegments[2];

		return requestUrl;
	},

	// sends an axios post request and returns the axios promise
	// in order to allow for contacting a separate api server, CORS has to be enabled
	// return the promise object for the user to resolve when needed
	sendXHR: function sendXHR(url, params) {
		// if the params object has no keys, there's no need to transform any parameters
		if (!(Object.keys(params).length === 0 && params.constructor === Object)) {
			params = transformParams(url, params);
		}
		return axios.post('http://' + this.daedalusUrl + ':' + this.daedalusPort + '/' + url, params);
	}
};

var transformParams = function transformParams(url, params) {
	var valveParams = {};

	var _loop = function _loop(param) {
		var urlSegments = url.split('/');
		// 0 is always 'api'
		// 1 is schema name
		// 2 is endpoint name

		// for all of these filters, there should only be one match,
		// so we always take the object at index 0

		var schema = apiData.schemas.filter(function (s) {
			return s.name === urlSegments[1];
		})[0];

		var endpoint = schema.endpoints.filter(function (e) {
			return e.name === urlSegments[2];
		})[0];

		var parameter = endpoint.parameters.filter(function (p) {
			return p.name === param;
		})[0];

		var valveParamName = parameter.urlSegment;

		valveParams[valveParamName] = params[param];
	};

	for (var param in params) {
		_loop(param);
	}

	return valveParams;
};