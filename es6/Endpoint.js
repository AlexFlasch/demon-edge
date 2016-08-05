'use strict';

const rp = require('request-promise');
const Utils = require('./Utils');

module.exports = function Endpoint() {
	// constructor
	useStrict();

	var urlSegments = [];
	var values = {};
	// end constructor

	// functions for each type of parameter will be dynamically added here.

	function generateRequestUrl(urlSegments) {


		return requestUrl;
	}

	function generateRequestParameters() {

	}

	// will generate the request URL and send the request via a promise, then return the promise obj.
	function sendRequest() {
		let requestUrl = generateRequestUrl(urlSegments);
		// if sendRequest is called on an endpoint, no parameters are being used, thus the empty json obj
		let promise = Utils.sendXHRRequest(urlSegments, {});

		return promise;
	}

};