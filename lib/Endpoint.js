const Utils = require('./DeUtils');

module.exports = class Endpoint {
	constructor() {
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
	generateRequestParameters() {

	}

	// will generate the request URL and send the request via a promise, then return the promise obj.
	sendRequest() {
		const requestUrl = Utils.generateRequestUrl(this.urlSegments, this.values);
		const promise = Utils.sendXHRRequest(requestUrl);

		return promise;
	}

};