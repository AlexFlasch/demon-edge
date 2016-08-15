var util = require('util');

var apiJson = require('./../data/api.json');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');

var steamWebApiVersion = 1;

module.exports = class DemonEdge {


	constructor() {
		// please forgive me. this will probably all be hidden in a json file to be parsed eventually.
		this.api = this.generateApiStructure();
		this.daedalusDomain = 'localhost';
		this.daedalusPort = 7575;
	}

	generateApiStructure() {
		const apiHandler = new ApiHandler();

		const schemas = [];

		// schema-level generation
		for (let i = 0; i < apiJson.schemas.length; i++) {
			let schema = apiJson.schemas[i];

			const schemaObj = new SchemaHandler(
                                    schema.name,
                                    schema.urlSegment);

			const endpoints = [];

			// endpoint-level generation
			for (let j = 0; j < schema.endpoints.length; j++) {
				let endpoint = schema.endpoints[j];

				const endpointObj =
                    new EndpointHandler(
                            endpoint.name,
                            endpoint.urlSegment,
                            steamWebApiVersion,
                            endpoint.parameterRequired);

				const parameters = [];

				// parameter-level generation
				for (let k = 0; k < endpoint.parameters.length; k++) {
					let parameter = endpoint.parameters[k];

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

	static setDaedalusUrl(domain = 'localhost', port = '7575') {
		Utils.daedalusUrl = domain;
		Utils.daedalusPort = port;
	}
};
