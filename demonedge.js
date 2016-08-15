(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
	"apiVersion": 1,
	"schemas": [
		{
			"name": "Fantasy",
			"urlSegment": "IDOTA2Fantasy_570",
			"endpoints": [
				{
					"name": "GetFantasyPlayerStats",
					"urlSegment": "GetFantasyPlayerStats",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "fantasyLeagueID",
							"urlSegment": "FantasyLeagueID",
							"required": true
						},
						{
							"name": "startTime",
							"urlSegment": "StartTime",
							"required": false
						},
						{
							"name": "endTime",
							"urlSegment": "EndTime",
							"required": false
						},
						{
							"name": "matchID",
							"urlSegment": "matchid",
							"required": false
						},
						{
							"name": "seriesID",
							"urlSegment": "SeriesID",
							"required": false
						},
						{
							"name": "playerAccountID",
							"urlSegment": "PlayerAccountID",
							"required": false
						}
					]
				},
				{
					"name": "GetPlayerOfficialInfo",
					"urlSegment": "GetPlayerOfficialInfo",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "accountID",
							"urlSegment": "accountid",
							"required": true
						}
					]
				},
				{
					"name": "GetProPlayerList",
					"urlSegment": "GetProPlayerList",
					"parameterRequired": false,
					"parameters": []
				}
			]
		},
		{
			"name": "MatchStats",
			"urlSegment": "IDOTA2Match_570",
			"endpoints": [
				{
					"name": "GetLeagueListing",
					"urlSegment": "GetLeagueListing",
					"parameterRequired": false,
					"parameters": []
				},
				{
					"name": "GetLiveLeagueGames",
					"urlSegment": "GetLiveLeagueGames",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "leagueID",
							"urlSegment": "league_id",
							"required": false
						},
						{
							"name": "matchID",
							"urlSegment": "match_id",
							"required": false
						}
					]
				},
				{
					"name": "GetMatchDetails",
					"urlSegment": "GetMatchDetails",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "matchID",
							"urlSegment": "match_id",
							"required": true
						}
					]
				},
				{
					"name": "GetMatchHistory",
					"urlSegment": "GetMatchHistory",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "heroID",
							"urlSegment": "hero_id",
							"required": false
						},
						{
							"name": "gameMode",
							"urlSegment": "game_mode",
							"required": false
						},
						{
							"name": "skill",
							"urlSegment": "skill",
							"required": false
						},
						{
							"name": "minPlayers",
							"urlSegment": "min_players",
							"required": false
						},
						{
							"name": "accountID",
							"urlSegment": "account_id",
							"required": false
						},
						{
							"name": "leagueID",
							"urlSegment": "league_id",
							"required": false
						},
						{
							"name": "startAtMatchID",
							"urlSegment": "start_at_match_id",
							"required": false
						},
						{
							"name": "matchesRequested",
							"urlSegment": "matches_requested",
							"required": false
						},
						{
							"name": "tournamentGamesOnly",
							"urlSegment": "tournament_games_only",
							"required": false
						}
					]
				},
				{
					"name": "GetMatchHistoryBySequenceNumber",
					"urlSegment": "GetMatchHistoryBySequenceNum",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "startAtMatchSequenceNumber",
							"urlSegment": "start_at_match_seq_num",
							"required": false
						},
						{
							"name": "matchesRequested",
							"urlSegment": "matches_requested",
							"required": "false"
						}
					]
				},
				{
					"name": "GetScheduledLeagueGames",
					"urlSegment": "GetScheduledLeagueGames",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "startDate",
							"urlSegment": "date_min",
							"required": false
						},
						{
							"name": "endDate",
							"urlSegment": "date_max",
							"required": false
						}
					]
				},
				{
					"name": "GetTeamInfoByTeamID",
					"urlSegment": "GetTeamInfoByTeamID",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "startAtTeamID",
							"urlSegment": "start_at_team_id",
							"required": false
						},
						{
							"name": "teamsRequested",
							"urlSegment": "teams_requested",
							"required": false
						}
					]
				},
				{
					"name": "GetTopLiveGame",
					"urlSegment": "GetTopLiveGame",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "partner",
							"urlSegment": "partner",
							"required": true
						}
					]
				},
				{
					"name": "GetTournamentPlayerStats",
					"urlSegment": "GetTournamentPlayerStats",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "accountID",
							"urlSegment": "account_id",
							"required": true
						},
						{
							"name": "leagueID",
							"urlSegment": "league_id",
							"required": false
						},
						{
							"name": "heroID",
							"urlSegment": "hero_id",
							"required": false
						},
						{
							"name": "timeFrame",
							"urlSegment": "time_frame",
							"required": false
						},
						{
							"name": "matchID",
							"urlSegment": "match_id",
							"required": false
						},
						{
							"name": "phaseID",
							"urlSegment": "phase_id",
							"required": false
						}
					]
				}
			]
		},
		{
			"name": "StreamSystem",
			"urlSegment": "IDOTA2StreamSystem_570",
			"endpoints": [
				{
					"name": "GetBroadcasterInfo",
					"urlSegment": "GetBroadcasterInfo",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "broadcasterSteamID",
							"urlSegment": "broadcaster_steam_id",
							"required": true
						},
						{
							"name": "leagueID",
							"urlSegment": "league_id",
							"required": false
						}
					]
				}
			]
		},
		{
			"name": "Ticket",
			"urlSegment": "IDOTA2Ticket_570",
			"endpoints": [
				{
					"name": "SetSteamAccountPurchased",
					"urlSegment": "SetSteamAccountPurchased",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "eventID",
							"urlSegment": "eventid",
							"required": true
						},
						{
							"name": "steamID",
							"urlSegment": "steamid",
							"required": true
						}
					]
				},
				{
					"name": "SteamAccountValidForEvent",
					"urlSegment": "SteamAccountValidForEvent",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "eventID",
							"urlSegment": "eventid",
							"required": true
						},
						{
							"name": "steamID",
							"urlSegment": "steamid",
							"required": true
						}
					]
				}
			]
		},
		{
			"name": "Economy",
			"urlSegment": "IEconDOTA2_570",
			"endpoints": [
				{
					"name": "GetEventStatsForAccount",
					"urlSegment": "GetEventStatsForAccount",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "eventID",
							"urlSegment": "eventid",
							"required": true
						},
						{
							"name": "accountID",
							"urlSegment": "accountid",
							"required": true
						},
						{
							"name": "language",
							"urlSegment": "language",
							"required": false
						}
					]
				},
				{
					"name": "GetGameItems",
					"urlSegment": "GetGameItems",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "language",
							"urlSegment": "language",
							"required": false
						}
					]
				},
				{
					"name": "GetHeroes",
					"urlSegment": "GetHeroes",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "language",
							"urlSegment": "language",
							"required": false
						},
						{
							"name": "itemizedOnly",
							"urlSegment": "itemizedonly",
							"required": false
						}
					]
				},
				{
					"name": "GetItemIconPath",
					"urlSegment": "GetItemIconPath",
					"parameterRequired": true,
					"parameters": [
						{
							"name": "iconName",
							"urlSegment": "iconname",
							"required": true
						},
						{
							"name": "iconType",
							"urlSegment": "icontype",
							"required": false
						}
					]
				},
				{
					"name": "GetRarities",
					"urlSegment": "GetRarities",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "language",
							"urlSegment": "language",
							"required": false
						}
					]
				},
				{
					"name": "GetTournamentPrizePool",
					"urlSegment": "GetTournamentPrizePool",
					"parameterRequired": false,
					"parameters": [
						{
							"name": "leagueID",
							"urlSegment": "leagueid",
							"required": false
						}
					]
				}
			]
		}
	]
}
},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function ApiHandler() {
		_classCallCheck(this, ApiHandler);

		this.urlSegment = 'https://api.steampowered.com';

		this.schemas = [];
	}

	_createClass(ApiHandler, [{
		key: 'getRequestUrl',
		value: function getRequestUrl() {
			return this.urlSegment;
		}
	}, {
		key: 'getApi',
		value: function getApi() {
			return generateApi(this);
		}
	}, {
		key: 'getSchemas',
		value: function getSchemas() {
			return this.schemas;
		}
	}, {
		key: 'addSchema',
		value: function addSchema(schemaHandler) {
			this.schemas.push(schemaHandler);

			return this; // allow chaining
		}
	}, {
		key: 'addSchemas',
		value: function addSchemas(schemaHandlers) {
			for (var schemaIndex = 0; schemaIndex < schemaHandlers.length; schemaIndex++) {
				this.schemas.push(schemaHandlers[schemaIndex]);
			}

			return this; // allow chaining
		}
	}]);

	return ApiHandler;
}();

function generateApi(apiHandler) {
	var api = {};
	var baseUrl = 'https://api.steampowered.com';
	api.getUrlSegments = function () {
		return baseUrl;
	};

	for (var schemaIndex = 0; schemaIndex < apiHandler.schemas.length; schemaIndex++) {
		api[apiHandler.schemas[schemaIndex].getName()] = apiHandler.schemas[schemaIndex].generateSchema(baseUrl);
	}

	return api;
}

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');

var apiJson = require('./../data/api.json');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');

var steamWebApiVersion = 1;

module.exports = function () {
	function DemonEdge() {
		_classCallCheck(this, DemonEdge);

		// please forgive me. this will probably all be hidden in a json file to be parsed eventually.
		this.api = this.generateApiStructure();
		this.daedalusDomain = 'localhost';
		this.daedalusPort = 7575;
	}

	_createClass(DemonEdge, [{
		key: 'generateApiStructure',
		value: function generateApiStructure() {
			var apiHandler = new ApiHandler();

			var schemas = [];

			// schema-level generation
			for (var i = 0; i <= apiJson.schemas.length; i++) {
				var schema = apiJson.schemas[i];

				var schemaObj = new SchemaHandler(schema.name, schema.urlSegment);

				var endpoints = [];

				// endpoint-level generation
				for (var j = 0; j <= schema.endpoints.length; j++) {
					var endpoint = schema.endpoints[j];

					var endpointObj = new EndpointHandler(endpoint.name, endpoint.urlSegment, steamWebApiVersion, endpoint.parameterRequired);

					var parameters = [];

					// parameter-level generation
					for (var k = 0; k <= endpoint.parameters.length; k++) {
						var parameter = endpoint.parameters[k];

						var parameterObj = new ParameterHandler(parameter.name, parameter.urlSegment, parameter.required);

						parameters.push(parameterObj);
					}

					endpointObj.addParameters(parameters);
					endpoints.push(endpointObj);
				}

				schemaObj.addEndpoints(endpoints);
				schemas.push(schema);
			}

			apiHandler.addSchemas(schemas);

			var temp = apiHandler.getApi();

			util.inspect(temp);

			return temp;
		}
	}, {
		key: 'setDaedalusUrl',
		value: function setDaedalusUrl(domain, port) {
			this.daedalusDomain = domain;
			this.daedalusPort = port;
		}
	}]);

	return DemonEdge;
}();

},{"./../data/api.json":1,"./ApiHandler":2,"./EndpointHandler":4,"./ParameterHandler":5,"./SchemaHandler":6,"util":12}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function EndpointHandler(name, urlSegment, version, needsParams) {
		_classCallCheck(this, EndpointHandler);

		this.name = name;
		this.urlSegment = urlSegment;
		this.version = 'v' + version;
		this.needsParams = needsParams;
		if (this.needsParams === undefined) this.needsParams = true; // default value

		this.parameters = [];
	}

	_createClass(EndpointHandler, [{
		key: 'getName',
		value: function getName() {
			return this.name;
		}
	}, {
		key: 'getParameters',
		value: function getParameters() {
			return this.parameters;
		}
	}, {
		key: 'getUrlSegment',
		value: function getUrlSegment() {
			return this.urlSegment;
		}
	}, {
		key: 'getSteamWebApiVersion',
		value: function getSteamWebApiVersion() {
			return this.version;
		}
	}, {
		key: 'needsParameters',
		value: function needsParameters() {
			return this.needsParameters;
		}
	}, {
		key: 'addParameter',
		value: function addParameter(parameterHandler) {
			this.parameters.push(parameterHandler);

			return this; // allow chaining
		}
	}, {
		key: 'addParameters',
		value: function addParameters(parameterHandlers) {
			for (var parameterIndex = 0; parameterIndex < parameterHandlers.length; parameterIndex++) {
				this.parameters.push(parameterHandlers[parameterIndex]);
			}

			return this; // allow chaining
		}
	}, {
		key: 'generateEndpoint',
		value: function generateEndpoint(segments) {
			var urlSegments = segments.slice(0); // create shallow copy of array
			urlSegments.push(this.urlSegment);
			urlSegments.push(this.version);

			var endpoint = {};
			endpoint.values = {};
			endpoint.urlSegments = urlSegments;
			endpoint.getUrlSegments = function () {
				return this.urlSegment;
			};

			var parameterIndex = 0;
			var parameter = void 0;
			var endpointParam = void 0;

			if (this.needsParams) {
				// generate the endpoint with the parameters but no sendRequest function
				for (parameterIndex = 0; parameterIndex < this.parameters.length; parameterIndex++) {
					parameter = this.parameters[parameterIndex].generateParameter(urlSegments);
					endpoint[this.parameters[parameterIndex].getName()] = parameter;
					endpointParam = endpoint[this.parameters[parameterIndex].getName()];

					// immediately invoked function to save the proper references to the parameter function
					(function (param) {
						endpoint[param.name] = function (value) {
							endpoint.values[param.urlSegment] = value;

							return this;
						};

						endpoint.sendRequest = function () {
							var requestUrl = Utils.generateRequestUrl(urlSegments, endpoint.values);

							var promise = Utils.sendXHRRequest(requestUrl);

							endpoint.values = {};

							return promise;
						};
					})(parameter);
				}

				endpoint.requestable = false;
			} else {
				// generate the endpoint with the parameters but also with a sendRequest function
				for (parameterIndex = 0; parameterIndex < this.parameters.length; parameterIndex++) {
					parameter = this.parameters[parameterIndex].generateParameter(urlSegments);
					endpoint[this.parameters[parameterIndex].getName()] = parameter;
					endpointParam = endpoint[this.parameters[parameterIndex].getName()];

					// immediately invoked function to save the proper references to the parameter function
					(function (param) {
						endpoint[param.name] = function (value) {
							endpoint.values[param.urlSegment] = value;

							return this;
						};

						endpoint.sendRequest = function () {
							var requestUrl = Utils.generateRequestUrl(urlSegments, endpoint.values);

							var promise = Utils.sendXHRRequest(requestUrl);

							endpoint.values = {};

							return promise;
						};
					})(parameter);
				}

				endpoint.requestable = true;
			}

			return endpoint;
		}
	}]);

	return EndpointHandler;
}();

},{"./Utils":7}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function ParameterHandler(name, urlSegment, required) {
		_classCallCheck(this, ParameterHandler);

		this.name = name;
		this.urlSegment = urlSegment;
		this.required = required;
	}

	_createClass(ParameterHandler, [{
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}, {
		key: "getUrlSegment",
		value: function getUrlSegment() {
			return this.urlSegment;
		}
	}, {
		key: "isRequired",
		value: function isRequired() {
			return this.required;
		}
	}, {
		key: "generateParameter",
		value: function generateParameter(urlSegments) {
			return {
				name: this.name,
				urlSegment: this.urlSegment,
				getUrlSegments: function getUrlSegments() {
					return this.urlSegment;
				}
			};
		}
	}]);

	return ParameterHandler;
}();

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function SchemaHandler(name, urlSegment) {
		_classCallCheck(this, SchemaHandler);

		this.name = name;
		this.urlSegment = urlSegment;

		this.endpoints = [];
	}

	_createClass(SchemaHandler, [{
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}, {
		key: "getEndpoints",
		value: function getEndpoints() {
			return this.endpoints;
		}
	}, {
		key: "getUrlSegment",
		value: function getUrlSegment() {
			return this.urlSegment;
		}
	}, {
		key: "addEndpoint",
		value: function addEndpoint(endpointHandler) {
			this.endpoints.push(endpointHandler);

			return this; // allow chaining
		}
	}, {
		key: "addEndpoints",
		value: function addEndpoints(endpointHandlers) {
			for (var endpointIndex = 0; endpointIndex < endpointHandlers.length; endpointIndex++) {
				this.endpoints.push(endpointHandlers[endpointIndex]);
			}

			return this; // allow chaining
		}
	}, {
		key: "generateSchema",
		value: function generateSchema(baseUrl) {
			var schema = {};
			schema.getUrlSegments = function () {
				return this.urlSegment;
			};

			var urlSegments = [baseUrl, this.urlSegment];

			for (var endpointIndex = 0; endpointIndex < this.endpoints.length; endpointIndex++) {
				schema[this.endpoints[endpointIndex].getName()] = this.endpoints[endpointIndex].generateEndpoint(urlSegments);
			}

			return schema;
		}
	}]);

	return SchemaHandler;
}();

},{}],7:[function(require,module,exports){
'use strict';

var apiKey = '';

module.exports = {
	log: function log(message) {
		console.error('CRIT: ' + message);
	},
	clone: function clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	},
	setApiKey: function setApiKey(key) {
		apiKey = key;
	},
	getApiKey: function getApiKey() {
		if (apiKey !== '') {
			return apiKey;
		} else {
			this.log('API key is not set');
			return null;
		}
	},


	// concatenates all the urlSegments into one http url
	// could probably be done a bit more cleanly, but this will work for now
	generateEndpointRequestUrl: function generateEndpointRequestUrl(urlSegments) {
		var key = this.getApiKey();

		// 0 = baseUrl
		// 1 = schemaUrl
		// 2 = endpointUrl
		// 3 = apiVersion
		var requestUrl = urlSegments[0] + '/' + urlSegments[1] + '/' + urlSegments[2] + '/' + urlSegments[3] + '?key=' + key;
		// var requestUrl = urlSegments[0]; // baseUrl
		// requestUrl += '/' + urlSegments[1]; // schemaUrl
		// requestUrl += '/' + urlSegments[2]; // endpointUrl
		// requestUrl += '/' + urlSegments[3]; // apiVersion
		// requestUrl += '?key=' + key; // add apiKey

		return requestUrl;
	},


	// concatenates all the urlSegments into one http url with query parameters
	generateRequestUrl: function generateRequestUrl(urlSegments, parameters) {
		var requestUrl = this.generateEndpointRequestUrl(urlSegments);

		var parameterNames = Object.keys(parameters);

		// append parameters as such: &<param_name>=<param_value>
		for (var i = 0; i < parameterNames.length; i++) {
			requestUrl += '&' + parameterNames[i] + '=' + parameters[parameterNames[i]];
		}

		return requestUrl;
	},


	// sends a vanilla js xhr request, but wrapped in an ES6 promise
	// return the promise object for the user to resolve when needed
	sendXHRRequest: function sendXHRRequest(url) {
		var promise = new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send();

			xhr.onload = function () {
				if (this.status >= 200 && this.status <= 300) {
					resolve(this.response);
				} else {
					reject(this.statusText);
				}
			};

			xhr.onerror = function () {
				reject(this.statusText);
			};
		});

		return promise;
	}
};

},{}],8:[function(require,module,exports){
'use strict';

var DeObj = window.DemonEdge || {};

var DemonEdge = require('./DemonEdge.js');

DeObj.api = new DemonEdge();

window.DemonEdge = DeObj;

},{"./DemonEdge.js":3}],9:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],10:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
    try {
        cachedSetTimeout = setTimeout;
    } catch (e) {
        cachedSetTimeout = function () {
            throw new Error('setTimeout is not defined');
        }
    }
    try {
        cachedClearTimeout = clearTimeout;
    } catch (e) {
        cachedClearTimeout = function () {
            throw new Error('clearTimeout is not defined');
        }
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],11:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],12:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./support/isBuffer":11,"_process":10,"inherits":9}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRhdGEvYXBpLmpzb24iLCJzcmMvQXBpSGFuZGxlci5qcyIsInNyYy9EZW1vbkVkZ2UuanMiLCJzcmMvRW5kcG9pbnRIYW5kbGVyLmpzIiwic3JjL1BhcmFtZXRlckhhbmRsZXIuanMiLCJzcmMvU2NoZW1hSGFuZGxlci5qcyIsInNyYy9VdGlscy5qcyIsInNyYy9pbmRleC5qcyIsIi4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCIuLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIuLi8uLi8uLi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy91dGlsL3N1cHBvcnQvaXNCdWZmZXJCcm93c2VyLmpzIiwiLi4vLi4vLi4vdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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R0FBbUIsS0FBbkI7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJhcGlWZXJzaW9uXCI6IDEsXG5cdFwic2NoZW1hc1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiRmFudGFzeVwiLFxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSURPVEEyRmFudGFzeV81NzBcIixcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEZhbnRhc3lQbGF5ZXJTdGF0c1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEZhbnRhc3lQbGF5ZXJTdGF0c1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJmYW50YXN5TGVhZ3VlSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiRmFudGFzeUxlYWd1ZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnRUaW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlN0YXJ0VGltZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJlbmRUaW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkVuZFRpbWVcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaGlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInNlcmllc0lEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlNlcmllc0lEXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInBsYXllckFjY291bnRJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJQbGF5ZXJBY2NvdW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFBsYXllck9mZmljaWFsSW5mb1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFBsYXllck9mZmljaWFsSW5mb1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiYWNjb3VudGlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFByb1BsYXllckxpc3RcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRQcm9QbGF5ZXJMaXN0XCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW11cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiTWF0Y2hTdGF0c1wiLFxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSURPVEEyTWF0Y2hfNTcwXCIsXG5cdFx0XHRcImVuZHBvaW50c1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRMZWFndWVMaXN0aW5nXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TGVhZ3VlTGlzdGluZ1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRMaXZlTGVhZ3VlR2FtZXNcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRMaXZlTGVhZ3VlR2FtZXNcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxlYWd1ZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZV9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1hdGNoX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRNYXRjaERldGFpbHNcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRNYXRjaERldGFpbHNcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaF9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRNYXRjaEhpc3RvcnlcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRNYXRjaEhpc3RvcnlcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImhlcm9JRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJoZXJvX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImdhbWVNb2RlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImdhbWVfbW9kZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJza2lsbFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJza2lsbFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtaW5QbGF5ZXJzXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1pbl9wbGF5ZXJzXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImFjY291bnRJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJhY2NvdW50X2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxlYWd1ZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZV9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydEF0TWF0Y2hJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJzdGFydF9hdF9tYXRjaF9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaGVzUmVxdWVzdGVkXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1hdGNoZXNfcmVxdWVzdGVkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInRvdXJuYW1lbnRHYW1lc09ubHlcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwidG91cm5hbWVudF9nYW1lc19vbmx5XCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRNYXRjaEhpc3RvcnlCeVNlcXVlbmNlTnVtYmVyXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TWF0Y2hIaXN0b3J5QnlTZXF1ZW5jZU51bVwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnRBdE1hdGNoU2VxdWVuY2VOdW1iZXJcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RhcnRfYXRfbWF0Y2hfc2VxX251bVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaGVzUmVxdWVzdGVkXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1hdGNoZXNfcmVxdWVzdGVkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogXCJmYWxzZVwiXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0U2NoZWR1bGVkTGVhZ3VlR2FtZXNcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRTY2hlZHVsZWRMZWFndWVHYW1lc1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnREYXRlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImRhdGVfbWluXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImVuZERhdGVcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZGF0ZV9tYXhcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFRlYW1JbmZvQnlUZWFtSURcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRUZWFtSW5mb0J5VGVhbUlEXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydEF0VGVhbUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0YXJ0X2F0X3RlYW1faWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwidGVhbXNSZXF1ZXN0ZWRcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwidGVhbXNfcmVxdWVzdGVkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRUb3BMaXZlR2FtZVwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFRvcExpdmVHYW1lXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInBhcnRuZXJcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwicGFydG5lclwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRUb3VybmFtZW50UGxheWVyU3RhdHNcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRUb3VybmFtZW50UGxheWVyU3RhdHNcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiYWNjb3VudElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImFjY291bnRfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaGVyb0lEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImhlcm9faWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwidGltZUZyYW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInRpbWVfZnJhbWVcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaF9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJwaGFzZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInBoYXNlX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcIlN0cmVhbVN5c3RlbVwiLFxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSURPVEEyU3RyZWFtU3lzdGVtXzU3MFwiLFxuXHRcdFx0XCJlbmRwb2ludHNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0QnJvYWRjYXN0ZXJJbmZvXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0QnJvYWRjYXN0ZXJJbmZvXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImJyb2FkY2FzdGVyU3RlYW1JRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJicm9hZGNhc3Rlcl9zdGVhbV9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxlYWd1ZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZV9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJUaWNrZXRcIixcblx0XHRcdFwidXJsU2VnbWVudFwiOiBcIklET1RBMlRpY2tldF81NzBcIixcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNldFN0ZWFtQWNjb3VudFB1cmNoYXNlZFwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlNldFN0ZWFtQWNjb3VudFB1cmNoYXNlZFwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJldmVudElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImV2ZW50aWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGVhbUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0ZWFtaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiU3RlYW1BY2NvdW50VmFsaWRGb3JFdmVudFwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlN0ZWFtQWNjb3VudFZhbGlkRm9yRXZlbnRcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZXZlbnRJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJldmVudGlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RlYW1JRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJzdGVhbWlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiRWNvbm9teVwiLFxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSUVjb25ET1RBMl81NzBcIixcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEV2ZW50U3RhdHNGb3JBY2NvdW50XCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0RXZlbnRTdGF0c0ZvckFjY291bnRcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZXZlbnRJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJldmVudGlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiYWNjb3VudElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImFjY291bnRpZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRHYW1lSXRlbXNcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRHYW1lSXRlbXNcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRIZXJvZXNcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRIZXJvZXNcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIml0ZW1pemVkT25seVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJpdGVtaXplZG9ubHlcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEl0ZW1JY29uUGF0aFwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEl0ZW1JY29uUGF0aFwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpY29uTmFtZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJpY29ubmFtZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImljb25UeXBlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImljb250eXBlXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRSYXJpdGllc1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFJhcml0aWVzXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0VG91cm5hbWVudFByaXplUG9vbFwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFRvdXJuYW1lbnRQcml6ZVBvb2xcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxlYWd1ZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZWlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFwaUhhbmRsZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnVybFNlZ21lbnQgPSAnaHR0cHM6Ly9hcGkuc3RlYW1wb3dlcmVkLmNvbSc7XG5cblx0XHR0aGlzLnNjaGVtYXMgPSBbXTtcblx0fVxuXG5cdGdldFJlcXVlc3RVcmwoKSB7XG5cdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcblx0fVxuXG5cdGdldEFwaSgpIHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVBcGkodGhpcyk7XG5cdH1cblxuXHRnZXRTY2hlbWFzKCkge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYXM7XG5cdH1cblxuXHRhZGRTY2hlbWEoc2NoZW1hSGFuZGxlcikge1xuXHRcdHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYUhhbmRsZXIpO1xuXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXG5cdH1cblxuXHRhZGRTY2hlbWFzKHNjaGVtYUhhbmRsZXJzKSB7XG5cdFx0Zm9yIChsZXQgc2NoZW1hSW5kZXggPSAwOyBzY2hlbWFJbmRleCA8IHNjaGVtYUhhbmRsZXJzLmxlbmd0aDsgc2NoZW1hSW5kZXgrKykge1xuXHRcdFx0dGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hSGFuZGxlcnNbc2NoZW1hSW5kZXhdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcblx0fVxufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcGkoYXBpSGFuZGxlcikge1xuXHRjb25zdCBhcGkgPSB7fTtcblx0Y29uc3QgYmFzZVVybCA9ICdodHRwczovL2FwaS5zdGVhbXBvd2VyZWQuY29tJztcblx0YXBpLmdldFVybFNlZ21lbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGJhc2VVcmw7XG5cdH1cblxuXHRmb3IgKGxldCBzY2hlbWFJbmRleCA9IDA7IHNjaGVtYUluZGV4IDwgYXBpSGFuZGxlci5zY2hlbWFzLmxlbmd0aDsgc2NoZW1hSW5kZXgrKykge1xuXHRcdGFwaVthcGlIYW5kbGVyLnNjaGVtYXNbc2NoZW1hSW5kZXhdLmdldE5hbWUoKV0gPVxuXHRcdFx0YXBpSGFuZGxlci5zY2hlbWFzW3NjaGVtYUluZGV4XS5nZW5lcmF0ZVNjaGVtYShiYXNlVXJsKTtcblx0fVxuXG5cdHJldHVybiBhcGk7XG59IiwidmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbnZhciBhcGlKc29uID0gcmVxdWlyZSgnLi8uLi9kYXRhL2FwaS5qc29uJyk7XG52YXIgQXBpSGFuZGxlciA9IHJlcXVpcmUoJy4vQXBpSGFuZGxlcicpO1xudmFyIFNjaGVtYUhhbmRsZXIgPSByZXF1aXJlKCcuL1NjaGVtYUhhbmRsZXInKTtcbnZhciBFbmRwb2ludEhhbmRsZXIgPSByZXF1aXJlKCcuL0VuZHBvaW50SGFuZGxlcicpO1xudmFyIFBhcmFtZXRlckhhbmRsZXIgPSByZXF1aXJlKCcuL1BhcmFtZXRlckhhbmRsZXInKTtcblxudmFyIHN0ZWFtV2ViQXBpVmVyc2lvbiA9IDE7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRGVtb25FZGdlIHtcblxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8vIHBsZWFzZSBmb3JnaXZlIG1lLiB0aGlzIHdpbGwgcHJvYmFibHkgYWxsIGJlIGhpZGRlbiBpbiBhIGpzb24gZmlsZSB0byBiZSBwYXJzZWQgZXZlbnR1YWxseS5cblx0XHR0aGlzLmFwaSA9IHRoaXMuZ2VuZXJhdGVBcGlTdHJ1Y3R1cmUoKTtcblx0XHR0aGlzLmRhZWRhbHVzRG9tYWluID0gJ2xvY2FsaG9zdCc7XG5cdFx0dGhpcy5kYWVkYWx1c1BvcnQgPSA3NTc1O1xuXHR9XG5cblx0Z2VuZXJhdGVBcGlTdHJ1Y3R1cmUoKSB7XG5cdFx0Y29uc3QgYXBpSGFuZGxlciA9IG5ldyBBcGlIYW5kbGVyKCk7XG5cblx0XHRjb25zdCBzY2hlbWFzID0gW107XG5cblx0XHQvLyBzY2hlbWEtbGV2ZWwgZ2VuZXJhdGlvblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IGFwaUpzb24uc2NoZW1hcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHNjaGVtYSA9IGFwaUpzb24uc2NoZW1hc1tpXTtcblxuXHRcdFx0Y29uc3Qgc2NoZW1hT2JqID0gbmV3IFNjaGVtYUhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS51cmxTZWdtZW50KTtcblxuXHRcdFx0Y29uc3QgZW5kcG9pbnRzID0gW107XG5cblx0XHRcdC8vIGVuZHBvaW50LWxldmVsIGdlbmVyYXRpb25cblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDw9IHNjaGVtYS5lbmRwb2ludHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0bGV0IGVuZHBvaW50ID0gc2NoZW1hLmVuZHBvaW50c1tqXTtcblxuXHRcdFx0XHRjb25zdCBlbmRwb2ludE9iaiA9XG4gICAgICAgICAgICAgICAgICAgIG5ldyBFbmRwb2ludEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludC51cmxTZWdtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZWFtV2ViQXBpVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludC5wYXJhbWV0ZXJSZXF1aXJlZCk7XG5cblx0XHRcdFx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG5cdFx0XHRcdC8vIHBhcmFtZXRlci1sZXZlbCBnZW5lcmF0aW9uXG5cdFx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDw9IGVuZHBvaW50LnBhcmFtZXRlcnMubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRsZXQgcGFyYW1ldGVyID0gZW5kcG9pbnQucGFyYW1ldGVyc1trXTtcblxuXHRcdFx0XHRcdGNvbnN0IHBhcmFtZXRlck9iaiA9IG5ldyBQYXJhbWV0ZXJIYW5kbGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIudXJsU2VnbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlci5yZXF1aXJlZCk7XG5cblx0XHRcdFx0XHRwYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyT2JqKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVuZHBvaW50T2JqLmFkZFBhcmFtZXRlcnMocGFyYW1ldGVycyk7XG5cdFx0XHRcdGVuZHBvaW50cy5wdXNoKGVuZHBvaW50T2JqKTtcblx0XHRcdH1cblxuXHRcdFx0c2NoZW1hT2JqLmFkZEVuZHBvaW50cyhlbmRwb2ludHMpO1xuXHRcdFx0c2NoZW1hcy5wdXNoKHNjaGVtYSk7XG5cdFx0fVxuXG5cdFx0YXBpSGFuZGxlci5hZGRTY2hlbWFzKHNjaGVtYXMpO1xuXG5cblx0XHRjb25zdCB0ZW1wID0gYXBpSGFuZGxlci5nZXRBcGkoKTtcblxuXHRcdHV0aWwuaW5zcGVjdCh0ZW1wKTtcblxuXHRcdHJldHVybiB0ZW1wO1xuXHR9XG5cblx0c2V0RGFlZGFsdXNVcmwoZG9tYWluLCBwb3J0KSB7XG5cdFx0dGhpcy5kYWVkYWx1c0RvbWFpbiA9IGRvbWFpbjtcblx0XHR0aGlzLmRhZWRhbHVzUG9ydCA9IHBvcnQ7XG5cdH1cbn07XG4iLCJ2YXIgVXRpbHMgPSByZXF1aXJlKCcuL1V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRW5kcG9pbnRIYW5kbGVyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgdXJsU2VnbWVudCwgdmVyc2lvbiwgbmVlZHNQYXJhbXMpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudXJsU2VnbWVudCA9IHVybFNlZ21lbnQ7XG5cdFx0dGhpcy52ZXJzaW9uID0gYHYke3ZlcnNpb259YDtcblx0XHR0aGlzLm5lZWRzUGFyYW1zID0gbmVlZHNQYXJhbXM7XG5cdFx0aWYgKHRoaXMubmVlZHNQYXJhbXMgPT09IHVuZGVmaW5lZCkgdGhpcy5uZWVkc1BhcmFtcyA9IHRydWU7IC8vIGRlZmF1bHQgdmFsdWVcblxuXHRcdHRoaXMucGFyYW1ldGVycyA9IFtdO1xuXHR9XG5cblx0Z2V0TmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cblx0Z2V0UGFyYW1ldGVycygpIHtcblx0XHRyZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuXHR9XG5cblx0Z2V0VXJsU2VnbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xuXHR9XG5cblx0Z2V0U3RlYW1XZWJBcGlWZXJzaW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnZlcnNpb247XG5cdH1cblxuXHRuZWVkc1BhcmFtZXRlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmVlZHNQYXJhbWV0ZXJzO1xuXHR9XG5cblx0YWRkUGFyYW1ldGVyKHBhcmFtZXRlckhhbmRsZXIpIHtcblx0XHR0aGlzLnBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXJIYW5kbGVyKTtcblxuXHRcdHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xuXHR9XG5cblx0YWRkUGFyYW1ldGVycyhwYXJhbWV0ZXJIYW5kbGVycykge1xuXHRcdGZvciAobGV0IHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbWV0ZXJIYW5kbGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcblx0XHRcdHRoaXMucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlckhhbmRsZXJzW3BhcmFtZXRlckluZGV4XSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXG5cdH1cblxuXHRnZW5lcmF0ZUVuZHBvaW50KHNlZ21lbnRzKSB7XG5cdFx0Y29uc3QgdXJsU2VnbWVudHMgPSBzZWdtZW50cy5zbGljZSgwKTsgLy8gY3JlYXRlIHNoYWxsb3cgY29weSBvZiBhcnJheVxuXHRcdHVybFNlZ21lbnRzLnB1c2godGhpcy51cmxTZWdtZW50KTtcblx0XHR1cmxTZWdtZW50cy5wdXNoKHRoaXMudmVyc2lvbik7XG5cblx0XHRjb25zdCBlbmRwb2ludCA9IHt9O1xuXHRcdGVuZHBvaW50LnZhbHVlcyA9IHt9O1xuXHRcdGVuZHBvaW50LnVybFNlZ21lbnRzID0gdXJsU2VnbWVudHM7XG5cdFx0ZW5kcG9pbnQuZ2V0VXJsU2VnbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdFx0fTtcblxuXHRcdGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7XG5cdFx0bGV0IHBhcmFtZXRlcjtcblx0XHRsZXQgZW5kcG9pbnRQYXJhbTtcblxuXHRcdGlmICh0aGlzLm5lZWRzUGFyYW1zKSB7IC8vIGdlbmVyYXRlIHRoZSBlbmRwb2ludCB3aXRoIHRoZSBwYXJhbWV0ZXJzIGJ1dCBubyBzZW5kUmVxdWVzdCBmdW5jdGlvblxuXHRcdFx0Zm9yIChwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgdGhpcy5wYXJhbWV0ZXJzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXgrKykge1xuXHRcdFx0XHRwYXJhbWV0ZXIgPSB0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdlbmVyYXRlUGFyYW1ldGVyKHVybFNlZ21lbnRzKTtcblx0XHRcdFx0ZW5kcG9pbnRbdGhpcy5wYXJhbWV0ZXJzW3BhcmFtZXRlckluZGV4XS5nZXROYW1lKCldID0gcGFyYW1ldGVyO1xuXHRcdFx0XHRlbmRwb2ludFBhcmFtID0gZW5kcG9pbnRbdGhpcy5wYXJhbWV0ZXJzW3BhcmFtZXRlckluZGV4XS5nZXROYW1lKCldO1xuXG5cdFx0XHRcdC8vIGltbWVkaWF0ZWx5IGludm9rZWQgZnVuY3Rpb24gdG8gc2F2ZSB0aGUgcHJvcGVyIHJlZmVyZW5jZXMgdG8gdGhlIHBhcmFtZXRlciBmdW5jdGlvblxuXHRcdFx0XHQoZnVuY3Rpb24ocGFyYW0pIHtcblx0XHRcdFx0XHRlbmRwb2ludFtwYXJhbS5uYW1lXSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXNbcGFyYW0udXJsU2VnbWVudF0gPSB2YWx1ZTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGVuZHBvaW50LnNlbmRSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZXF1ZXN0VXJsID0gVXRpbHMuZ2VuZXJhdGVSZXF1ZXN0VXJsKHVybFNlZ21lbnRzLCBlbmRwb2ludC52YWx1ZXMpO1xuXG5cdFx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IFV0aWxzLnNlbmRYSFJSZXF1ZXN0KHJlcXVlc3RVcmwpO1xuXG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXMgPSB7fTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fShwYXJhbWV0ZXIpKTtcblx0XHRcdH1cblxuXHRcdFx0ZW5kcG9pbnQucmVxdWVzdGFibGUgPSBmYWxzZTtcblx0XHR9IGVsc2UgeyAvLyBnZW5lcmF0ZSB0aGUgZW5kcG9pbnQgd2l0aCB0aGUgcGFyYW1ldGVycyBidXQgYWxzbyB3aXRoIGEgc2VuZFJlcXVlc3QgZnVuY3Rpb25cblx0XHRcdGZvciAocGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IHRoaXMucGFyYW1ldGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcblx0XHRcdFx0cGFyYW1ldGVyID0gdGhpcy5wYXJhbWV0ZXJzW3BhcmFtZXRlckluZGV4XS5nZW5lcmF0ZVBhcmFtZXRlcih1cmxTZWdtZW50cyk7XG5cdFx0XHRcdGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXSA9IHBhcmFtZXRlcjtcblx0XHRcdFx0ZW5kcG9pbnRQYXJhbSA9IGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXTtcblxuXHRcdFx0XHQvLyBpbW1lZGlhdGVseSBpbnZva2VkIGZ1bmN0aW9uIHRvIHNhdmUgdGhlIHByb3BlciByZWZlcmVuY2VzIHRvIHRoZSBwYXJhbWV0ZXIgZnVuY3Rpb25cblx0XHRcdFx0KGZ1bmN0aW9uKHBhcmFtKSB7XG5cdFx0XHRcdFx0ZW5kcG9pbnRbcGFyYW0ubmFtZV0gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdFx0ZW5kcG9pbnQudmFsdWVzW3BhcmFtLnVybFNlZ21lbnRdID0gdmFsdWU7XG5cblx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRlbmRwb2ludC5zZW5kUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWVzdFVybCA9IFV0aWxzLmdlbmVyYXRlUmVxdWVzdFVybCh1cmxTZWdtZW50cywgZW5kcG9pbnQudmFsdWVzKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IFV0aWxzLnNlbmRYSFJSZXF1ZXN0KHJlcXVlc3RVcmwpO1xuXG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXMgPSB7fTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fShwYXJhbWV0ZXIpKTtcblx0XHRcdH1cblxuXHRcdFx0ZW5kcG9pbnQucmVxdWVzdGFibGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmRwb2ludDtcblx0fVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFBhcmFtZXRlckhhbmRsZXIge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCB1cmxTZWdtZW50LCByZXF1aXJlZCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy51cmxTZWdtZW50ID0gdXJsU2VnbWVudDtcblx0XHR0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG5cdH1cblxuXHRnZXROYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblxuXHRnZXRVcmxTZWdtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdH1cblxuXHRpc1JlcXVpcmVkKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcXVpcmVkO1xuXHR9XG5cblx0Z2VuZXJhdGVQYXJhbWV0ZXIodXJsU2VnbWVudHMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxuXHRcdFx0dXJsU2VnbWVudDogdGhpcy51cmxTZWdtZW50LFxuXHRcdFx0Z2V0VXJsU2VnbWVudHMoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNjaGVtYUhhbmRsZXIge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCB1cmxTZWdtZW50KSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnVybFNlZ21lbnQgPSB1cmxTZWdtZW50O1xuXG5cdFx0dGhpcy5lbmRwb2ludHMgPSBbXTtcblx0fVxuXG5cdGdldE5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdGdldEVuZHBvaW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy5lbmRwb2ludHM7XG5cdH1cblxuXHRnZXRVcmxTZWdtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdH1cblxuXHRhZGRFbmRwb2ludChlbmRwb2ludEhhbmRsZXIpIHtcblx0XHR0aGlzLmVuZHBvaW50cy5wdXNoKGVuZHBvaW50SGFuZGxlcik7XG5cblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcblx0fVxuXG5cdGFkZEVuZHBvaW50cyhlbmRwb2ludEhhbmRsZXJzKSB7XG5cdFx0Zm9yIChsZXQgZW5kcG9pbnRJbmRleCA9IDA7IGVuZHBvaW50SW5kZXggPCBlbmRwb2ludEhhbmRsZXJzLmxlbmd0aDsgZW5kcG9pbnRJbmRleCsrKSB7XG5cdFx0XHR0aGlzLmVuZHBvaW50cy5wdXNoKGVuZHBvaW50SGFuZGxlcnNbZW5kcG9pbnRJbmRleF0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xuXHR9XG5cblx0Z2VuZXJhdGVTY2hlbWEoYmFzZVVybCkge1xuXHRcdGNvbnN0IHNjaGVtYSA9IHt9O1xuXHRcdHNjaGVtYS5nZXRVcmxTZWdtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcblx0XHR9XG5cblx0XHRjb25zdCB1cmxTZWdtZW50cyA9IFtiYXNlVXJsLCB0aGlzLnVybFNlZ21lbnRdO1xuXG5cdFx0Zm9yIChsZXQgZW5kcG9pbnRJbmRleCA9IDA7IGVuZHBvaW50SW5kZXggPCB0aGlzLmVuZHBvaW50cy5sZW5ndGg7IGVuZHBvaW50SW5kZXgrKykge1xuXHRcdFx0c2NoZW1hW3RoaXMuZW5kcG9pbnRzW2VuZHBvaW50SW5kZXhdLmdldE5hbWUoKV0gPVxuXHRcdFx0XHR0aGlzLmVuZHBvaW50c1tlbmRwb2ludEluZGV4XS5nZW5lcmF0ZUVuZHBvaW50KHVybFNlZ21lbnRzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2NoZW1hO1xuXHR9XG59OyIsInZhciBhcGlLZXkgPSAnJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGxvZyhtZXNzYWdlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihgQ1JJVDogJHttZXNzYWdlfWApO1xuXHR9LFxuXG5cdGNsb25lKG9iaikge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHR9LFxuXG5cdHNldEFwaUtleShrZXkpIHtcblx0XHRhcGlLZXkgPSBrZXk7XG5cdH0sXG5cblx0Z2V0QXBpS2V5KCkge1xuXHRcdGlmIChhcGlLZXkgIT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gYXBpS2V5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvZygnQVBJIGtleSBpcyBub3Qgc2V0Jyk7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH0sXG5cblx0Ly8gY29uY2F0ZW5hdGVzIGFsbCB0aGUgdXJsU2VnbWVudHMgaW50byBvbmUgaHR0cCB1cmxcblx0Ly8gY291bGQgcHJvYmFibHkgYmUgZG9uZSBhIGJpdCBtb3JlIGNsZWFubHksIGJ1dCB0aGlzIHdpbGwgd29yayBmb3Igbm93XG5cdGdlbmVyYXRlRW5kcG9pbnRSZXF1ZXN0VXJsKHVybFNlZ21lbnRzKSB7XG5cdFx0Y29uc3Qga2V5ID0gdGhpcy5nZXRBcGlLZXkoKTtcblxuXHRcdC8vIDAgPSBiYXNlVXJsXG5cdFx0Ly8gMSA9IHNjaGVtYVVybFxuXHRcdC8vIDIgPSBlbmRwb2ludFVybFxuXHRcdC8vIDMgPSBhcGlWZXJzaW9uXG5cdFx0Y29uc3QgcmVxdWVzdFVybCA9XG5cdFx0XHRgJHt1cmxTZWdtZW50c1swXX0vJHt1cmxTZWdtZW50c1sxXX0vJHt1cmxTZWdtZW50c1syXX0vJHt1cmxTZWdtZW50c1szXX0/a2V5PSR7a2V5fWBcblx0XHRcdC8vIHZhciByZXF1ZXN0VXJsID0gdXJsU2VnbWVudHNbMF07IC8vIGJhc2VVcmxcblx0XHRcdC8vIHJlcXVlc3RVcmwgKz0gJy8nICsgdXJsU2VnbWVudHNbMV07IC8vIHNjaGVtYVVybFxuXHRcdFx0Ly8gcmVxdWVzdFVybCArPSAnLycgKyB1cmxTZWdtZW50c1syXTsgLy8gZW5kcG9pbnRVcmxcblx0XHRcdC8vIHJlcXVlc3RVcmwgKz0gJy8nICsgdXJsU2VnbWVudHNbM107IC8vIGFwaVZlcnNpb25cblx0XHRcdC8vIHJlcXVlc3RVcmwgKz0gJz9rZXk9JyArIGtleTsgLy8gYWRkIGFwaUtleVxuXG5cdFx0cmV0dXJuIHJlcXVlc3RVcmw7XG5cdH0sXG5cblx0Ly8gY29uY2F0ZW5hdGVzIGFsbCB0aGUgdXJsU2VnbWVudHMgaW50byBvbmUgaHR0cCB1cmwgd2l0aCBxdWVyeSBwYXJhbWV0ZXJzXG5cdGdlbmVyYXRlUmVxdWVzdFVybCh1cmxTZWdtZW50cywgcGFyYW1ldGVycykge1xuXHRcdHZhciByZXF1ZXN0VXJsID0gdGhpcy5nZW5lcmF0ZUVuZHBvaW50UmVxdWVzdFVybCh1cmxTZWdtZW50cyk7XG5cblx0XHR2YXIgcGFyYW1ldGVyTmFtZXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKTtcblxuXHRcdC8vIGFwcGVuZCBwYXJhbWV0ZXJzIGFzIHN1Y2g6ICY8cGFyYW1fbmFtZT49PHBhcmFtX3ZhbHVlPlxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVyTmFtZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlcXVlc3RVcmwgKz0gYCYke3BhcmFtZXRlck5hbWVzW2ldfT0ke3BhcmFtZXRlcnNbcGFyYW1ldGVyTmFtZXNbaV1dfWA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlcXVlc3RVcmw7XG5cdH0sXG5cblx0Ly8gc2VuZHMgYSB2YW5pbGxhIGpzIHhociByZXF1ZXN0LCBidXQgd3JhcHBlZCBpbiBhbiBFUzYgcHJvbWlzZVxuXHQvLyByZXR1cm4gdGhlIHByb21pc2Ugb2JqZWN0IGZvciB0aGUgdXNlciB0byByZXNvbHZlIHdoZW4gbmVlZGVkXG5cdHNlbmRYSFJSZXF1ZXN0KHVybCkge1xuXHRcdGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0XHRcdHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuXHRcdFx0eGhyLnNlbmQoKTtcblxuXHRcdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDw9IDMwMCkge1xuXHRcdFx0XHRcdHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVqZWN0KHRoaXMuc3RhdHVzVGV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0eGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVqZWN0KHRoaXMuc3RhdHVzVGV4dCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufTsiLCJjb25zdCBEZU9iaiA9IHdpbmRvdy5EZW1vbkVkZ2UgfHwge307XG5cbmNvbnN0IERlbW9uRWRnZSA9IHJlcXVpcmUoJy4vRGVtb25FZGdlLmpzJyk7XG5cbkRlT2JqLmFwaSA9IG5ldyBEZW1vbkVkZ2UoKTtcblxud2luZG93LkRlbW9uRWRnZSA9IERlT2JqOyIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuIl19
