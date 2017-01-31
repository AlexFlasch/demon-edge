var util = require('util');

var Utils = require('./Utils')
var apiJson = require('./../data/api.json');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');

var steamWebApiVersion = 1;

class DemonEdge {
	constructor() {
		// finally spent ages moving that mess of a json object to its own json file
		this.api = this.generateApiStructure();
		this.setDaedalusUrl = setDaedalusUrl;
	}

	generateApiStructure() {
		const apiHandler = new ApiHandler(apiJson.urlSegment);

		const schemas = [];

		// schema-level generation
		for (let i = 0; i < apiJson.schemas.length; i++) {
			const schema = apiJson.schemas[i];

			const schemaObj = new SchemaHandler(
                                    schema.name,
                                    schema.urlSegment);

			const endpoints = [];

			// endpoint-level generation
			for (let j = 0; j < schema.endpoints.length; j++) {
				const endpoint = schema.endpoints[j];

				const endpointObj =
                    new EndpointHandler(
                            endpoint.name,
                            endpoint.urlSegment,
                            steamWebApiVersion,
                            endpoint.parameterRequired);

				const parameters = [];

				// parameter-level generation
				for (let k = 0; k < endpoint.parameters.length; k++) {
					const parameter = endpoint.parameters[k];

					const parameterObj = new ParameterHandler(
                                                parameter.name,
                                                parameter.urlSegment,
                                                parameter.required);

					parameters.push(parameterObj);
				}

				endpointObj.addParameters(parameters);
				endpoints.push(endpointObj);
			}

			schemaObj.addEndpoints(endpoints);
			schemas.push(schemaObj);
		}

		apiHandler.addSchemas(schemas);

		return apiHandler.getApi();
	}
}

function setDaedalusUrl(domain, port) {
	Utils.daedalusUrl = domain;
	Utils.daedalusPort = port;
}

module.exports = new DemonEdge();
