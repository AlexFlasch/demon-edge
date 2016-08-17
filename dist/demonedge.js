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

},{}],3:[function(require,module,exports){
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

},{"./support/isBuffer":4,"_process":3,"inherits":2}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function ApiHandler() {
		_classCallCheck(this, ApiHandler);

		this.urlSegment = Utils.daedalusUrl;

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
	var baseUrl = Utils.daedalusUrl;

	api.getUrlSegments = function () {
		return baseUrl;
	};

	for (var schemaIndex = 0; schemaIndex < apiHandler.schemas.length; schemaIndex++) {
		api[apiHandler.schemas[schemaIndex].getName()] = apiHandler.schemas[schemaIndex].generateSchema(baseUrl);
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

		// please forgive me. this will probably all be hidden in a json file to be parsed eventually.
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

			return apiHandler.getApi();
		}
	}], [{
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
		var needsParams = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

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

},{}],11:[function(require,module,exports){
'use strict';

module.exports = {
	daedalusUrl: 'localhost',
	daedalusPort: 7575,
	log: function log(message) {
		console.error('CRIT: ' + message);
	},
	clone: function clone(obj) {
		return JSON.parse(JSON.stringify(obj));
	},


	// concatenates all the urlSegments into one http url
	// could probably be done a bit more cleanly, but this will work for now
	generateEndpointRequestUrl: function generateEndpointRequestUrl(urlSegments) {
		// 0 = baseUrl
		// 1 = schemaUrl
		// 2 = endpointUrl
		// 3 = apiVersion
		var requestUrl = urlSegments[0] + '/' + urlSegments[1] + '/' + urlSegments[2] + '/' + urlSegments[3];

		return requestUrl;
	},


	// concatenates all the urlSegments into one http url with query parameters
	generateRequestUrl: function generateRequestUrl(urlSegments, parameters) {
		var requestUrl = D;

		var parameterNames = Object.keys(parameters);

		// append parameters as such: &<param_name>=<param_value>
		for (var i = 0; i < parameterNames.length; i++) {
			requestUrl += '&' + parameterNames[i] + '=' + parameters[parameterNames[i]];
		}

		return requestUrl;
	},


	// sends a vanilla js xhr request, but wrapped in an ES6 promise
	// in order to allow for contacting a separate api server, CORS has to be enabled
	// return the promise object for the user to resolve when needed
	sendXHRRequest: function sendXHRRequest(url, params) {
		var _this = this;

		var promise = new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('POST', url, true);
			xhr.setRequestHeader("Access-Control-Allow-Origin", _this.daedalusUrl + ':' + _this.daedalusPort + '/' + url);

			console.log(_this.daedalusUrl + ':' + _this.daedalusPort + '/' + url);

			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send(params);

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

},{}],12:[function(require,module,exports){
'use strict';

var DemonEdge = require('./DemonEdge.js');

if (window.DemonEdge !== undefined) {
	throw new Error('DemonEdge has been instantiated more than once!');
}

window.DemonEdge = new DemonEdge();

},{"./DemonEdge.js":7}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkYXRhL2FwaS5qc29uIiwibm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwic3JjXFxBcGlIYW5kbGVyLmpzIiwic3JjXFxEZW1vbkVkZ2UuanMiLCJzcmNcXEVuZHBvaW50SGFuZGxlci5qcyIsInNyY1xcUGFyYW1ldGVySGFuZGxlci5qcyIsInNyY1xcU2NoZW1hSGFuZGxlci5qcyIsInNyY1xcVXRpbHMuanMiLCJzcmNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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dGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHM9e1xyXG5cdFwiYXBpVmVyc2lvblwiOiAxLFxyXG5cdFwic2NoZW1hc1wiOiBbXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkZhbnRhc3lcIixcclxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSURPVEEyRmFudGFzeV81NzBcIixcclxuXHRcdFx0XCJlbmRwb2ludHNcIjogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEZhbnRhc3lQbGF5ZXJTdGF0c1wiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0RmFudGFzeVBsYXllclN0YXRzXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZmFudGFzeUxlYWd1ZUlEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiRmFudGFzeUxlYWd1ZUlEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydFRpbWVcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJTdGFydFRpbWVcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJlbmRUaW1lXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiRW5kVGltZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaGlkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic2VyaWVzSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJTZXJpZXNJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInBsYXllckFjY291bnRJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlBsYXllckFjY291bnRJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0UGxheWVyT2ZmaWNpYWxJbmZvXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRQbGF5ZXJPZmZpY2lhbEluZm9cIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJhY2NvdW50aWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0UHJvUGxheWVyTGlzdFwiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0UHJvUGxheWVyTGlzdFwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiTWF0Y2hcIixcclxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSURPVEEyTWF0Y2hfNTcwXCIsXHJcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRMZWFndWVMaXN0aW5nXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRMZWFndWVMaXN0aW5nXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRMaXZlTGVhZ3VlR2FtZXNcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldExpdmVMZWFndWVHYW1lc1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZV9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaF9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TWF0Y2hEZXRhaWxzXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRNYXRjaERldGFpbHNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaElEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TWF0Y2hIaXN0b3J5XCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRNYXRjaEhpc3RvcnlcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaGVyb0lEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiaGVyb19pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImdhbWVNb2RlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZ2FtZV9tb2RlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic2tpbGxcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJza2lsbFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1pblBsYXllcnNcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtaW5fcGxheWVyc1wiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImFjY291bnRJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImFjY291bnRfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZV9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXJ0QXRNYXRjaElEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RhcnRfYXRfbWF0Y2hfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaGVzUmVxdWVzdGVkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hlc19yZXF1ZXN0ZWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJ0b3VybmFtZW50R2FtZXNPbmx5XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwidG91cm5hbWVudF9nYW1lc19vbmx5XCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRNYXRjaEhpc3RvcnlCeVNlcXVlbmNlTnVtYmVyXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRNYXRjaEhpc3RvcnlCeVNlcXVlbmNlTnVtXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXJ0QXRNYXRjaFNlcXVlbmNlTnVtYmVyXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RhcnRfYXRfbWF0Y2hfc2VxX251bVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoZXNSZXF1ZXN0ZWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJtYXRjaGVzX3JlcXVlc3RlZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogXCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFNjaGVkdWxlZExlYWd1ZUdhbWVzXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRTY2hlZHVsZWRMZWFndWVHYW1lc1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydERhdGVcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJkYXRlX21pblwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImVuZERhdGVcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJkYXRlX21heFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0VGVhbUluZm9CeVRlYW1JRFwiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0VGVhbUluZm9CeVRlYW1JRFwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydEF0VGVhbUlEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RhcnRfYXRfdGVhbV9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInRlYW1zUmVxdWVzdGVkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwidGVhbXNfcmVxdWVzdGVkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRUb3BMaXZlR2FtZVwiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0VG9wTGl2ZUdhbWVcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJwYXJ0bmVyXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwicGFydG5lclwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRUb3VybmFtZW50UGxheWVyU3RhdHNcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFRvdXJuYW1lbnRQbGF5ZXJTdGF0c1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImFjY291bnRJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImFjY291bnRfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxlYWd1ZUlEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGVhZ3VlX2lkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaGVyb0lEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiaGVyb19pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInRpbWVGcmFtZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInRpbWVfZnJhbWVcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaElEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJwaGFzZUlEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwicGhhc2VfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlN0cmVhbVN5c3RlbVwiLFxyXG5cdFx0XHRcInVybFNlZ21lbnRcIjogXCJJRE9UQTJTdHJlYW1TeXN0ZW1fNTcwXCIsXHJcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRCcm9hZGNhc3RlckluZm9cIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEJyb2FkY2FzdGVySW5mb1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImJyb2FkY2FzdGVyU3RlYW1JRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImJyb2FkY2FzdGVyX3N0ZWFtX2lkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZV9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiVGlja2V0XCIsXHJcblx0XHRcdFwidXJsU2VnbWVudFwiOiBcIklET1RBMlRpY2tldF81NzBcIixcclxuXHRcdFx0XCJlbmRwb2ludHNcIjogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlNldFN0ZWFtQWNjb3VudFB1cmNoYXNlZFwiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiU2V0U3RlYW1BY2NvdW50UHVyY2hhc2VkXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZXZlbnRJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImV2ZW50aWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0ZWFtSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJzdGVhbWlkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIlN0ZWFtQWNjb3VudFZhbGlkRm9yRXZlbnRcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlN0ZWFtQWNjb3VudFZhbGlkRm9yRXZlbnRcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJldmVudElEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZXZlbnRpZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RlYW1JRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0ZWFtaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0XCJuYW1lXCI6IFwiRWNvbm9teVwiLFxyXG5cdFx0XHRcInVybFNlZ21lbnRcIjogXCJJRWNvbkRPVEEyXzU3MFwiLFxyXG5cdFx0XHRcImVuZHBvaW50c1wiOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0RXZlbnRTdGF0c0ZvckFjY291bnRcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEV2ZW50U3RhdHNGb3JBY2NvdW50XCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZXZlbnRJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImV2ZW50aWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImFjY291bnRJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImFjY291bnRpZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGFuZ3VhZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsYW5ndWFnZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0R2FtZUl0ZW1zXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRHYW1lSXRlbXNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGFuZ3VhZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsYW5ndWFnZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0SGVyb2VzXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRIZXJvZXNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGFuZ3VhZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsYW5ndWFnZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIml0ZW1pemVkT25seVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIml0ZW1pemVkb25seVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0SXRlbUljb25QYXRoXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRJdGVtSWNvblBhdGhcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpY29uTmFtZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImljb25uYW1lXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpY29uVHlwZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImljb250eXBlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRSYXJpdGllc1wiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0UmFyaXRpZXNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGFuZ3VhZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsYW5ndWFnZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0VG91cm5hbWVudFByaXplUG9vbFwiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0VG91cm5hbWVudFByaXplUG9vbFwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZWlkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9XHJcblx0XVxyXG59XHJcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbnZhciBmb3JtYXRSZWdFeHAgPSAvJVtzZGolXS9nO1xuZXhwb3J0cy5mb3JtYXQgPSBmdW5jdGlvbihmKSB7XG4gIGlmICghaXNTdHJpbmcoZikpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvYmplY3RzLnB1c2goaW5zcGVjdChhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpO1xuICB9XG5cbiAgdmFyIGkgPSAxO1xuICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICB2YXIgc3RyID0gU3RyaW5nKGYpLnJlcGxhY2UoZm9ybWF0UmVnRXhwLCBmdW5jdGlvbih4KSB7XG4gICAgaWYgKHggPT09ICclJScpIHJldHVybiAnJSc7XG4gICAgaWYgKGkgPj0gbGVuKSByZXR1cm4geDtcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJyVzJzogcmV0dXJuIFN0cmluZyhhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWQnOiByZXR1cm4gTnVtYmVyKGFyZ3NbaSsrXSk7XG4gICAgICBjYXNlICclaic6XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZ3NbaSsrXSk7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gIH0pO1xuICBmb3IgKHZhciB4ID0gYXJnc1tpXTsgaSA8IGxlbjsgeCA9IGFyZ3NbKytpXSkge1xuICAgIGlmIChpc051bGwoeCkgfHwgIWlzT2JqZWN0KHgpKSB7XG4gICAgICBzdHIgKz0gJyAnICsgeDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyICs9ICcgJyArIGluc3BlY3QoeCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHI7XG59O1xuXG5cbi8vIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4vLyBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuLy8gSWYgLS1uby1kZXByZWNhdGlvbiBpcyBzZXQsIHRoZW4gaXQgaXMgYSBuby1vcC5cbmV4cG9ydHMuZGVwcmVjYXRlID0gZnVuY3Rpb24oZm4sIG1zZykge1xuICAvLyBBbGxvdyBmb3IgZGVwcmVjYXRpbmcgdGhpbmdzIGluIHRoZSBwcm9jZXNzIG9mIHN0YXJ0aW5nIHVwLlxuICBpZiAoaXNVbmRlZmluZWQoZ2xvYmFsLnByb2Nlc3MpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVwcmVjYXRlKGZuLCBtc2cpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24gPT09IHRydWUpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChwcm9jZXNzLnRocm93RGVwcmVjYXRpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3MudHJhY2VEZXByZWNhdGlvbikge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufTtcblxuXG52YXIgZGVidWdzID0ge307XG52YXIgZGVidWdFbnZpcm9uO1xuZXhwb3J0cy5kZWJ1Z2xvZyA9IGZ1bmN0aW9uKHNldCkge1xuICBpZiAoaXNVbmRlZmluZWQoZGVidWdFbnZpcm9uKSlcbiAgICBkZWJ1Z0Vudmlyb24gPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xuICBzZXQgPSBzZXQudG9VcHBlckNhc2UoKTtcbiAgaWYgKCFkZWJ1Z3Nbc2V0XSkge1xuICAgIGlmIChuZXcgUmVnRXhwKCdcXFxcYicgKyBzZXQgKyAnXFxcXGInLCAnaScpLnRlc3QoZGVidWdFbnZpcm9uKSkge1xuICAgICAgdmFyIHBpZCA9IHByb2Nlc3MucGlkO1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1zZyA9IGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJyVzICVkOiAlcycsIHNldCwgcGlkLCBtc2cpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWdzW3NldF0gPSBmdW5jdGlvbigpIHt9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGVidWdzW3NldF07XG59O1xuXG5cbi8qKlxuICogRWNob3MgdGhlIHZhbHVlIG9mIGEgdmFsdWUuIFRyeXMgdG8gcHJpbnQgdGhlIHZhbHVlIG91dFxuICogaW4gdGhlIGJlc3Qgd2F5IHBvc3NpYmxlIGdpdmVuIHRoZSBkaWZmZXJlbnQgdHlwZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHByaW50IG91dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgYWx0ZXJzIHRoZSBvdXRwdXQuXG4gKi9cbi8qIGxlZ2FjeTogb2JqLCBzaG93SGlkZGVuLCBkZXB0aCwgY29sb3JzKi9cbmZ1bmN0aW9uIGluc3BlY3Qob2JqLCBvcHRzKSB7XG4gIC8vIGRlZmF1bHQgb3B0aW9uc1xuICB2YXIgY3R4ID0ge1xuICAgIHNlZW46IFtdLFxuICAgIHN0eWxpemU6IHN0eWxpemVOb0NvbG9yXG4gIH07XG4gIC8vIGxlZ2FjeS4uLlxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAzKSBjdHguZGVwdGggPSBhcmd1bWVudHNbMl07XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDQpIGN0eC5jb2xvcnMgPSBhcmd1bWVudHNbM107XG4gIGlmIChpc0Jvb2xlYW4ob3B0cykpIHtcbiAgICAvLyBsZWdhY3kuLi5cbiAgICBjdHguc2hvd0hpZGRlbiA9IG9wdHM7XG4gIH0gZWxzZSBpZiAob3B0cykge1xuICAgIC8vIGdvdCBhbiBcIm9wdGlvbnNcIiBvYmplY3RcbiAgICBleHBvcnRzLl9leHRlbmQoY3R4LCBvcHRzKTtcbiAgfVxuICAvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG4gIGlmIChpc1VuZGVmaW5lZChjdHguc2hvd0hpZGRlbikpIGN0eC5zaG93SGlkZGVuID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguZGVwdGgpKSBjdHguZGVwdGggPSAyO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmNvbG9ycykpIGN0eC5jb2xvcnMgPSBmYWxzZTtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jdXN0b21JbnNwZWN0KSkgY3R4LmN1c3RvbUluc3BlY3QgPSB0cnVlO1xuICBpZiAoY3R4LmNvbG9ycykgY3R4LnN0eWxpemUgPSBzdHlsaXplV2l0aENvbG9yO1xuICByZXR1cm4gZm9ybWF0VmFsdWUoY3R4LCBvYmosIGN0eC5kZXB0aCk7XG59XG5leHBvcnRzLmluc3BlY3QgPSBpbnNwZWN0O1xuXG5cbi8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSNncmFwaGljc1xuaW5zcGVjdC5jb2xvcnMgPSB7XG4gICdib2xkJyA6IFsxLCAyMl0sXG4gICdpdGFsaWMnIDogWzMsIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgMjRdLFxuICAnaW52ZXJzZScgOiBbNywgMjddLFxuICAnd2hpdGUnIDogWzM3LCAzOV0sXG4gICdncmV5JyA6IFs5MCwgMzldLFxuICAnYmxhY2snIDogWzMwLCAzOV0sXG4gICdibHVlJyA6IFszNCwgMzldLFxuICAnY3lhbicgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyA6IFszMiwgMzldLFxuICAnbWFnZW50YScgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgOiBbMzMsIDM5XVxufTtcblxuLy8gRG9uJ3QgdXNlICdibHVlJyBub3QgdmlzaWJsZSBvbiBjbWQuZXhlXG5pbnNwZWN0LnN0eWxlcyA9IHtcbiAgJ3NwZWNpYWwnOiAnY3lhbicsXG4gICdudW1iZXInOiAneWVsbG93JyxcbiAgJ2Jvb2xlYW4nOiAneWVsbG93JyxcbiAgJ3VuZGVmaW5lZCc6ICdncmV5JyxcbiAgJ251bGwnOiAnYm9sZCcsXG4gICdzdHJpbmcnOiAnZ3JlZW4nLFxuICAnZGF0ZSc6ICdtYWdlbnRhJyxcbiAgLy8gXCJuYW1lXCI6IGludGVudGlvbmFsbHkgbm90IHN0eWxpbmdcbiAgJ3JlZ2V4cCc6ICdyZWQnXG59O1xuXG5cbmZ1bmN0aW9uIHN0eWxpemVXaXRoQ29sb3Ioc3RyLCBzdHlsZVR5cGUpIHtcbiAgdmFyIHN0eWxlID0gaW5zcGVjdC5zdHlsZXNbc3R5bGVUeXBlXTtcblxuICBpZiAoc3R5bGUpIHtcbiAgICByZXR1cm4gJ1xcdTAwMWJbJyArIGluc3BlY3QuY29sb3JzW3N0eWxlXVswXSArICdtJyArIHN0ciArXG4gICAgICAgICAgICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMV0gKyAnbSc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHN0eWxpemVOb0NvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHJldHVybiBzdHI7XG59XG5cblxuZnVuY3Rpb24gYXJyYXlUb0hhc2goYXJyYXkpIHtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwgaWR4KSB7XG4gICAgaGFzaFt2YWxdID0gdHJ1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGhhc2g7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0VmFsdWUoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzKSB7XG4gIC8vIFByb3ZpZGUgYSBob29rIGZvciB1c2VyLXNwZWNpZmllZCBpbnNwZWN0IGZ1bmN0aW9ucy5cbiAgLy8gQ2hlY2sgdGhhdCB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpbnNwZWN0IGZ1bmN0aW9uIG9uIGl0XG4gIGlmIChjdHguY3VzdG9tSW5zcGVjdCAmJlxuICAgICAgdmFsdWUgJiZcbiAgICAgIGlzRnVuY3Rpb24odmFsdWUuaW5zcGVjdCkgJiZcbiAgICAgIC8vIEZpbHRlciBvdXQgdGhlIHV0aWwgbW9kdWxlLCBpdCdzIGluc3BlY3QgZnVuY3Rpb24gaXMgc3BlY2lhbFxuICAgICAgdmFsdWUuaW5zcGVjdCAhPT0gZXhwb3J0cy5pbnNwZWN0ICYmXG4gICAgICAvLyBBbHNvIGZpbHRlciBvdXQgYW55IHByb3RvdHlwZSBvYmplY3RzIHVzaW5nIHRoZSBjaXJjdWxhciBjaGVjay5cbiAgICAgICEodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IucHJvdG90eXBlID09PSB2YWx1ZSkpIHtcbiAgICB2YXIgcmV0ID0gdmFsdWUuaW5zcGVjdChyZWN1cnNlVGltZXMsIGN0eCk7XG4gICAgaWYgKCFpc1N0cmluZyhyZXQpKSB7XG4gICAgICByZXQgPSBmb3JtYXRWYWx1ZShjdHgsIHJldCwgcmVjdXJzZVRpbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vIFByaW1pdGl2ZSB0eXBlcyBjYW5ub3QgaGF2ZSBwcm9wZXJ0aWVzXG4gIHZhciBwcmltaXRpdmUgPSBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSk7XG4gIGlmIChwcmltaXRpdmUpIHtcbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgLy8gTG9vayB1cCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0LlxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgdmFyIHZpc2libGVLZXlzID0gYXJyYXlUb0hhc2goa2V5cyk7XG5cbiAgaWYgKGN0eC5zaG93SGlkZGVuKSB7XG4gICAga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHZhbHVlKTtcbiAgfVxuXG4gIC8vIElFIGRvZXNuJ3QgbWFrZSBlcnJvciBmaWVsZHMgbm9uLWVudW1lcmFibGVcbiAgLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2R3dzUyc2J0KHY9dnMuOTQpLmFzcHhcbiAgaWYgKGlzRXJyb3IodmFsdWUpXG4gICAgICAmJiAoa2V5cy5pbmRleE9mKCdtZXNzYWdlJykgPj0gMCB8fCBrZXlzLmluZGV4T2YoJ2Rlc2NyaXB0aW9uJykgPj0gMCkpIHtcbiAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgLy8gU29tZSB0eXBlIG9mIG9iamVjdCB3aXRob3V0IHByb3BlcnRpZXMgY2FuIGJlIHNob3J0Y3V0dGVkLlxuICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHZhciBuYW1lID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoJ1tGdW5jdGlvbicgKyBuYW1lICsgJ10nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY3R4LnN0eWxpemUoUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ3JlZ2V4cCcpO1xuICAgIH1cbiAgICBpZiAoaXNEYXRlKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAnZGF0ZScpO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJhc2UgPSAnJywgYXJyYXkgPSBmYWxzZSwgYnJhY2VzID0gWyd7JywgJ30nXTtcblxuICAvLyBNYWtlIEFycmF5IHNheSB0aGF0IHRoZXkgYXJlIEFycmF5XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIGFycmF5ID0gdHJ1ZTtcbiAgICBicmFjZXMgPSBbJ1snLCAnXSddO1xuICB9XG5cbiAgLy8gTWFrZSBmdW5jdGlvbnMgc2F5IHRoYXQgdGhleSBhcmUgZnVuY3Rpb25zXG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgIHZhciBuID0gdmFsdWUubmFtZSA/ICc6ICcgKyB2YWx1ZS5uYW1lIDogJyc7XG4gICAgYmFzZSA9ICcgW0Z1bmN0aW9uJyArIG4gKyAnXSc7XG4gIH1cblxuICAvLyBNYWtlIFJlZ0V4cHMgc2F5IHRoYXQgdGhleSBhcmUgUmVnRXhwc1xuICBpZiAoaXNSZWdFeHAodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGRhdGVzIHdpdGggcHJvcGVydGllcyBmaXJzdCBzYXkgdGhlIGRhdGVcbiAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgRGF0ZS5wcm90b3R5cGUudG9VVENTdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIH1cblxuICAvLyBNYWtlIGVycm9yIHdpdGggbWVzc2FnZSBmaXJzdCBzYXkgdGhlIGVycm9yXG4gIGlmIChpc0Vycm9yKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBmb3JtYXRFcnJvcih2YWx1ZSk7XG4gIH1cblxuICBpZiAoa2V5cy5sZW5ndGggPT09IDAgJiYgKCFhcnJheSB8fCB2YWx1ZS5sZW5ndGggPT0gMCkpIHtcbiAgICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArIGJyYWNlc1sxXTtcbiAgfVxuXG4gIGlmIChyZWN1cnNlVGltZXMgPCAwKSB7XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbT2JqZWN0XScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG5cbiAgY3R4LnNlZW4ucHVzaCh2YWx1ZSk7XG5cbiAgdmFyIG91dHB1dDtcbiAgaWYgKGFycmF5KSB7XG4gICAgb3V0cHV0ID0gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cyk7XG4gIH0gZWxzZSB7XG4gICAgb3V0cHV0ID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSk7XG4gICAgfSk7XG4gIH1cblxuICBjdHguc2Vlbi5wb3AoKTtcblxuICByZXR1cm4gcmVkdWNlVG9TaW5nbGVTdHJpbmcob3V0cHV0LCBiYXNlLCBicmFjZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFByaW1pdGl2ZShjdHgsIHZhbHVlKSB7XG4gIGlmIChpc1VuZGVmaW5lZCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCd1bmRlZmluZWQnLCAndW5kZWZpbmVkJyk7XG4gIGlmIChpc1N0cmluZyh2YWx1ZSkpIHtcbiAgICB2YXIgc2ltcGxlID0gJ1xcJycgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkucmVwbGFjZSgvXlwifFwiJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykgKyAnXFwnJztcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoc2ltcGxlLCAnc3RyaW5nJyk7XG4gIH1cbiAgaWYgKGlzTnVtYmVyKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ251bWJlcicpO1xuICBpZiAoaXNCb29sZWFuKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJycgKyB2YWx1ZSwgJ2Jvb2xlYW4nKTtcbiAgLy8gRm9yIHNvbWUgcmVhc29uIHR5cGVvZiBudWxsIGlzIFwib2JqZWN0XCIsIHNvIHNwZWNpYWwgY2FzZSBoZXJlLlxuICBpZiAoaXNOdWxsKHZhbHVlKSlcbiAgICByZXR1cm4gY3R4LnN0eWxpemUoJ251bGwnLCAnbnVsbCcpO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKHZhbHVlKSB7XG4gIHJldHVybiAnWycgKyBFcnJvci5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgKyAnXSc7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0QXJyYXkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5cykge1xuICB2YXIgb3V0cHV0ID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5KHZhbHVlLCBTdHJpbmcoaSkpKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIFN0cmluZyhpKSwgdHJ1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRwdXQucHVzaCgnJyk7XG4gICAgfVxuICB9XG4gIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIG91dHB1dC5wdXNoKGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsXG4gICAgICAgICAga2V5LCB0cnVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLCBrZXksIGFycmF5KSB7XG4gIHZhciBuYW1lLCBzdHIsIGRlc2M7XG4gIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHZhbHVlLCBrZXkpIHx8IHsgdmFsdWU6IHZhbHVlW2tleV0gfTtcbiAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0dldHRlci9TZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRlc2Muc2V0KSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW1NldHRlcl0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuICBpZiAoIWhhc093blByb3BlcnR5KHZpc2libGVLZXlzLCBrZXkpKSB7XG4gICAgbmFtZSA9ICdbJyArIGtleSArICddJztcbiAgfVxuICBpZiAoIXN0cikge1xuICAgIGlmIChjdHguc2Vlbi5pbmRleE9mKGRlc2MudmFsdWUpIDwgMCkge1xuICAgICAgaWYgKGlzTnVsbChyZWN1cnNlVGltZXMpKSB7XG4gICAgICAgIHN0ciA9IGZvcm1hdFZhbHVlKGN0eCwgZGVzYy52YWx1ZSwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIHJlY3Vyc2VUaW1lcyAtIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHN0ci5pbmRleE9mKCdcXG4nKSA+IC0xKSB7XG4gICAgICAgIGlmIChhcnJheSkge1xuICAgICAgICAgIHN0ciA9IHN0ci5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiAnICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKS5zdWJzdHIoMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gJ1xcbicgKyBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgICcgKyBsaW5lO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbQ2lyY3VsYXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzVW5kZWZpbmVkKG5hbWUpKSB7XG4gICAgaWYgKGFycmF5ICYmIGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIG5hbWUgPSBKU09OLnN0cmluZ2lmeSgnJyArIGtleSk7XG4gICAgaWYgKG5hbWUubWF0Y2goL15cIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVwiJC8pKSB7XG4gICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMSwgbmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnbmFtZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC8nL2csIFwiXFxcXCdcIilcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKVxuICAgICAgICAgICAgICAgICAucmVwbGFjZSgvKF5cInxcIiQpL2csIFwiJ1wiKTtcbiAgICAgIG5hbWUgPSBjdHguc3R5bGl6ZShuYW1lLCAnc3RyaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnOiAnICsgc3RyO1xufVxuXG5cbmZ1bmN0aW9uIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKSB7XG4gIHZhciBudW1MaW5lc0VzdCA9IDA7XG4gIHZhciBsZW5ndGggPSBvdXRwdXQucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgIG51bUxpbmVzRXN0Kys7XG4gICAgaWYgKGN1ci5pbmRleE9mKCdcXG4nKSA+PSAwKSBudW1MaW5lc0VzdCsrO1xuICAgIHJldHVybiBwcmV2ICsgY3VyLnJlcGxhY2UoL1xcdTAwMWJcXFtcXGRcXGQ/bS9nLCAnJykubGVuZ3RoICsgMTtcbiAgfSwgMCk7XG5cbiAgaWYgKGxlbmd0aCA+IDYwKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArXG4gICAgICAgICAgIChiYXNlID09PSAnJyA/ICcnIDogYmFzZSArICdcXG4gJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBvdXRwdXQuam9pbignLFxcbiAgJykgK1xuICAgICAgICAgICAnICcgK1xuICAgICAgICAgICBicmFjZXNbMV07XG4gIH1cblxuICByZXR1cm4gYnJhY2VzWzBdICsgYmFzZSArICcgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyAnICsgYnJhY2VzWzFdO1xufVxuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5mdW5jdGlvbiBpc0FycmF5KGFyKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyKTtcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHJlKSAmJiBvYmplY3RUb1N0cmluZyhyZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuZXhwb3J0cy5pc1JlZ0V4cCA9IGlzUmVnRXhwO1xuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNPYmplY3QgPSBpc09iamVjdDtcblxuZnVuY3Rpb24gaXNEYXRlKGQpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KGQpICYmIG9iamVjdFRvU3RyaW5nKGQpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5leHBvcnRzLmlzRGF0ZSA9IGlzRGF0ZTtcblxuZnVuY3Rpb24gaXNFcnJvcihlKSB7XG4gIHJldHVybiBpc09iamVjdChlKSAmJlxuICAgICAgKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gcmVxdWlyZSgnLi9zdXBwb3J0L2lzQnVmZmVyJyk7XG5cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKG8pIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKTtcbn1cblxuXG5mdW5jdGlvbiBwYWQobikge1xuICByZXR1cm4gbiA8IDEwID8gJzAnICsgbi50b1N0cmluZygxMCkgOiBuLnRvU3RyaW5nKDEwKTtcbn1cblxuXG52YXIgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsXG4gICAgICAgICAgICAgICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG4vLyAyNiBGZWIgMTY6MTk6MzRcbmZ1bmN0aW9uIHRpbWVzdGFtcCgpIHtcbiAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xuICB2YXIgdGltZSA9IFtwYWQoZC5nZXRIb3VycygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0TWludXRlcygpKSxcbiAgICAgICAgICAgICAgcGFkKGQuZ2V0U2Vjb25kcygpKV0uam9pbignOicpO1xuICByZXR1cm4gW2QuZ2V0RGF0ZSgpLCBtb250aHNbZC5nZXRNb250aCgpXSwgdGltZV0uam9pbignICcpO1xufVxuXG5cbi8vIGxvZyBpcyBqdXN0IGEgdGhpbiB3cmFwcGVyIHRvIGNvbnNvbGUubG9nIHRoYXQgcHJlcGVuZHMgYSB0aW1lc3RhbXBcbmV4cG9ydHMubG9nID0gZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKCclcyAtICVzJywgdGltZXN0YW1wKCksIGV4cG9ydHMuZm9ybWF0LmFwcGx5KGV4cG9ydHMsIGFyZ3VtZW50cykpO1xufTtcblxuXG4vKipcbiAqIEluaGVyaXQgdGhlIHByb3RvdHlwZSBtZXRob2RzIGZyb20gb25lIGNvbnN0cnVjdG9yIGludG8gYW5vdGhlci5cbiAqXG4gKiBUaGUgRnVuY3Rpb24ucHJvdG90eXBlLmluaGVyaXRzIGZyb20gbGFuZy5qcyByZXdyaXR0ZW4gYXMgYSBzdGFuZGFsb25lXG4gKiBmdW5jdGlvbiAobm90IG9uIEZ1bmN0aW9uLnByb3RvdHlwZSkuIE5PVEU6IElmIHRoaXMgZmlsZSBpcyB0byBiZSBsb2FkZWRcbiAqIGR1cmluZyBib290c3RyYXBwaW5nIHRoaXMgZnVuY3Rpb24gbmVlZHMgdG8gYmUgcmV3cml0dGVuIHVzaW5nIHNvbWUgbmF0aXZlXG4gKiBmdW5jdGlvbnMgYXMgcHJvdG90eXBlIHNldHVwIHVzaW5nIG5vcm1hbCBKYXZhU2NyaXB0IGRvZXMgbm90IHdvcmsgYXNcbiAqIGV4cGVjdGVkIGR1cmluZyBib290c3RyYXBwaW5nIChzZWUgbWlycm9yLmpzIGluIHIxMTQ5MDMpLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gd2hpY2ggbmVlZHMgdG8gaW5oZXJpdCB0aGVcbiAqICAgICBwcm90b3R5cGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBzdXBlckN0b3IgQ29uc3RydWN0b3IgZnVuY3Rpb24gdG8gaW5oZXJpdCBwcm90b3R5cGUgZnJvbS5cbiAqL1xuZXhwb3J0cy5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmV4cG9ydHMuX2V4dGVuZCA9IGZ1bmN0aW9uKG9yaWdpbiwgYWRkKSB7XG4gIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGFkZCBpc24ndCBhbiBvYmplY3RcbiAgaWYgKCFhZGQgfHwgIWlzT2JqZWN0KGFkZCkpIHJldHVybiBvcmlnaW47XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhZGQpO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgb3JpZ2luW2tleXNbaV1dID0gYWRkW2tleXNbaV1dO1xuICB9XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5mdW5jdGlvbiBoYXNPd25Qcm9wZXJ0eShvYmosIHByb3ApIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApO1xufVxuIiwidmFyIFV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcGlIYW5kbGVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMudXJsU2VnbWVudCA9IFV0aWxzLmRhZWRhbHVzVXJsO1xyXG5cclxuXHRcdHRoaXMuc2NoZW1hcyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0UmVxdWVzdFVybCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRnZXRBcGkoKSB7XHJcblx0XHRyZXR1cm4gZ2VuZXJhdGVBcGkodGhpcyk7XHJcblx0fVxyXG5cclxuXHRnZXRTY2hlbWFzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hcztcclxuXHR9XHJcblxyXG5cdGFkZFNjaGVtYShzY2hlbWFIYW5kbGVyKSB7XHJcblx0XHR0aGlzLnNjaGVtYXMucHVzaChzY2hlbWFIYW5kbGVyKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcclxuXHR9XHJcblxyXG5cdGFkZFNjaGVtYXMoc2NoZW1hSGFuZGxlcnMpIHtcclxuXHRcdGZvciAobGV0IHNjaGVtYUluZGV4ID0gMDsgc2NoZW1hSW5kZXggPCBzY2hlbWFIYW5kbGVycy5sZW5ndGg7IHNjaGVtYUluZGV4KyspIHtcclxuXHRcdFx0dGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hSGFuZGxlcnNbc2NoZW1hSW5kZXhdKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcclxuXHR9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUFwaShhcGlIYW5kbGVyKSB7XHJcblx0Y29uc3QgYXBpID0ge307XHJcblx0bGV0IGJhc2VVcmwgPSBVdGlscy5kYWVkYWx1c1VybDtcclxuXHRcclxuXHRhcGkuZ2V0VXJsU2VnbWVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBiYXNlVXJsO1xyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgc2NoZW1hSW5kZXggPSAwOyBzY2hlbWFJbmRleCA8IGFwaUhhbmRsZXIuc2NoZW1hcy5sZW5ndGg7IHNjaGVtYUluZGV4KyspIHtcclxuXHRcdGFwaVthcGlIYW5kbGVyLnNjaGVtYXNbc2NoZW1hSW5kZXhdLmdldE5hbWUoKV0gPVxyXG5cdFx0XHRhcGlIYW5kbGVyLnNjaGVtYXNbc2NoZW1hSW5kZXhdLmdlbmVyYXRlU2NoZW1hKGJhc2VVcmwpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGFwaTtcclxufSIsInZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xyXG5cclxudmFyIFV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpXHJcbnZhciBhcGlKc29uID0gcmVxdWlyZSgnLi8uLi9kYXRhL2FwaS5qc29uJyk7XHJcbnZhciBBcGlIYW5kbGVyID0gcmVxdWlyZSgnLi9BcGlIYW5kbGVyJyk7XHJcbnZhciBTY2hlbWFIYW5kbGVyID0gcmVxdWlyZSgnLi9TY2hlbWFIYW5kbGVyJyk7XHJcbnZhciBFbmRwb2ludEhhbmRsZXIgPSByZXF1aXJlKCcuL0VuZHBvaW50SGFuZGxlcicpO1xyXG52YXIgUGFyYW1ldGVySGFuZGxlciA9IHJlcXVpcmUoJy4vUGFyYW1ldGVySGFuZGxlcicpO1xyXG5cclxudmFyIHN0ZWFtV2ViQXBpVmVyc2lvbiA9IDE7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIERlbW9uRWRnZSB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHQvLyBwbGVhc2UgZm9yZ2l2ZSBtZS4gdGhpcyB3aWxsIHByb2JhYmx5IGFsbCBiZSBoaWRkZW4gaW4gYSBqc29uIGZpbGUgdG8gYmUgcGFyc2VkIGV2ZW50dWFsbHkuXHJcblx0XHR0aGlzLmFwaSA9IHRoaXMuZ2VuZXJhdGVBcGlTdHJ1Y3R1cmUoKTtcclxuXHR9XHJcblxyXG5cdGdlbmVyYXRlQXBpU3RydWN0dXJlKCkge1xyXG5cdFx0Y29uc3QgYXBpSGFuZGxlciA9IG5ldyBBcGlIYW5kbGVyKCk7XHJcblxyXG5cdFx0Y29uc3Qgc2NoZW1hcyA9IFtdO1xyXG5cclxuXHRcdC8vIHNjaGVtYS1sZXZlbCBnZW5lcmF0aW9uXHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFwaUpzb24uc2NoZW1hcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgc2NoZW1hID0gYXBpSnNvbi5zY2hlbWFzW2ldO1xyXG5cclxuXHRcdFx0Y29uc3Qgc2NoZW1hT2JqID0gbmV3IFNjaGVtYUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEudXJsU2VnbWVudCk7XHJcblxyXG5cdFx0XHRjb25zdCBlbmRwb2ludHMgPSBbXTtcclxuXHJcblx0XHRcdC8vIGVuZHBvaW50LWxldmVsIGdlbmVyYXRpb25cclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzY2hlbWEuZW5kcG9pbnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0bGV0IGVuZHBvaW50ID0gc2NoZW1hLmVuZHBvaW50c1tqXTtcclxuXHJcblx0XHRcdFx0Y29uc3QgZW5kcG9pbnRPYmogPVxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBFbmRwb2ludEhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQudXJsU2VnbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZWFtV2ViQXBpVmVyc2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50LnBhcmFtZXRlclJlcXVpcmVkKTtcclxuXHJcblx0XHRcdFx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xyXG5cclxuXHRcdFx0XHQvLyBwYXJhbWV0ZXItbGV2ZWwgZ2VuZXJhdGlvblxyXG5cdFx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDwgZW5kcG9pbnQucGFyYW1ldGVycy5sZW5ndGg7IGsrKykge1xyXG5cdFx0XHRcdFx0bGV0IHBhcmFtZXRlciA9IGVuZHBvaW50LnBhcmFtZXRlcnNba107XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgcGFyYW1ldGVyT2JqID0gbmV3IFBhcmFtZXRlckhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIudXJsU2VnbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyLnJlcXVpcmVkKTtcclxuXHJcblx0XHRcdFx0XHRwYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVyT2JqKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGVuZHBvaW50T2JqLmFkZFBhcmFtZXRlcnMocGFyYW1ldGVycyk7XHJcblx0XHRcdFx0ZW5kcG9pbnRzLnB1c2goZW5kcG9pbnRPYmopO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzY2hlbWFPYmouYWRkRW5kcG9pbnRzKGVuZHBvaW50cyk7XHJcblx0XHRcdHNjaGVtYXMucHVzaChzY2hlbWFPYmopO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFwaUhhbmRsZXIuYWRkU2NoZW1hcyhzY2hlbWFzKTtcclxuXHJcblxyXG5cdFx0Y29uc3QgdGVtcCA9IGFwaUhhbmRsZXIuZ2V0QXBpKCk7XHJcblxyXG5cdFx0dXRpbC5pbnNwZWN0KHRlbXApO1xyXG5cclxuXHRcdHJldHVybiB0ZW1wO1xyXG5cdH1cclxuXHJcblx0c2V0RGFlZGFsdXNVcmwoZG9tYWluLCBwb3J0KSB7XHJcblx0XHRVdGlscy5kYWVkYWx1c1VybCA9IGRvbWFpbjtcclxuXHRcdFV0aWxzLmRhZWRhbHVzUG9ydCA9IHBvcnQ7XHJcblx0fVxyXG59O1xyXG4iLCJ2YXIgVXRpbHMgPSByZXF1aXJlKCcuL1V0aWxzJyk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEVuZHBvaW50SGFuZGxlciB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgdXJsU2VnbWVudCwgdmVyc2lvbiwgbmVlZHNQYXJhbXMgPSB0cnVlKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0Ly8gdGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBDcnlzdGFseXMgaW4gb3JkZXIgdG8gdGFsayB0byBEYWVkYWx1cyBwcm9wZXJseVxyXG5cdFx0dGhpcy51cmxTZWdtZW50ID0gbmFtZTtcclxuXHRcdHRoaXMubmVlZHNQYXJhbXMgPSBuZWVkc1BhcmFtcztcclxuXHJcblx0XHR0aGlzLnBhcmFtZXRlcnMgPSBbXTtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0UGFyYW1ldGVycygpIHtcclxuXHRcdHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XHJcblx0fVxyXG5cclxuXHRnZXRVcmxTZWdtZW50KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcclxuXHR9XHJcblxyXG5cdGdldFN0ZWFtV2ViQXBpVmVyc2lvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLnZlcnNpb247XHJcblx0fVxyXG5cclxuXHRuZWVkc1BhcmFtZXRlcnMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uZWVkc1BhcmFtZXRlcnM7XHJcblx0fVxyXG5cclxuXHRhZGRQYXJhbWV0ZXIocGFyYW1ldGVySGFuZGxlcikge1xyXG5cdFx0dGhpcy5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVySGFuZGxlcik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXHJcblx0fVxyXG5cclxuXHRhZGRQYXJhbWV0ZXJzKHBhcmFtZXRlckhhbmRsZXJzKSB7XHJcblx0XHRmb3IgKGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgcGFyYW1ldGVySGFuZGxlcnMubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCsrKSB7XHJcblx0XHRcdHRoaXMucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlckhhbmRsZXJzW3BhcmFtZXRlckluZGV4XSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXHJcblx0fVxyXG5cclxuXHRnZW5lcmF0ZUVuZHBvaW50KHNlZ21lbnRzKSB7XHJcblx0XHRjb25zdCB1cmxTZWdtZW50cyA9IHNlZ21lbnRzLnNsaWNlKDApOyAvLyBjcmVhdGUgc2hhbGxvdyBjb3B5IG9mIGFycmF5XHJcblx0XHR1cmxTZWdtZW50cy5wdXNoKHRoaXMudXJsU2VnbWVudCk7XHJcblx0XHR1cmxTZWdtZW50cy5wdXNoKHRoaXMudmVyc2lvbik7XHJcblxyXG5cdFx0Y29uc3QgZW5kcG9pbnQgPSB7fTtcclxuXHRcdGVuZHBvaW50LnZhbHVlcyA9IHt9O1xyXG5cdFx0ZW5kcG9pbnQudXJsU2VnbWVudHMgPSB1cmxTZWdtZW50cztcclxuXHRcdGVuZHBvaW50LmdldFVybFNlZ21lbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBwYXJhbWV0ZXJJbmRleCA9IDA7XHJcblx0XHRsZXQgcGFyYW1ldGVyO1xyXG5cdFx0bGV0IGVuZHBvaW50UGFyYW07XHJcblxyXG5cdFx0aWYgKHRoaXMubmVlZHNQYXJhbXMpIHsgLy8gZ2VuZXJhdGUgdGhlIGVuZHBvaW50IHdpdGggdGhlIHBhcmFtZXRlcnMgYnV0IG5vIHNlbmRSZXF1ZXN0IGZ1bmN0aW9uXHJcblx0XHRcdGZvciAocGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IHRoaXMucGFyYW1ldGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcclxuXHRcdFx0XHRwYXJhbWV0ZXIgPSB0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdlbmVyYXRlUGFyYW1ldGVyKHVybFNlZ21lbnRzKTtcclxuXHRcdFx0XHRlbmRwb2ludFt0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdldE5hbWUoKV0gPSBwYXJhbWV0ZXI7XHJcblx0XHRcdFx0ZW5kcG9pbnRQYXJhbSA9IGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXTtcclxuXHJcblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgaW52b2tlZCBmdW5jdGlvbiB0byBzYXZlIHRoZSBwcm9wZXIgcmVmZXJlbmNlcyB0byB0aGUgcGFyYW1ldGVyIGZ1bmN0aW9uXHJcblx0XHRcdFx0Ly8gdXNpbmcgYW4gSUlGRSBpcyBwcmV0dHkgdWdseSwgYnV0IHRoZSBiZXN0IHdheSBJIGNvdWxkIGNvbWUgdXAgd2l0aCB0byBkeW5hbWljYWxseVxyXG5cdFx0XHRcdC8vIGdlbmVyYXRlIHBhcmFtZXRlciBmdW5jdGlvbnMgZm9yIGVhY2ggZW5kcG9pbnQgYXMgbmVlZGVkLi4uXHJcblx0XHRcdFx0KGZ1bmN0aW9uKHBhcmFtKSB7XHJcblx0XHRcdFx0XHRlbmRwb2ludFtwYXJhbS5uYW1lXSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdGVuZHBvaW50LnZhbHVlc1twYXJhbS51cmxTZWdtZW50XSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdGVuZHBvaW50LnNlbmRSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RVcmwgPSBVdGlscy5nZW5lcmF0ZVJlcXVlc3RVcmwodXJsU2VnbWVudHMsIGVuZHBvaW50LnZhbHVlcyk7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IFV0aWxzLnNlbmRYSFJSZXF1ZXN0KHJlcXVlc3RVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0ZW5kcG9pbnQudmFsdWVzID0ge307XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fShwYXJhbWV0ZXIpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZW5kcG9pbnQucmVxdWVzdGFibGUgPSBmYWxzZTtcclxuXHRcdH0gZWxzZSB7IC8vIGdlbmVyYXRlIHRoZSBlbmRwb2ludCB3aXRoIHRoZSBwYXJhbWV0ZXJzIGJ1dCBhbHNvIHdpdGggYSBzZW5kUmVxdWVzdCBmdW5jdGlvblxyXG5cdFx0XHRmb3IgKHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCB0aGlzLnBhcmFtZXRlcnMubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCsrKSB7XHJcblx0XHRcdFx0cGFyYW1ldGVyID0gdGhpcy5wYXJhbWV0ZXJzW3BhcmFtZXRlckluZGV4XS5nZW5lcmF0ZVBhcmFtZXRlcih1cmxTZWdtZW50cyk7XHJcblx0XHRcdFx0ZW5kcG9pbnRbdGhpcy5wYXJhbWV0ZXJzW3BhcmFtZXRlckluZGV4XS5nZXROYW1lKCldID0gcGFyYW1ldGVyO1xyXG5cdFx0XHRcdGVuZHBvaW50UGFyYW0gPSBlbmRwb2ludFt0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdldE5hbWUoKV07XHJcblxyXG5cdFx0XHRcdC8vIGltbWVkaWF0ZWx5IGludm9rZWQgZnVuY3Rpb24gdG8gc2F2ZSB0aGUgcHJvcGVyIHJlZmVyZW5jZXMgdG8gdGhlIHBhcmFtZXRlciBmdW5jdGlvblxyXG5cdFx0XHRcdChmdW5jdGlvbihwYXJhbSkge1xyXG5cdFx0XHRcdFx0ZW5kcG9pbnRbcGFyYW0ubmFtZV0gPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXNbcGFyYW0udXJsU2VnbWVudF0gPSB2YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRlbmRwb2ludC5zZW5kUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCByZXF1ZXN0VXJsID0gVXRpbHMuZ2VuZXJhdGVSZXF1ZXN0VXJsKHVybFNlZ21lbnRzLCBlbmRwb2ludC52YWx1ZXMpO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgcHJvbWlzZSA9IFV0aWxzLnNlbmRYSFJSZXF1ZXN0KHJlcXVlc3RVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0ZW5kcG9pbnQudmFsdWVzID0ge307XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fShwYXJhbWV0ZXIpKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZW5kcG9pbnQucmVxdWVzdGFibGUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBlbmRwb2ludDtcclxuXHR9XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQYXJhbWV0ZXJIYW5kbGVyIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCB1cmxTZWdtZW50LCByZXF1aXJlZCkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMudXJsU2VnbWVudCA9IG5hbWU7XHJcblx0XHR0aGlzLnJlcXVpcmVkID0gcmVxdWlyZWQ7XHJcblx0fVxyXG5cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdGdldFVybFNlZ21lbnQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xyXG5cdH1cclxuXHJcblx0aXNSZXF1aXJlZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnJlcXVpcmVkO1xyXG5cdH1cclxuXHJcblx0Z2VuZXJhdGVQYXJhbWV0ZXIodXJsU2VnbWVudHMpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcclxuXHRcdFx0dXJsU2VnbWVudDogdGhpcy51cmxTZWdtZW50LFxyXG5cdFx0XHRnZXRVcmxTZWdtZW50cygpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFNjaGVtYUhhbmRsZXIge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIHVybFNlZ21lbnQpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHQvLyBkaWZmZXJlbnQgZnJvbSBDcnlzdGFseXMgdG8gdGFsayB0byBEYWVkYWx1cyBwcm9wZXJseVxyXG5cdFx0dGhpcy51cmxTZWdtZW50ID0gbmFtZTtcclxuXHJcblx0XHR0aGlzLmVuZHBvaW50cyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0TmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXRFbmRwb2ludHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbmRwb2ludHM7XHJcblx0fVxyXG5cclxuXHRnZXRVcmxTZWdtZW50KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcclxuXHR9XHJcblxyXG5cdGFkZEVuZHBvaW50KGVuZHBvaW50SGFuZGxlcikge1xyXG5cdFx0dGhpcy5lbmRwb2ludHMucHVzaChlbmRwb2ludEhhbmRsZXIpO1xyXG5cclxuXHRcdHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xyXG5cdH1cclxuXHJcblx0YWRkRW5kcG9pbnRzKGVuZHBvaW50SGFuZGxlcnMpIHtcclxuXHRcdGZvciAobGV0IGVuZHBvaW50SW5kZXggPSAwOyBlbmRwb2ludEluZGV4IDwgZW5kcG9pbnRIYW5kbGVycy5sZW5ndGg7IGVuZHBvaW50SW5kZXgrKykge1xyXG5cdFx0XHR0aGlzLmVuZHBvaW50cy5wdXNoKGVuZHBvaW50SGFuZGxlcnNbZW5kcG9pbnRJbmRleF0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xyXG5cdH1cclxuXHJcblx0Z2VuZXJhdGVTY2hlbWEoYmFzZVVybCkge1xyXG5cdFx0Y29uc3Qgc2NoZW1hID0ge307XHJcblx0XHRzY2hlbWEuZ2V0VXJsU2VnbWVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCB1cmxTZWdtZW50cyA9IFtiYXNlVXJsLCB0aGlzLnVybFNlZ21lbnRdO1xyXG5cclxuXHRcdGZvciAobGV0IGVuZHBvaW50SW5kZXggPSAwOyBlbmRwb2ludEluZGV4IDwgdGhpcy5lbmRwb2ludHMubGVuZ3RoOyBlbmRwb2ludEluZGV4KyspIHtcclxuXHRcdFx0c2NoZW1hW3RoaXMuZW5kcG9pbnRzW2VuZHBvaW50SW5kZXhdLmdldE5hbWUoKV0gPVxyXG5cdFx0XHRcdHRoaXMuZW5kcG9pbnRzW2VuZHBvaW50SW5kZXhdLmdlbmVyYXRlRW5kcG9pbnQodXJsU2VnbWVudHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzY2hlbWE7XHJcblx0fVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGRhZWRhbHVzVXJsOiAnbG9jYWxob3N0JyxcclxuXHRkYWVkYWx1c1BvcnQ6IDc1NzUsXHJcblx0bG9nKG1lc3NhZ2UpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoYENSSVQ6ICR7bWVzc2FnZX1gKTtcclxuXHR9LFxyXG5cclxuXHRjbG9uZShvYmopIHtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG5cdH0sXHJcblxyXG5cdC8vIGNvbmNhdGVuYXRlcyBhbGwgdGhlIHVybFNlZ21lbnRzIGludG8gb25lIGh0dHAgdXJsXHJcblx0Ly8gY291bGQgcHJvYmFibHkgYmUgZG9uZSBhIGJpdCBtb3JlIGNsZWFubHksIGJ1dCB0aGlzIHdpbGwgd29yayBmb3Igbm93XHJcblx0Z2VuZXJhdGVFbmRwb2ludFJlcXVlc3RVcmwodXJsU2VnbWVudHMpIHtcclxuXHRcdC8vIDAgPSBiYXNlVXJsXHJcblx0XHQvLyAxID0gc2NoZW1hVXJsXHJcblx0XHQvLyAyID0gZW5kcG9pbnRVcmxcclxuXHRcdC8vIDMgPSBhcGlWZXJzaW9uXHJcblx0XHRjb25zdCByZXF1ZXN0VXJsID1cclxuXHRcdFx0YCR7dXJsU2VnbWVudHNbMF19LyR7dXJsU2VnbWVudHNbMV19LyR7dXJsU2VnbWVudHNbMl19LyR7dXJsU2VnbWVudHNbM119YDtcclxuXHJcblx0XHRyZXR1cm4gcmVxdWVzdFVybDtcclxuXHR9LFxyXG5cclxuXHQvLyBjb25jYXRlbmF0ZXMgYWxsIHRoZSB1cmxTZWdtZW50cyBpbnRvIG9uZSBodHRwIHVybCB3aXRoIHF1ZXJ5IHBhcmFtZXRlcnNcclxuXHRnZW5lcmF0ZVJlcXVlc3RVcmwodXJsU2VnbWVudHMsIHBhcmFtZXRlcnMpIHtcclxuXHRcdHZhciByZXF1ZXN0VXJsID0gdGhpcy5nZW5lcmF0ZUVuZHBvaW50UmVxdWVzdFVybCh1cmxTZWdtZW50cyk7XHJcblxyXG5cdFx0dmFyIHBhcmFtZXRlck5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIHBhcmFtZXRlcnMgYXMgc3VjaDogJjxwYXJhbV9uYW1lPj08cGFyYW1fdmFsdWU+XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlck5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJlcXVlc3RVcmwgKz0gYCYke3BhcmFtZXRlck5hbWVzW2ldfT0ke3BhcmFtZXRlcnNbcGFyYW1ldGVyTmFtZXNbaV1dfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlcXVlc3RVcmw7XHJcblx0fSxcclxuXHJcblx0Ly8gc2VuZHMgYSB2YW5pbGxhIGpzIHhociByZXF1ZXN0LCBidXQgd3JhcHBlZCBpbiBhbiBFUzYgcHJvbWlzZVxyXG5cdC8vIGluIG9yZGVyIHRvIGFsbG93IGZvciBjb250YWN0aW5nIGEgc2VwYXJhdGUgYXBpIHNlcnZlciwgQ09SUyBoYXMgdG8gYmUgZW5hYmxlZFxyXG5cdC8vIHJldHVybiB0aGUgcHJvbWlzZSBvYmplY3QgZm9yIHRoZSB1c2VyIHRvIHJlc29sdmUgd2hlbiBuZWVkZWRcclxuXHRzZW5kWEhSUmVxdWVzdCh1cmwsIHBhcmFtcykge1xyXG5cdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHRcdHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcclxuXHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiwgYCR7dGhpcy5kYWVkYWx1c1VybH06JHt0aGlzLmRhZWRhbHVzUG9ydH0vJHt1cmx9YCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhgJHt0aGlzLmRhZWRhbHVzVXJsfToke3RoaXMuZGFlZGFsdXNQb3J0fS8ke3VybH1gKTtcclxuXHJcblx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xyXG5cdFx0XHR4aHIuc2VuZChwYXJhbXMpO1xyXG5cclxuXHRcdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPD0gMzAwKSB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZWplY3QodGhpcy5zdGF0dXNUZXh0KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJlamVjdCh0aGlzLnN0YXR1c1RleHQpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHByb21pc2U7XHJcblx0fVxyXG59OyIsImNvbnN0IERlbW9uRWRnZSA9IHJlcXVpcmUoJy4vRGVtb25FZGdlLmpzJyk7XHJcblxyXG5pZih3aW5kb3cuRGVtb25FZGdlICE9PSB1bmRlZmluZWQpIHtcclxuXHR0aHJvdyBuZXcgRXJyb3IoJ0RlbW9uRWRnZSBoYXMgYmVlbiBpbnN0YW50aWF0ZWQgbW9yZSB0aGFuIG9uY2UhJyk7XHJcbn1cclxuXHJcbndpbmRvdy5EZW1vbkVkZ2UgPSBuZXcgRGVtb25FZGdlKCk7XHJcbiJdfQ==
