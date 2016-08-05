const Endpoint = require('./Endpoint');

module.exports = class RequestHandler {
	constructor(api) {
		this.api = api;
	}

	static generateRequestFunctions(api) {
		const baseUrl = api.urlSegment;
		const schemas = api.getSchemas();

		for (let schemaIndex = 0; schemaIndex < schemas.length; schemaIndex++) {
			const schema = schemas[schemaIndex];
			const schemaSegment = schema.getUrlSegment();
			const schemaObj = {};
			const endpoints = schema.getEndpoints();

			for (let endpointIndex = 0; endpointIndex < endpoints.length; endpointIndex++) {
				const endpoint = endpoints[endpointIndex];
				const endpointSegment = endpoint.getUrlSegment();
				const endpointVersion = endpoint.getSteamWebApiVersion();
				const endpointObj = new Endpoint();
				endpointObj.urlSegments = [baseUrl, schemaSegment, endpointSegment, endpointVersion];

				const parameters = endpoint.getParameters();

				for (let parameterIndex = 0; parameterIndex < parameters.length; parameterIndex++) {
					const parameter = parameters[parameterIndex];

					// yeah this is gross, I'm sorry. Rewrite eventually
					(function(endptObj, param) {
						const parameterSegment = param.urlSegment;

						endptObj[param.getName()] = function(value) {
							endptObj.urlSegments.push(parameterSegment);
							endptObj.values[param.getName()] = value;
						}
					}(endpointObj, parameter));
				}

				schemaObj[endpoint.getName()] = endpointObj;
			}

			api[schema.getName()] = schemaObj;
		}
	}
};