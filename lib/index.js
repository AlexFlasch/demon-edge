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
			"name": "Match",
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
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
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
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],5:[function(require,module,exports){
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

},{"./support/isBuffer":4,"_process":2,"inherits":3}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function ApiHandler() {
		_classCallCheck(this, ApiHandler);

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

	for (var schemaIndex = 0; schemaIndex < apiHandler.schemas.length; schemaIndex++) {
		api[apiHandler.schemas[schemaIndex].getName()] = apiHandler.schemas[schemaIndex].generateSchema();
	}

	return api;
}

},{"./Utils":11}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');

var Utils = require('./Utils');
var apiJson = require('./../data/api.json');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');

var steamWebApiVersion = 1;

module.exports = function () {
	function DemonEdge() {
		_classCallCheck(this, DemonEdge);

		// finally spent ages moving that mess of a json object to its own json file
		this.api = this.generateApiStructure();
	}

	_createClass(DemonEdge, [{
		key: 'generateApiStructure',
		value: function generateApiStructure() {
			var apiHandler = new ApiHandler();

			var schemas = [];

			// schema-level generation
			for (var i = 0; i < apiJson.schemas.length; i++) {
				var schema = apiJson.schemas[i];

				var schemaObj = new SchemaHandler(schema.name, schema.urlSegment);

				var endpoints = [];

				// endpoint-level generation
				for (var j = 0; j < schema.endpoints.length; j++) {
					var endpoint = schema.endpoints[j];

					var endpointObj = new EndpointHandler(endpoint.name, endpoint.urlSegment, steamWebApiVersion, endpoint.parameterRequired);

					var parameters = [];

					// parameter-level generation
					for (var k = 0; k < endpoint.parameters.length; k++) {
						var parameter = endpoint.parameters[k];

						var parameterObj = new ParameterHandler(parameter.name, parameter.urlSegment, parameter.required);

						parameters.push(parameterObj);
					}

					endpointObj.addParameters(parameters);
					endpoints.push(endpointObj);
				}

				schemaObj.addEndpoints(endpoints);
				schemas.push(schemaObj);
			}

			apiHandler.addSchemas(schemas);

			var temp = apiHandler.getApi();

			util.inspect(temp);

			return temp;
		}
	}, {
		key: 'setDaedalusUrl',
		value: function setDaedalusUrl(domain, port) {
			Utils.daedalusUrl = domain;
			Utils.daedalusPort = port;
		}
	}]);

	return DemonEdge;
}();

},{"./../data/api.json":1,"./ApiHandler":6,"./EndpointHandler":8,"./ParameterHandler":9,"./SchemaHandler":10,"./Utils":11,"util":5}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function EndpointHandler(name, urlSegment, version) {
		var needsParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

		_classCallCheck(this, EndpointHandler);

		this.name = name;
		// this is different from Crystalys in order to talk to Daedalus properly
		this.urlSegment = name;
		this.needsParams = needsParams;

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
					// using an IIFE is pretty ugly, but the best way I could come up with to dynamically
					// generate parameter functions for each endpoint as needed...
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

},{"./Utils":11}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function ParameterHandler(name, urlSegment, required) {
		_classCallCheck(this, ParameterHandler);

		this.name = name;
		this.urlSegment = name;
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

},{}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
	function SchemaHandler(name, urlSegment) {
		_classCallCheck(this, SchemaHandler);

		this.name = name;
		// different from Crystalys to talk to Daedalus properly
		this.urlSegment = name;

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
		value: function generateSchema() {
			var schema = {};
			schema.getUrlSegments = function () {
				return this.urlSegment;
			};

			var urlSegments = [this.urlSegment];

			for (var endpointIndex = 0; endpointIndex < this.endpoints.length; endpointIndex++) {
				schema[this.endpoints[endpointIndex].getName()] = this.endpoints[endpointIndex].generateEndpoint(urlSegments);
			}

			return schema;
		}
	}]);

	return SchemaHandler;
}();

},{}],11:[function(require,module,exports){
'use strict';

var loadJSONP = function () {
	var unique = 0;
	return function (url, callback, context) {
		// INIT
		var name = '_jsonp_' + unique++;
		if (url.match(/\?/)) url += '&callback="' + name;else url += '?callback="' + name;

		// Create script
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;

		// Setup handler
		window[name] = function (data) {
			callback.call(context || window, data);
			document.getElementsByTagName('head')[0].removeChild(script);
			script = null;
			delete window[name];
		};

		// Load JSON
		document.getElementsByTagName('head')[0].appendChild(script);
	};
}();

module.exports = {
	daedalusUrl: 'localhost',
	daedalusPort: 80,
	log: function log(message) {
		console.error('CRIT: ' + message);
	},
	clone: function clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	},


	// concatenates all the urlSegments into one http url
	// could probably be done a bit more cleanly, but this will work for now
	generateEndpointRequestUrl: function generateEndpointRequestUrl(urlSegments) {
		// 0 = schemaUrl
		// 1 = endpointUrl
		var requestUrl = urlSegments[0] + '/' + urlSegments[1];

		return requestUrl;
	},


	// concatenates all the urlSegments into one http url with query parameters
	generateRequestUrl: function generateRequestUrl(urlSegments, parameters) {
		var requestUrl = this.generateEndpointRequestUrl(urlSegments);

		var parameterNames = Object.keys(parameters);

		requestUrl += '?';

		// append parameters as such: &<param_name>=<param_value>
		for (var i = 0; i < parameterNames.length; i++) {
			if (i !== 0) {
				requestUrl += '&';
			}
			requestUrl += parameterNames[i] + '=' + parameters[parameterNames[i]];
		}

		return requestUrl;
	},


	// sends a vanilla js xhr request, but wrapped in an ES6 promise
	// in order to allow for contacting a separate api server, CORS has to be enabled
	// return the promise object for the user to resolve when needed
	sendXHRRequest: function sendXHRRequest(url, params) {
		var promise = new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();

			console.log('daedalus.flascher.net/' + url);

			xhr.open('POST', 'http://daedalus.flascher.net/' + url, true);

			xhr.onload = function onload() {
				if (this.status >= 200 && this.status <= 300) {
					resolve(this.response);
				} else {
					reject(this.statusText);
				}
			};

			xhr.onerror = function onerror() {
				reject(this.statusText);
			};

			xhr.send(params);
		});

		return promise;
	}
};

},{}],12:[function(require,module,exports){
'use strict';

var DemonEdge = require('./DemonEdge.js');

if (window.DemonEdge !== undefined) {
	throw new Error('DemonEdge has been instantiated more than once!');
}

window.DemonEdge = new DemonEdge();

},{"./DemonEdge.js":7}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkYXRhL2FwaS5qc29uIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dGlsL25vZGVfbW9kdWxlcy9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwic3JjL0FwaUhhbmRsZXIuanMiLCJzcmMvRGVtb25FZGdlLmpzIiwic3JjL0VuZHBvaW50SGFuZGxlci5qcyIsInNyYy9QYXJhbWV0ZXJIYW5kbGVyLmpzIiwic3JjL1NjaGVtYUhhbmRsZXIuanMiLCJzcmMvVXRpbHMuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFLLE1BQUwsSUFBZSxHQUFmLElBQXNCLEtBQUssTUFBTCxJQUFlLEdBQXpDLEVBQThDO0FBQzdDLGFBQVEsS0FBSyxRQUFiO0FBQ0EsS0FGRCxNQUVPO0FBQ04sWUFBTyxLQUFLLFVBQVo7QUFDQTtBQUNELElBTkQ7O0FBUUEsT0FBSSxPQUFKLEdBQWMsU0FBUyxPQUFULEdBQW1CO0FBQ2hDLFdBQU8sS0FBSyxVQUFaO0FBQ0EsSUFGRDs7QUFJQSxPQUFJLElBQUosQ0FBUyxNQUFUO0FBQ0EsR0FwQmUsQ0FBaEI7O0FBc0JBLFNBQU8sT0FBUDtBQUNBO0FBcEVlLENBQWpCOzs7OztBQzFCQSxJQUFNLFlBQVksUUFBUSxnQkFBUixDQUFsQjs7QUFFQSxJQUFHLE9BQU8sU0FBUCxLQUFxQixTQUF4QixFQUFtQztBQUNsQyxPQUFNLElBQUksS0FBSixDQUFVLGlEQUFWLENBQU47QUFDQTs7QUFFRCxPQUFPLFNBQVAsR0FBbUIsSUFBSSxTQUFKLEVBQW5CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcblx0XCJhcGlWZXJzaW9uXCI6IDEsXG5cdFwic2NoZW1hc1wiOiBbXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiRmFudGFzeVwiLFxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSURPVEEyRmFudGFzeV81NzBcIixcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEZhbnRhc3lQbGF5ZXJTdGF0c1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEZhbnRhc3lQbGF5ZXJTdGF0c1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJmYW50YXN5TGVhZ3VlSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiRmFudGFzeUxlYWd1ZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnRUaW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlN0YXJ0VGltZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJlbmRUaW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkVuZFRpbWVcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaGlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInNlcmllc0lEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlNlcmllc0lEXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInBsYXllckFjY291bnRJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJQbGF5ZXJBY2NvdW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFBsYXllck9mZmljaWFsSW5mb1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFBsYXllck9mZmljaWFsSW5mb1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiYWNjb3VudGlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFByb1BsYXllckxpc3RcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRQcm9QbGF5ZXJMaXN0XCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW11cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiTWF0Y2hcIixcblx0XHRcdFwidXJsU2VnbWVudFwiOiBcIklET1RBMk1hdGNoXzU3MFwiLFxuXHRcdFx0XCJlbmRwb2ludHNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TGVhZ3VlTGlzdGluZ1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldExlYWd1ZUxpc3RpbmdcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TGl2ZUxlYWd1ZUdhbWVzXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TGl2ZUxlYWd1ZUdhbWVzXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaF9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TWF0Y2hEZXRhaWxzXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TWF0Y2hEZXRhaWxzXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TWF0Y2hIaXN0b3J5XCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TWF0Y2hIaXN0b3J5XCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJoZXJvSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiaGVyb19pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJnYW1lTW9kZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJnYW1lX21vZGVcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic2tpbGxcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic2tpbGxcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWluUGxheWVyc1wiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtaW5fcGxheWVyc1wiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiYWNjb3VudF9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnRBdE1hdGNoSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RhcnRfYXRfbWF0Y2hfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hlc1JlcXVlc3RlZFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaGVzX3JlcXVlc3RlZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJ0b3VybmFtZW50R2FtZXNPbmx5XCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInRvdXJuYW1lbnRfZ2FtZXNfb25seVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TWF0Y2hIaXN0b3J5QnlTZXF1ZW5jZU51bWJlclwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldE1hdGNoSGlzdG9yeUJ5U2VxdWVuY2VOdW1cIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXJ0QXRNYXRjaFNlcXVlbmNlTnVtYmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0YXJ0X2F0X21hdGNoX3NlcV9udW1cIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hlc1JlcXVlc3RlZFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaGVzX3JlcXVlc3RlZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IFwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFNjaGVkdWxlZExlYWd1ZUdhbWVzXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0U2NoZWR1bGVkTGVhZ3VlR2FtZXNcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXJ0RGF0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJkYXRlX21pblwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJlbmREYXRlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImRhdGVfbWF4XCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRUZWFtSW5mb0J5VGVhbUlEXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0VGVhbUluZm9CeVRlYW1JRFwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnRBdFRlYW1JRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJzdGFydF9hdF90ZWFtX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInRlYW1zUmVxdWVzdGVkXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInRlYW1zX3JlcXVlc3RlZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0VG9wTGl2ZUdhbWVcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRUb3BMaXZlR2FtZVwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJwYXJ0bmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInBhcnRuZXJcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0VG91cm5hbWVudFBsYXllclN0YXRzXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0VG91cm5hbWVudFBsYXllclN0YXRzXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImFjY291bnRJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJhY2NvdW50X2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGVhZ3VlX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImhlcm9JRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJoZXJvX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInRpbWVGcmFtZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJ0aW1lX2ZyYW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwicGhhc2VJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJwaGFzZV9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJTdHJlYW1TeXN0ZW1cIixcblx0XHRcdFwidXJsU2VnbWVudFwiOiBcIklET1RBMlN0cmVhbVN5c3RlbV81NzBcIixcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEJyb2FkY2FzdGVySW5mb1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEJyb2FkY2FzdGVySW5mb1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJicm9hZGNhc3RlclN0ZWFtSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiYnJvYWRjYXN0ZXJfc3RlYW1faWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiVGlja2V0XCIsXG5cdFx0XHRcInVybFNlZ21lbnRcIjogXCJJRE9UQTJUaWNrZXRfNTcwXCIsXG5cdFx0XHRcImVuZHBvaW50c1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJTZXRTdGVhbUFjY291bnRQdXJjaGFzZWRcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJTZXRTdGVhbUFjY291bnRQdXJjaGFzZWRcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZXZlbnRJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJldmVudGlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RlYW1JRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJzdGVhbWlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlN0ZWFtQWNjb3VudFZhbGlkRm9yRXZlbnRcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJTdGVhbUFjY291bnRWYWxpZEZvckV2ZW50XCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImV2ZW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZXZlbnRpZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0ZWFtSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RlYW1pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcIkVjb25vbXlcIixcblx0XHRcdFwidXJsU2VnbWVudFwiOiBcIklFY29uRE9UQTJfNTcwXCIsXG5cdFx0XHRcImVuZHBvaW50c1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRFdmVudFN0YXRzRm9yQWNjb3VudFwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEV2ZW50U3RhdHNGb3JBY2NvdW50XCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImV2ZW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZXZlbnRpZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImFjY291bnRJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJhY2NvdW50aWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0R2FtZUl0ZW1zXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0R2FtZUl0ZW1zXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0SGVyb2VzXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0SGVyb2VzXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsYW5ndWFnZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpdGVtaXplZE9ubHlcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiaXRlbWl6ZWRvbmx5XCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRJdGVtSWNvblBhdGhcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRJdGVtSWNvblBhdGhcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaWNvbk5hbWVcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiaWNvbm5hbWVcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpY29uVHlwZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJpY29udHlwZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0UmFyaXRpZXNcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRSYXJpdGllc1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGFuZ3VhZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGFuZ3VhZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFRvdXJuYW1lbnRQcml6ZVBvb2xcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRUb3VybmFtZW50UHJpemVQb29sXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVpZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHRdXG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiaWYgKHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gIC8vIGltcGxlbWVudGF0aW9uIGZyb20gc3RhbmRhcmQgbm9kZS5qcyAndXRpbCcgbW9kdWxlXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IGN0b3IsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG59IGVsc2Uge1xuICAvLyBvbGQgc2Nob29sIHNoaW0gZm9yIG9sZCBicm93c2Vyc1xuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgdmFyIFRlbXBDdG9yID0gZnVuY3Rpb24gKCkge31cbiAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgY3Rvci5wcm90b3R5cGUgPSBuZXcgVGVtcEN0b3IoKVxuICAgIGN0b3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gY3RvclxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuIiwidmFyIFV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFwaUhhbmRsZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnNjaGVtYXMgPSBbXTtcblx0fVxuXG5cdGdldFJlcXVlc3RVcmwoKSB7XG5cdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcblx0fVxuXG5cdGdldEFwaSgpIHtcblx0XHRyZXR1cm4gZ2VuZXJhdGVBcGkodGhpcyk7XG5cdH1cblxuXHRnZXRTY2hlbWFzKCkge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYXM7XG5cdH1cblxuXHRhZGRTY2hlbWEoc2NoZW1hSGFuZGxlcikge1xuXHRcdHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYUhhbmRsZXIpO1xuXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXG5cdH1cblxuXHRhZGRTY2hlbWFzKHNjaGVtYUhhbmRsZXJzKSB7XG5cdFx0Zm9yIChsZXQgc2NoZW1hSW5kZXggPSAwOyBzY2hlbWFJbmRleCA8IHNjaGVtYUhhbmRsZXJzLmxlbmd0aDsgc2NoZW1hSW5kZXgrKykge1xuXHRcdFx0dGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hSGFuZGxlcnNbc2NoZW1hSW5kZXhdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcblx0fVxufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVBcGkoYXBpSGFuZGxlcikge1xuXHRjb25zdCBhcGkgPSB7fTtcblxuXHRmb3IgKGxldCBzY2hlbWFJbmRleCA9IDA7IHNjaGVtYUluZGV4IDwgYXBpSGFuZGxlci5zY2hlbWFzLmxlbmd0aDsgc2NoZW1hSW5kZXgrKykge1xuXHRcdGFwaVthcGlIYW5kbGVyLnNjaGVtYXNbc2NoZW1hSW5kZXhdLmdldE5hbWUoKV0gPVxuXHRcdFx0YXBpSGFuZGxlci5zY2hlbWFzW3NjaGVtYUluZGV4XS5nZW5lcmF0ZVNjaGVtYSgpO1xuXHR9XG5cblx0cmV0dXJuIGFwaTtcbn0iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpXG52YXIgYXBpSnNvbiA9IHJlcXVpcmUoJy4vLi4vZGF0YS9hcGkuanNvbicpO1xudmFyIEFwaUhhbmRsZXIgPSByZXF1aXJlKCcuL0FwaUhhbmRsZXInKTtcbnZhciBTY2hlbWFIYW5kbGVyID0gcmVxdWlyZSgnLi9TY2hlbWFIYW5kbGVyJyk7XG52YXIgRW5kcG9pbnRIYW5kbGVyID0gcmVxdWlyZSgnLi9FbmRwb2ludEhhbmRsZXInKTtcbnZhciBQYXJhbWV0ZXJIYW5kbGVyID0gcmVxdWlyZSgnLi9QYXJhbWV0ZXJIYW5kbGVyJyk7XG5cbnZhciBzdGVhbVdlYkFwaVZlcnNpb24gPSAxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIERlbW9uRWRnZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC8vIGZpbmFsbHkgc3BlbnQgYWdlcyBtb3ZpbmcgdGhhdCBtZXNzIG9mIGEganNvbiBvYmplY3QgdG8gaXRzIG93biBqc29uIGZpbGVcblx0XHR0aGlzLmFwaSA9IHRoaXMuZ2VuZXJhdGVBcGlTdHJ1Y3R1cmUoKTtcblx0fVxuXG5cdGdlbmVyYXRlQXBpU3RydWN0dXJlKCkge1xuXHRcdGNvbnN0IGFwaUhhbmRsZXIgPSBuZXcgQXBpSGFuZGxlcigpO1xuXG5cdFx0Y29uc3Qgc2NoZW1hcyA9IFtdO1xuXG5cdFx0Ly8gc2NoZW1hLWxldmVsIGdlbmVyYXRpb25cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFwaUpzb24uc2NoZW1hcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3Qgc2NoZW1hID0gYXBpSnNvbi5zY2hlbWFzW2ldO1xuXG5cdFx0XHRjb25zdCBzY2hlbWFPYmogPSBuZXcgU2NoZW1hSGFuZGxlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLnVybFNlZ21lbnQpO1xuXG5cdFx0XHRjb25zdCBlbmRwb2ludHMgPSBbXTtcblxuXHRcdFx0Ly8gZW5kcG9pbnQtbGV2ZWwgZ2VuZXJhdGlvblxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzY2hlbWEuZW5kcG9pbnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IGVuZHBvaW50ID0gc2NoZW1hLmVuZHBvaW50c1tqXTtcblxuXHRcdFx0XHRjb25zdCBlbmRwb2ludE9iaiA9XG4gICAgICAgICAgICAgICAgICAgIG5ldyBFbmRwb2ludEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludC51cmxTZWdtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZWFtV2ViQXBpVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludC5wYXJhbWV0ZXJSZXF1aXJlZCk7XG5cblx0XHRcdFx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG5cdFx0XHRcdC8vIHBhcmFtZXRlci1sZXZlbCBnZW5lcmF0aW9uXG5cdFx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDwgZW5kcG9pbnQucGFyYW1ldGVycy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdGNvbnN0IHBhcmFtZXRlciA9IGVuZHBvaW50LnBhcmFtZXRlcnNba107XG5cblx0XHRcdFx0XHRjb25zdCBwYXJhbWV0ZXJPYmogPSBuZXcgUGFyYW1ldGVySGFuZGxlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlci5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyLnVybFNlZ21lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIucmVxdWlyZWQpO1xuXG5cdFx0XHRcdFx0cGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlck9iaik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbmRwb2ludE9iai5hZGRQYXJhbWV0ZXJzKHBhcmFtZXRlcnMpO1xuXHRcdFx0XHRlbmRwb2ludHMucHVzaChlbmRwb2ludE9iaik7XG5cdFx0XHR9XG5cblx0XHRcdHNjaGVtYU9iai5hZGRFbmRwb2ludHMoZW5kcG9pbnRzKTtcblx0XHRcdHNjaGVtYXMucHVzaChzY2hlbWFPYmopO1xuXHRcdH1cblxuXHRcdGFwaUhhbmRsZXIuYWRkU2NoZW1hcyhzY2hlbWFzKTtcblxuXG5cdFx0Y29uc3QgdGVtcCA9IGFwaUhhbmRsZXIuZ2V0QXBpKCk7XG5cblx0XHR1dGlsLmluc3BlY3QodGVtcCk7XG5cblx0XHRyZXR1cm4gdGVtcDtcblx0fVxuXG5cdHNldERhZWRhbHVzVXJsKGRvbWFpbiwgcG9ydCkge1xuXHRcdFV0aWxzLmRhZWRhbHVzVXJsID0gZG9tYWluO1xuXHRcdFV0aWxzLmRhZWRhbHVzUG9ydCA9IHBvcnQ7XG5cdH1cbn07XG4iLCJ2YXIgVXRpbHMgPSByZXF1aXJlKCcuL1V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRW5kcG9pbnRIYW5kbGVyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgdXJsU2VnbWVudCwgdmVyc2lvbiwgbmVlZHNQYXJhbXMgPSB0cnVlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHQvLyB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIENyeXN0YWx5cyBpbiBvcmRlciB0byB0YWxrIHRvIERhZWRhbHVzIHByb3Blcmx5XG5cdFx0dGhpcy51cmxTZWdtZW50ID0gbmFtZTtcblx0XHR0aGlzLm5lZWRzUGFyYW1zID0gbmVlZHNQYXJhbXM7XG5cblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBbXTtcblx0fVxuXG5cdGdldE5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdGdldFBhcmFtZXRlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMucGFyYW1ldGVycztcblx0fVxuXG5cdGdldFVybFNlZ21lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcblx0fVxuXG5cdGdldFN0ZWFtV2ViQXBpVmVyc2lvbigpIHtcblx0XHRyZXR1cm4gdGhpcy52ZXJzaW9uO1xuXHR9XG5cblx0bmVlZHNQYXJhbWV0ZXJzKCkge1xuXHRcdHJldHVybiB0aGlzLm5lZWRzUGFyYW1ldGVycztcblx0fVxuXG5cdGFkZFBhcmFtZXRlcihwYXJhbWV0ZXJIYW5kbGVyKSB7XG5cdFx0dGhpcy5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVySGFuZGxlcik7XG5cblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcblx0fVxuXG5cdGFkZFBhcmFtZXRlcnMocGFyYW1ldGVySGFuZGxlcnMpIHtcblx0XHRmb3IgKGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW1ldGVySGFuZGxlcnMubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCsrKSB7XG5cdFx0XHR0aGlzLnBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXJIYW5kbGVyc1twYXJhbWV0ZXJJbmRleF0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xuXHR9XG5cblx0Z2VuZXJhdGVFbmRwb2ludChzZWdtZW50cykge1xuXHRcdGNvbnN0IHVybFNlZ21lbnRzID0gc2VnbWVudHMuc2xpY2UoMCk7IC8vIGNyZWF0ZSBzaGFsbG93IGNvcHkgb2YgYXJyYXlcblx0XHR1cmxTZWdtZW50cy5wdXNoKHRoaXMudXJsU2VnbWVudCk7XG5cdFx0dXJsU2VnbWVudHMucHVzaCh0aGlzLnZlcnNpb24pO1xuXG5cdFx0Y29uc3QgZW5kcG9pbnQgPSB7fTtcblx0XHRlbmRwb2ludC52YWx1ZXMgPSB7fTtcblx0XHRlbmRwb2ludC51cmxTZWdtZW50cyA9IHVybFNlZ21lbnRzO1xuXHRcdGVuZHBvaW50LmdldFVybFNlZ21lbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xuXHRcdH07XG5cblx0XHRsZXQgcGFyYW1ldGVySW5kZXggPSAwO1xuXHRcdGxldCBwYXJhbWV0ZXI7XG5cdFx0bGV0IGVuZHBvaW50UGFyYW07XG5cblx0XHRpZiAodGhpcy5uZWVkc1BhcmFtcykgeyAvLyBnZW5lcmF0ZSB0aGUgZW5kcG9pbnQgd2l0aCB0aGUgcGFyYW1ldGVycyBidXQgbm8gc2VuZFJlcXVlc3QgZnVuY3Rpb25cblx0XHRcdGZvciAocGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IHRoaXMucGFyYW1ldGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcblx0XHRcdFx0cGFyYW1ldGVyID0gdGhpcy5wYXJhbWV0ZXJzW3BhcmFtZXRlckluZGV4XS5nZW5lcmF0ZVBhcmFtZXRlcih1cmxTZWdtZW50cyk7XG5cdFx0XHRcdGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXSA9IHBhcmFtZXRlcjtcblx0XHRcdFx0ZW5kcG9pbnRQYXJhbSA9IGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXTtcblxuXHRcdFx0XHQvLyBpbW1lZGlhdGVseSBpbnZva2VkIGZ1bmN0aW9uIHRvIHNhdmUgdGhlIHByb3BlciByZWZlcmVuY2VzIHRvIHRoZSBwYXJhbWV0ZXIgZnVuY3Rpb25cblx0XHRcdFx0Ly8gdXNpbmcgYW4gSUlGRSBpcyBwcmV0dHkgdWdseSwgYnV0IHRoZSBiZXN0IHdheSBJIGNvdWxkIGNvbWUgdXAgd2l0aCB0byBkeW5hbWljYWxseVxuXHRcdFx0XHQvLyBnZW5lcmF0ZSBwYXJhbWV0ZXIgZnVuY3Rpb25zIGZvciBlYWNoIGVuZHBvaW50IGFzIG5lZWRlZC4uLlxuXHRcdFx0XHQoZnVuY3Rpb24ocGFyYW0pIHtcblx0XHRcdFx0XHRlbmRwb2ludFtwYXJhbS5uYW1lXSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXNbcGFyYW0udXJsU2VnbWVudF0gPSB2YWx1ZTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdGVuZHBvaW50LnNlbmRSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRjb25zdCByZXF1ZXN0VXJsID0gVXRpbHMuZ2VuZXJhdGVSZXF1ZXN0VXJsKHVybFNlZ21lbnRzLCBlbmRwb2ludC52YWx1ZXMpO1xuXG5cdFx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IFV0aWxzLnNlbmRYSFJSZXF1ZXN0KHJlcXVlc3RVcmwpO1xuXG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXMgPSB7fTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fShwYXJhbWV0ZXIpKTtcblx0XHRcdH1cblxuXHRcdFx0ZW5kcG9pbnQucmVxdWVzdGFibGUgPSBmYWxzZTtcblx0XHR9IGVsc2UgeyAvLyBnZW5lcmF0ZSB0aGUgZW5kcG9pbnQgd2l0aCB0aGUgcGFyYW1ldGVycyBidXQgYWxzbyB3aXRoIGEgc2VuZFJlcXVlc3QgZnVuY3Rpb25cblx0XHRcdGZvciAocGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IHRoaXMucGFyYW1ldGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcblx0XHRcdFx0cGFyYW1ldGVyID0gdGhpcy5wYXJhbWV0ZXJzW3BhcmFtZXRlckluZGV4XS5nZW5lcmF0ZVBhcmFtZXRlcih1cmxTZWdtZW50cyk7XG5cdFx0XHRcdGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXSA9IHBhcmFtZXRlcjtcblx0XHRcdFx0ZW5kcG9pbnRQYXJhbSA9IGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXTtcblxuXHRcdFx0XHQvLyBpbW1lZGlhdGVseSBpbnZva2VkIGZ1bmN0aW9uIHRvIHNhdmUgdGhlIHByb3BlciByZWZlcmVuY2VzIHRvIHRoZSBwYXJhbWV0ZXIgZnVuY3Rpb25cblx0XHRcdFx0KGZ1bmN0aW9uKHBhcmFtKSB7XG5cdFx0XHRcdFx0ZW5kcG9pbnRbcGFyYW0ubmFtZV0gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdFx0ZW5kcG9pbnQudmFsdWVzW3BhcmFtLnVybFNlZ21lbnRdID0gdmFsdWU7XG5cblx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRlbmRwb2ludC5zZW5kUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWVzdFVybCA9IFV0aWxzLmdlbmVyYXRlUmVxdWVzdFVybCh1cmxTZWdtZW50cywgZW5kcG9pbnQudmFsdWVzKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IFV0aWxzLnNlbmRYSFJSZXF1ZXN0KHJlcXVlc3RVcmwpO1xuXG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXMgPSB7fTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fShwYXJhbWV0ZXIpKTtcblx0XHRcdH1cblxuXHRcdFx0ZW5kcG9pbnQucmVxdWVzdGFibGUgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmRwb2ludDtcblx0fVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFBhcmFtZXRlckhhbmRsZXIge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCB1cmxTZWdtZW50LCByZXF1aXJlZCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy51cmxTZWdtZW50ID0gbmFtZTtcblx0XHR0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XG5cdH1cblxuXHRnZXROYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblxuXHRnZXRVcmxTZWdtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdH1cblxuXHRpc1JlcXVpcmVkKCkge1xuXHRcdHJldHVybiB0aGlzLnJlcXVpcmVkO1xuXHR9XG5cblx0Z2VuZXJhdGVQYXJhbWV0ZXIodXJsU2VnbWVudHMpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxuXHRcdFx0dXJsU2VnbWVudDogdGhpcy51cmxTZWdtZW50LFxuXHRcdFx0Z2V0VXJsU2VnbWVudHMoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNjaGVtYUhhbmRsZXIge1xuXHRjb25zdHJ1Y3RvcihuYW1lLCB1cmxTZWdtZW50KSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHQvLyBkaWZmZXJlbnQgZnJvbSBDcnlzdGFseXMgdG8gdGFsayB0byBEYWVkYWx1cyBwcm9wZXJseVxuXHRcdHRoaXMudXJsU2VnbWVudCA9IG5hbWU7XG5cblx0XHR0aGlzLmVuZHBvaW50cyA9IFtdO1xuXHR9XG5cblx0Z2V0TmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cblx0Z2V0RW5kcG9pbnRzKCkge1xuXHRcdHJldHVybiB0aGlzLmVuZHBvaW50cztcblx0fVxuXG5cdGdldFVybFNlZ21lbnQoKSB7XG5cdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcblx0fVxuXG5cdGFkZEVuZHBvaW50KGVuZHBvaW50SGFuZGxlcikge1xuXHRcdHRoaXMuZW5kcG9pbnRzLnB1c2goZW5kcG9pbnRIYW5kbGVyKTtcblxuXHRcdHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xuXHR9XG5cblx0YWRkRW5kcG9pbnRzKGVuZHBvaW50SGFuZGxlcnMpIHtcblx0XHRmb3IgKGxldCBlbmRwb2ludEluZGV4ID0gMDsgZW5kcG9pbnRJbmRleCA8IGVuZHBvaW50SGFuZGxlcnMubGVuZ3RoOyBlbmRwb2ludEluZGV4KyspIHtcblx0XHRcdHRoaXMuZW5kcG9pbnRzLnB1c2goZW5kcG9pbnRIYW5kbGVyc1tlbmRwb2ludEluZGV4XSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXG5cdH1cblxuXHRnZW5lcmF0ZVNjaGVtYSgpIHtcblx0XHRjb25zdCBzY2hlbWEgPSB7fTtcblx0XHRzY2hlbWEuZ2V0VXJsU2VnbWVudHMgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsU2VnbWVudHMgPSBbdGhpcy51cmxTZWdtZW50XTtcblxuXHRcdGZvciAobGV0IGVuZHBvaW50SW5kZXggPSAwOyBlbmRwb2ludEluZGV4IDwgdGhpcy5lbmRwb2ludHMubGVuZ3RoOyBlbmRwb2ludEluZGV4KyspIHtcblx0XHRcdHNjaGVtYVt0aGlzLmVuZHBvaW50c1tlbmRwb2ludEluZGV4XS5nZXROYW1lKCldID1cblx0XHRcdFx0dGhpcy5lbmRwb2ludHNbZW5kcG9pbnRJbmRleF0uZ2VuZXJhdGVFbmRwb2ludCh1cmxTZWdtZW50cyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNjaGVtYTtcblx0fVxufTsiLCJ2YXIgbG9hZEpTT05QID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdW5pcXVlID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKHVybCwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAvLyBJTklUXG4gICAgdmFyIG5hbWUgPSBgX2pzb25wXyR7dW5pcXVlKyt9YDtcbiAgICBpZiAodXJsLm1hdGNoKC9cXD8vKSkgdXJsICs9IGAmY2FsbGJhY2s9XCIke25hbWV9YDtcbiAgICBlbHNlIHVybCArPSBgP2NhbGxiYWNrPVwiJHtuYW1lfWA7XG4gICAgXG4gICAgLy8gQ3JlYXRlIHNjcmlwdFxuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgXG4gICAgLy8gU2V0dXAgaGFuZGxlclxuICAgIHdpbmRvd1tuYW1lXSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoKGNvbnRleHQgfHwgd2luZG93KSwgZGF0YSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgZGVsZXRlIHdpbmRvd1tuYW1lXTtcbiAgICB9O1xuICAgIFxuICAgIC8vIExvYWQgSlNPTlxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRkYWVkYWx1c1VybDogJ2xvY2FsaG9zdCcsXG5cdGRhZWRhbHVzUG9ydDogODAsXG5cdGxvZyhtZXNzYWdlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihgQ1JJVDogJHttZXNzYWdlfWApO1xuXHR9LFxuXG5cdGNsb25lKG9iaikge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHR9LFxuXG5cdC8vIGNvbmNhdGVuYXRlcyBhbGwgdGhlIHVybFNlZ21lbnRzIGludG8gb25lIGh0dHAgdXJsXG5cdC8vIGNvdWxkIHByb2JhYmx5IGJlIGRvbmUgYSBiaXQgbW9yZSBjbGVhbmx5LCBidXQgdGhpcyB3aWxsIHdvcmsgZm9yIG5vd1xuXHRnZW5lcmF0ZUVuZHBvaW50UmVxdWVzdFVybCh1cmxTZWdtZW50cykge1xuXHRcdC8vIDAgPSBzY2hlbWFVcmxcblx0XHQvLyAxID0gZW5kcG9pbnRVcmxcblx0XHRjb25zdCByZXF1ZXN0VXJsID1cblx0XHRcdGAke3VybFNlZ21lbnRzWzBdfS8ke3VybFNlZ21lbnRzWzFdfWA7XG5cblx0XHRyZXR1cm4gcmVxdWVzdFVybDtcblx0fSxcblxuXHQvLyBjb25jYXRlbmF0ZXMgYWxsIHRoZSB1cmxTZWdtZW50cyBpbnRvIG9uZSBodHRwIHVybCB3aXRoIHF1ZXJ5IHBhcmFtZXRlcnNcblx0Z2VuZXJhdGVSZXF1ZXN0VXJsKHVybFNlZ21lbnRzLCBwYXJhbWV0ZXJzKSB7XG5cdFx0dmFyIHJlcXVlc3RVcmwgPSB0aGlzLmdlbmVyYXRlRW5kcG9pbnRSZXF1ZXN0VXJsKHVybFNlZ21lbnRzKTtcblxuXHRcdHZhciBwYXJhbWV0ZXJOYW1lcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpO1xuXG5cdFx0cmVxdWVzdFVybCArPSAnPyc7XG5cblx0XHQvLyBhcHBlbmQgcGFyYW1ldGVycyBhcyBzdWNoOiAmPHBhcmFtX25hbWU+PTxwYXJhbV92YWx1ZT5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlck5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZihpICE9PSAwKSB7XG5cdFx0XHRcdHJlcXVlc3RVcmwgKz0gJyYnO1xuXHRcdFx0fVxuXHRcdFx0cmVxdWVzdFVybCArPSBgJHtwYXJhbWV0ZXJOYW1lc1tpXX09JHtwYXJhbWV0ZXJzW3BhcmFtZXRlck5hbWVzW2ldXX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0VXJsO1xuXHR9LFxuXG5cdC8vIHNlbmRzIGEgdmFuaWxsYSBqcyB4aHIgcmVxdWVzdCwgYnV0IHdyYXBwZWQgaW4gYW4gRVM2IHByb21pc2Vcblx0Ly8gaW4gb3JkZXIgdG8gYWxsb3cgZm9yIGNvbnRhY3RpbmcgYSBzZXBhcmF0ZSBhcGkgc2VydmVyLCBDT1JTIGhhcyB0byBiZSBlbmFibGVkXG5cdC8vIHJldHVybiB0aGUgcHJvbWlzZSBvYmplY3QgZm9yIHRoZSB1c2VyIHRvIHJlc29sdmUgd2hlbiBuZWVkZWRcblx0c2VuZFhIUlJlcXVlc3QodXJsLCBwYXJhbXMpIHtcblx0XHRjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0XHRcdGNvbnNvbGUubG9nKGBkYWVkYWx1cy5mbGFzY2hlci5uZXQvJHt1cmx9YCk7XG5cblx0XHRcdHhoci5vcGVuKCdQT1NUJywgYGh0dHA6Ly9kYWVkYWx1cy5mbGFzY2hlci5uZXQvJHt1cmx9YCwgdHJ1ZSk7XG5cblx0XHRcdHhoci5vbmxvYWQgPSBmdW5jdGlvbiBvbmxvYWQoKSB7XG5cdFx0XHRcdGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPD0gMzAwKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZWplY3QodGhpcy5zdGF0dXNUZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0eGhyLm9uZXJyb3IgPSBmdW5jdGlvbiBvbmVycm9yKCkge1xuXHRcdFx0XHRyZWplY3QodGhpcy5zdGF0dXNUZXh0KTtcblx0XHRcdH07XG5cblx0XHRcdHhoci5zZW5kKHBhcmFtcyk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufTtcbiIsImNvbnN0IERlbW9uRWRnZSA9IHJlcXVpcmUoJy4vRGVtb25FZGdlLmpzJyk7XG5cbmlmKHdpbmRvdy5EZW1vbkVkZ2UgIT09IHVuZGVmaW5lZCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoJ0RlbW9uRWRnZSBoYXMgYmVlbiBpbnN0YW50aWF0ZWQgbW9yZSB0aGFuIG9uY2UhJyk7XG59XG5cbndpbmRvdy5EZW1vbkVkZ2UgPSBuZXcgRGVtb25FZGdlKCk7XG4iXX0=
