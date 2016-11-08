"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function ApiHandler(urlSegment) {
		_classCallCheck(this, ApiHandler);

		this.schemas = [];
		this.urlSegment = urlSegment;
	}

	_createClass(ApiHandler, [{
		key: "getRequestUrl",
		value: function getRequestUrl() {
			return this.urlSegment;
		}
	}, {
		key: "getApi",
		value: function getApi() {
			var api = {};

			for (var schemaIndex = 0; schemaIndex < this.schemas.length; schemaIndex++) {
				api[this.schemas[schemaIndex].getName()] = this.schemas[schemaIndex].generateSchema(this.urlSegment);
			}

			return api;
		}
	}, {
		key: "getSchemas",
		value: function getSchemas() {
			return this.schemas;
		}
	}, {
		key: "addSchema",
		value: function addSchema(schemaHandler) {
			this.schemas.push(schemaHandler);

			return this; // allow chaining
		}
	}, {
		key: "addSchemas",
		value: function addSchemas(schemaHandlers) {
			for (var schemaIndex = 0; schemaIndex < schemaHandlers.length; schemaIndex++) {
				this.schemas.push(schemaHandlers[schemaIndex]);
			}

			return this; // allow chaining
		}
	}]);

	return ApiHandler;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');

var Utils = require('./Utils');
var apiJson = require('./../data/api.json');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');

var steamWebApiVersion = 1;

module.exports = function () {
	function DemonEdge() {
		_classCallCheck(this, DemonEdge);

		// finally spent ages moving that mess of a json object to its own json file
		this.api = this.generateApiStructure();
	}

	_createClass(DemonEdge, [{
		key: 'generateApiStructure',
		value: function generateApiStructure() {
			var apiHandler = new ApiHandler(apiJson.urlSegment);

			var schemas = [];

			// schema-level generation
			for (var i = 0; i < apiJson.schemas.length; i++) {
				var schema = apiJson.schemas[i];

				var schemaObj = new SchemaHandler(schema.name, schema.urlSegment);

				var endpoints = [];

				// endpoint-level generation
				for (var j = 0; j < schema.endpoints.length; j++) {
					var endpoint = schema.endpoints[j];

					var endpointObj = new EndpointHandler(endpoint.name, endpoint.urlSegment, steamWebApiVersion, endpoint.parameterRequired);

					var parameters = [];

					// parameter-level generation
					for (var k = 0; k < endpoint.parameters.length; k++) {
						var parameter = endpoint.parameters[k];

						var parameterObj = new ParameterHandler(parameter.name, parameter.urlSegment, parameter.required);

						parameters.push(parameterObj);
					}

					endpointObj.addParameters(parameters);
					endpoints.push(endpointObj);
				}

				schemaObj.addEndpoints(endpoints);
				schemas.push(schemaObj);
			}

			apiHandler.addSchemas(schemas);

			var temp = apiHandler.getApi();

			util.inspect(temp);

			return temp;
		}
	}, {
		key: 'setDaedalusUrl',
		value: function setDaedalusUrl(domain, port) {
			Utils.daedalusUrl = domain;
			Utils.daedalusPort = port;
		}
	}]);

	return DemonEdge;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function Endpoint() {
		_classCallCheck(this, Endpoint);

		this.urlSegments = [];
		this.values = {};
	}

	// functions for each type of parameter will be dynamically added to this class.
	// if an endpoint does not have a specific type of parameter
	// i.e. the GetFantasyPlayerStats endpoint has StartTime but not skill,
	// so api.Fantasy.GetFantasyPlayerStats.startTime(new Date()); is valid,
	// but api.Fantasy.GetFantasyPlayerStats.skill(1); is not.


	// as of now does nothing.
	// TODO: check if this method is actually required.


	_createClass(Endpoint, [{
		key: 'generateRequestParameters',
		value: function generateRequestParameters() {}

		// will generate the request URL and send the request via a promise, then return the promise obj.

	}, {
		key: 'sendRequest',
		value: function sendRequest() {
			var requestUrl = Utils.generateRequestUrl(this.urlSegments, this.values);
			var promise = Utils.sendXHRRequest(requestUrl);

			return promise;
		}
	}]);

	return Endpoint;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function EndpointHandler(name, urlSegment, version) {
		var needsParams = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

		_classCallCheck(this, EndpointHandler);

		this.name = name;
		// this is different from Crystalys in order to talk to Daedalus properly
		this.urlSegment = name;
		this.needsParams = needsParams;

		this.parameters = [];
	}

	_createClass(EndpointHandler, [{
		key: 'getName',
		value: function getName() {
			return this.name;
		}
	}, {
		key: 'getParameters',
		value: function getParameters() {
			return this.parameters;
		}
	}, {
		key: 'getUrlSegment',
		value: function getUrlSegment() {
			return this.urlSegment;
		}
	}, {
		key: 'getSteamWebApiVersion',
		value: function getSteamWebApiVersion() {
			return this.version;
		}
	}, {
		key: 'needsParameters',
		value: function needsParameters() {
			return this.needsParameters;
		}
	}, {
		key: 'addParameter',
		value: function addParameter(parameterHandler) {
			this.parameters.push(parameterHandler);

			return this; // allow chaining
		}
	}, {
		key: 'addParameters',
		value: function addParameters(parameterHandlers) {
			for (var parameterIndex = 0; parameterIndex < parameterHandlers.length; parameterIndex++) {
				this.parameters.push(parameterHandlers[parameterIndex]);
			}

			return this; // allow chaining
		}
	}, {
		key: 'generateEndpoint',
		value: function generateEndpoint(segments) {
			var urlSegments = segments.slice(0); // create shallow copy of array
			urlSegments.push(this.urlSegment);
			urlSegments.push(this.version);

			var endpoint = {};
			endpoint.values = {};
			endpoint.urlSegments = urlSegments;
			endpoint.getUrlSegments = function () {
				return this.urlSegment;
			};

			var parameterIndex = 0;
			var parameter = void 0;
			var endpointParam = void 0;

			if (this.needsParams) {
				// generate the endpoint with the parameters but no sendRequest function
				for (parameterIndex = 0; parameterIndex < this.parameters.length; parameterIndex++) {
					parameter = this.parameters[parameterIndex].generateParameter(urlSegments);
					endpoint[this.parameters[parameterIndex].getName()] = parameter;
					endpointParam = endpoint[this.parameters[parameterIndex].getName()];

					// immediately invoked function to save the proper references to the parameter function
					// using an IIFE is pretty ugly, but the best way I could come up with to dynamically
					// generate parameter functions for each endpoint as needed...
					(function (param) {
						endpoint[param.name] = function (value) {
							endpoint.values[param.urlSegment] = value;

							return this;
						};

						endpoint.sendRequest = function () {
							var requestUrl = Utils.generateRequestUrl(urlSegments, endpoint.values);

							var promise = Utils.sendXHRRequest(requestUrl);

							endpoint.values = {};

							return promise;
						};
					})(parameter);
				}

				endpoint.requestable = false;
			} else {
				// generate the endpoint with the parameters but also with a sendRequest function
				for (parameterIndex = 0; parameterIndex < this.parameters.length; parameterIndex++) {
					parameter = this.parameters[parameterIndex].generateParameter(urlSegments);
					endpoint[this.parameters[parameterIndex].getName()] = parameter;
					endpointParam = endpoint[this.parameters[parameterIndex].getName()];

					// immediately invoked function to save the proper references to the parameter function
					(function (param) {
						endpoint[param.name] = function (value) {
							endpoint.values[param.urlSegment] = value;

							return this;
						};

						endpoint.sendRequest = function () {
							var requestUrl = Utils.generateRequestUrl(urlSegments, endpoint.values);

							var promise = Utils.sendXHRRequest(requestUrl);

							endpoint.values = {};

							return promise;
						};
					})(parameter);
				}

				endpoint.requestable = true;
			}

			return endpoint;
		}
	}]);

	return EndpointHandler;
}();
'use strict';

var DemonEdge = require('./DemonEdge.js');

if (window.DemonEdge !== undefined) {
	throw new Error('DemonEdge has been instantiated more than once!');
}

window.DemonEdge = new DemonEdge();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function Parameter(parent, name, url, required) {
		_classCallCheck(this, Parameter);

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


	_createClass(Parameter, [{
		key: 'sendRequest',
		value: function sendRequest() {
			var requestUrl = '';

			var apiComponentUrl = this.parent.parent.url;
			var endpointUrl = this.parent.url;
			var parameterStrings = [];

			var parameterArr = [];

			// gather provided parameters into an array instead of an object
			// also does some error checking for missing required parameters
			for (var parameter in this.parent.parameters) {
				var parameterName = parameter.name;
				var parameterValue = parameter.value;

				if (parameterValue === null && parameter.required) {
					Utils.log('The request was not sent due to a required parameter \n\t\t\t\t\t(' + parameter.name + ') not being given a value.');
					return;
				} else if (parameterValue === null) {
					continue;
				}

				parameterArr.push(parameterName + '=' + parameterValue);
			}

			var parameterString = '';

			// put parameters into format for POSTing
			// i.e. matchID=9999999&heroID=99
			for (var i = 0; i < parameterArr.length; i++) {
				if (i !== 0) {
					parameterString += "&";
				}

				parameterString += parameterArr[i];
			}

			requestUrl = apiComponentUrl + endpointUrl;

			for (var _i = 0; _i < parameterStrings.length; _i++) {
				requestUrl += parameterStrings[_i];
			}

			Utils.log(requestUrl);

			return Utils.sendXHRRequest(requestUrl, parameterString);
		}
	}]);

	return Parameter;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function ParameterHandler(name, urlSegment, required) {
		_classCallCheck(this, ParameterHandler);

		this.name = name;
		this.urlSegment = name;
		this.required = required;
	}

	_createClass(ParameterHandler, [{
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}, {
		key: "getUrlSegment",
		value: function getUrlSegment() {
			return this.urlSegment;
		}
	}, {
		key: "isRequired",
		value: function isRequired() {
			return this.required;
		}
	}, {
		key: "generateParameter",
		value: function generateParameter(urlSegments) {
			return {
				name: this.name,
				urlSegment: this.urlSegment,
				getUrlSegments: function getUrlSegments() {
					return this.urlSegment;
				}
			};
		}
	}]);

	return ParameterHandler;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');
var Endpoint = require('./Endpoint');

module.exports = function () {
	function Schema(name, url) {
		_classCallCheck(this, Schema);

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


	_createClass(Schema, [{
		key: 'addEndpoint',
		value: function addEndpoint(endpointName, endpointUrl, needsParameters) {
			useStrict();

			var endpoint = new Endpoint(this, endpointName, endpointUrl);

			if (!needsParameters) {
				var sendRequest = function sendRequest() {
					useStrict();

					var requestUrl = '';

					var baseUrl = 'https://api.steampowered.com/';
					var schemaUrl = this.parent.parent.url;
					var endpointUrl = this.parent.url;
					var apiKey = Utils.getApiKey();

					for (var parameter in this.parameters) {
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
	}]);

	return Schema;
}();
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function SchemaHandler(name, urlSegment) {
		_classCallCheck(this, SchemaHandler);

		this.name = name;
		// different from Crystalys to talk to Daedalus properly
		this.urlSegment = name;

		this.endpoints = [];
	}

	_createClass(SchemaHandler, [{
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}, {
		key: "getEndpoints",
		value: function getEndpoints() {
			return this.endpoints;
		}
	}, {
		key: "getUrlSegment",
		value: function getUrlSegment() {
			return this.urlSegments;
		}
	}, {
		key: "addEndpoint",
		value: function addEndpoint(endpointHandler) {
			this.endpoints.push(endpointHandler);

			return this; // allow chaining
		}
	}, {
		key: "addEndpoints",
		value: function addEndpoints(endpointHandlers) {
			for (var endpointIndex = 0; endpointIndex < endpointHandlers.length; endpointIndex++) {
				this.endpoints.push(endpointHandlers[endpointIndex]);
			}

			return this; // allow chaining
		}
	}, {
		key: "generateSchema",
		value: function generateSchema(urlSegment) {
			var _this = this;

			var schema = {};
			schema.getUrlSegments = function () {
				return [urlSegment, _this.urlSegment];
			};

			var urlSegments = [urlSegment, this.urlSegment];

			for (var endpointIndex = 0; endpointIndex < this.endpoints.length; endpointIndex++) {
				schema[this.endpoints[endpointIndex].getName()] = this.endpoints[endpointIndex].generateEndpoint(urlSegments);
			}

			return schema;
		}
	}]);

	return SchemaHandler;
}();
'use strict';

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


	// concatenates all the urlSegments into one http url with query parameters
	generateRequestUrl: function generateRequestUrl(urlSegments, parameters) {
		var requestUrl = this.generateEndpointRequestUrl(urlSegments);

		var parameterNames = Object.keys(parameters);

		requestUrl += '?';

		// append parameters as such: &<param_name>=<param_value>
		for (var i = 0; i < parameterNames.length; i++) {
			if (i !== 0) {
				requestUrl += '&';
			}
			requestUrl += parameterNames[i] + '=' + parameters[parameterNames[i]];
		}

		return requestUrl;
	},


	// sends a vanilla js xhr request, but wrapped in an ES6 promise
	// in order to allow for contacting a separate api server, CORS has to be enabled
	// return the promise object for the user to resolve when needed
	sendXHRRequest: function sendXHRRequest(url, params) {
		var promise = new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();

			console.log('daedalus.flascher.net/' + url);

			xhr.open('POST', 'http://daedalus.flascher.net/' + url, true);

			xhr.onload = function onload() {
				if (this.status >= 200 && this.status <= 300) {
					resolve(this.response);
				} else {
					reject(this.statusText);
				}
			};

			xhr.onerror = function onerror() {
				reject(this.statusText);
			};

			xhr.send(params);
		});

		return promise;
	}
};
