var util = require('util');

var apiJson = require('json!./../data/api.json');
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
		for (const schema in apiJson.schemas) {
			const schemaObj = new SchemaHandler(
                                    schema.name,
                                    schema.urlSegment);

			const endpoints = [];

			// endpoint-level generation
			for (const endpoint in schema.endpoints) {
				const endpointObj =
                    new EndpointHandler(
                            endpoint.name,
                            endpoint.urlSegment,
                            steamWebApiVersion,
                            endpoint.parameterRequired);

				const parameters = [];

				// parameter-level generation
				for (const parameter in endpoint.parameters) {
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
			schemas.push(schema);
		}

		apiHandler.addSchemas(schemas);


		const temp = apiHandler.getApi();

		util.inspect(temp);

		return temp;
	}

	setDaedalusUrl(domain, port) {
		this.daedalusDomain = domain;
		this.daedalusPort = port;
	}
};