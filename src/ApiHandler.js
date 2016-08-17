var Utils = require('./Utils');

module.exports = class ApiHandler {
	constructor() {
		this.schemas = [];
	}

	getRequestUrl() {
		return this.urlSegment;
	}

	getApi() {
		return generateApi(this);
	}

	getSchemas() {
		return this.schemas;
	}

	addSchema(schemaHandler) {
		this.schemas.push(schemaHandler);

		return this; // allow chaining
	}

	addSchemas(schemaHandlers) {
		for (let schemaIndex = 0; schemaIndex < schemaHandlers.length; schemaIndex++) {
			this.schemas.push(schemaHandlers[schemaIndex]);
		}

		return this; // allow chaining
	}
};

function generateApi(apiHandler) {
	const api = {};

	for (let schemaIndex = 0; schemaIndex < apiHandler.schemas.length; schemaIndex++) {
		api[apiHandler.schemas[schemaIndex].getName()] =
			apiHandler.schemas[schemaIndex].generateSchema();
	}

	return api;
}