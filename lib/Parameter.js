'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function Parameter(parent, name, url, required) {
		_classCallCheck(this, Parameter);

		this.parent = parent;
		this.name = name;
		this.value = null; // undefined until user specifies a value
		this.url = url;
		this.required = required;
	}

	///
	/// This method will generate the request URL for the API call that's been chained together,
	/// send the request, and return a promise object to the user to resolve when needed.
	///
	/// params: none
	///


	_createClass(Parameter, [{
		key: 'sendRequest',
		value: function sendRequest() {
			var requestUrl = '';

			var apiComponentUrl = this.parent.parent.url;
			var endpointUrl = this.parent.url;
			var parameterStrings = [];

			var parameterObj = {};

			// gather provided parameters into an array instead of an object
			// also does some error checking for missing required parameters
			for (var parameter in this.parent.parameters) {
				var parameterName = parameter.name;
				var parameterValue = parameter.value;

				if (parameterValue === null && parameter.required) {
					Utils.log('The request was not sent due to a required parameter\n\t\t\t\t\t(' + parameter.name + ') not being given a value.');
					return;
				} else if (parameterValue === null) {
					continue;
				}

				parameterObj[parameterName] = parameterValue;
			}

			requestUrl = apiComponentUrl + endpointUrl;

			return Utils.sendXHR(requestUrl, parameterObj);
		}
	}]);

	return Parameter;
}();