'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');

var apiJson = require('json!./../../data/api.json');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');

var steamWebApiVersion = 1;

module.exports = (function () {
	function DemonEdge() {
		_classCallCheck(this, DemonEdge);

		// please forgive me. this will probably all be hidden in a json file to be parsed eventually.
		this.api = this.generateApiStructure();
		this.daedalusDomain = 'localhost';
		this.daedalusPort = 7575;
	}

	_createClass(DemonEdge, [{
		key: 'generateApiStructure',
		value: function generateApiStructure() {
			var apiHandler = new ApiHandler();

			console.log('hi');

			var schemas = [];

			// schema-level generation
			for (var schema in apiJson.schemas) {
				var schemaObj = new SchemaHandler(schema.name, schema.urlSegment);

				var endpoints = [];

				// endpoint-level generation
				for (var endpoint in schema.endpoints) {
					var endpointObj = new EndpointHandler(endpoint.name, endpoint.urlSegment, steamWebApiVersion, endpoint.parameterRequired);

					var parameters = [];

					// parameter-level generation
					for (var parameter in endpoint.parameters) {
						var parameterObj = new ParameterHandler(parameter.name, parameter.urlSegment, parameter.required);

						parameters.push(parameterObj);
					}

					endpointObj.addParameters(parameters);
					endpoints.push(endpointObj);
				}

				schemaObj.addEndpoints(endpoints);
				schemas.push(schema);
			}

			apiHandler.addSchemas(schemas);

			var temp = apiHandler.getApi();

			console.log(util.inspect(temp));

			return temp;
		}
	}, {
		key: 'setDaedalusUrl',
		value: function setDaedalusUrl(domain, port) {
			this.daedalusDomain = domain;
			this.daedalusPort = port;
		}
	}]);

	return DemonEdge;
})();