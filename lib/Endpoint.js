'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function Endpoint() {
		_classCallCheck(this, Endpoint);

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


	_createClass(Endpoint, [{
		key: 'generateRequestParameters',
		value: function generateRequestParameters() {}

		// will generate the request URL and send the request via a promise, then return the promise obj.

	}, {
		key: 'sendRequest',
		value: function sendRequest() {
			var requestUrl = Utils.generateEndpointRequestUrl(this.urlSegments);
			var promise = Utils.sendXHR(requestUrl);

			return promise;
		}
	}]);

	return Endpoint;
}();