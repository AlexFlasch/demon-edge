module.exports = class ApiHandler {
	constructor(urlSegment) {
		this.schemas = [];
		this.urlSegment = urlSegment;
	}

	getRequestUrl() {
		return this.urlSegment;
	}

	getApi() {
		const api = {};

		for (let schemaIndex = 0; schemaIndex < this.schemas.length; schemaIndex++) {
			api[this.schemas[schemaIndex].getName()] =
				this.schemas[schemaIndex].generateSchema(this.urlSegment);
		}

		return api;
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