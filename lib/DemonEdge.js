'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');

var Utils = require('./Utils');
var apiJson = require('./api.json');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');

var steamWebApiVersion = 1;

var DemonEdge = function () {
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

module.exports = new DemonEdge();