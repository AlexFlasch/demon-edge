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
/**
 * MIT license
 */

// Callback index.
var count = 0;

/**
 * JSONP handler
 *
 * Options:
 * - prefix {String} callback prefix (defaults to `__jp`)
 * - param {String} qs parameter (defaults to `callback`)
 * - timeout {Number} how long after the request until a timeout error
 *   is emitted (defaults to `15000`)
 *
 * @param {String} url
 * @param {Object} options optional options
 * @return {Object} Returns a response promise and a cancel handler.
 */
var jsonp = function(url, options) {
    options = options || {};

    var prefix = options.prefix || '__jp';
    var param = options.param || 'callback';
    var timeout = options.timeout ? options.timeout : 15000;
    var target = document.getElementsByTagName('script')[0] || document.head;
    var script;
    var timer;
    var cleanup;
    var cancel;
    var promise;
    var noop = function() {};

    // Generate a unique id for the request.
    var id = prefix + (count++);

    cleanup = function() {
        // Remove the script tag.
        if (script && script.parentNode) {
            script.parentNode.removeChild(script);
        }

        window[id] = noop;

        if (timer) {
            clearTimeout(timer);
        }
    };

    promise = new Promise(function(resolve, reject) {
        if (timeout) {
            timer = setTimeout(function() {
                cleanup();
                reject(new Error('Timeout'));
            }, timeout);
        }

        window[id] = function(data) {
            cleanup();
            resolve(data);
        };

        // Add querystring component
        url += (~url.indexOf('?') ? '&' : '?') + param + '=' + encodeURIComponent(id);
        url = url.replace('?&', '?');

        // Create script.
        script = document.createElement('script');
        script.src = url;
        target.parentNode.insertBefore(script, target);

        cancel = function() {
            if (window[id]) {
                cleanup();
                reject(new Error('Canceled'));
            }
        };

    });

    return {
        promise: promise,
        cancel: cancel
    };
};

module.exports = jsonp;


},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],6:[function(require,module,exports){
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

},{"./support/isBuffer":5,"_process":3,"inherits":4}],7:[function(require,module,exports){
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

},{"./Utils":12}],8:[function(require,module,exports){
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

},{"./../data/api.json":1,"./ApiHandler":7,"./EndpointHandler":9,"./ParameterHandler":10,"./SchemaHandler":11,"./Utils":12,"util":6}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = require('./Utils');

module.exports = function () {
	function EndpointHandler(name, urlSegment, version) {
<<<<<<< Updated upstream
		var needsParams = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];
=======
		var needsParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
>>>>>>> Stashed changes

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

},{"./Utils":12}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
'use strict';

<<<<<<< Updated upstream
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
=======
var _jsonpPromise = require('jsonp-promise');

var _jsonpPromise2 = _interopRequireDefault(_jsonpPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
		// 0 = schemaUrl
		// 1 = endpointUrl
		var requestUrl = urlSegments[0] + '/' + urlSegments[1];
=======
		// 0 = endpointUrl
		// 1 = apiVersion
		var requestUrl = '';
		if (this.daedalusUrl === 'localhost' || this.daedalusUrl === '127.0.0.1') {
			requestUrl = this.daedalusUrl + ':' + this.daedalusPort + '/' + urlSegments[0] + '/' + urlSegments[1];
		} else {
			requestUrl = this.daedalusUrl + '/' + urlSegments[0] + '/' + urlSegments[1];
		}
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
		// TODO: remove https:// for production
		return (0, _jsonpPromise2.default)('https://' + url, { param: params }).promise;
>>>>>>> Stashed changes
	}
};

},{"jsonp-promise":2}],13:[function(require,module,exports){
'use strict';

var DemonEdge = require('./DemonEdge.js');

if (window.DemonEdge !== undefined) {
	throw new Error('DemonEdge has been instantiated more than once!');
}

window.DemonEdge = new DemonEdge();

<<<<<<< Updated upstream
},{"./DemonEdge.js":7}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkYXRhL2FwaS5qc29uIiwibm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXRpbC91dGlsLmpzIiwic3JjXFxBcGlIYW5kbGVyLmpzIiwic3JjXFxEZW1vbkVkZ2UuanMiLCJzcmNcXEVuZHBvaW50SGFuZGxlci5qcyIsInNyY1xcUGFyYW1ldGVySGFuZGxlci5qcyIsInNyY1xcU2NoZW1hSGFuZGxlci5qcyIsInNyY1xcVXRpbHMuanMiLCJzcmNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SyxVQUFaO0FBQ0EsSUFGRDs7QUFJQSxPQUFJLElBQUosQ0FBUyxNQUFUO0FBQ0EsR0FwQmUsQ0FBaEI7O0FBc0JBLFNBQU8sT0FBUDtBQUNBO0FBL0RlLENBQWpCOzs7OztBQzFCQSxJQUFNLFlBQVksUUFBUSxnQkFBUixDQUFsQjs7QUFFQSxJQUFHLE9BQU8sU0FBUCxLQUFxQixTQUF4QixFQUFtQztBQUNsQyxPQUFNLElBQUksS0FBSixDQUFVLGlEQUFWLENBQU47QUFDQTs7QUFFRCxPQUFPLFNBQVAsR0FBbUIsSUFBSSxTQUFKLEVBQW5CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzPXtcclxuXHRcImFwaVZlcnNpb25cIjogMSxcclxuXHRcInNjaGVtYXNcIjogW1xyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJGYW50YXN5XCIsXHJcblx0XHRcdFwidXJsU2VnbWVudFwiOiBcIklET1RBMkZhbnRhc3lfNTcwXCIsXHJcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRGYW50YXN5UGxheWVyU3RhdHNcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEZhbnRhc3lQbGF5ZXJTdGF0c1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImZhbnRhc3lMZWFndWVJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkZhbnRhc3lMZWFndWVJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnRUaW1lXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiU3RhcnRUaW1lXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZW5kVGltZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkVuZFRpbWVcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaElEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hpZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInNlcmllc0lEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiU2VyaWVzSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJwbGF5ZXJBY2NvdW50SURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJQbGF5ZXJBY2NvdW50SURcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFBsYXllck9mZmljaWFsSW5mb1wiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0UGxheWVyT2ZmaWNpYWxJbmZvXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiYWNjb3VudElEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiYWNjb3VudGlkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFByb1BsYXllckxpc3RcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFByb1BsYXllckxpc3RcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIk1hdGNoXCIsXHJcblx0XHRcdFwidXJsU2VnbWVudFwiOiBcIklET1RBMk1hdGNoXzU3MFwiLFxyXG5cdFx0XHRcImVuZHBvaW50c1wiOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TGVhZ3VlTGlzdGluZ1wiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TGVhZ3VlTGlzdGluZ1wiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TGl2ZUxlYWd1ZUdhbWVzXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRMaXZlTGVhZ3VlR2FtZXNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaElEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldE1hdGNoRGV0YWlsc1wiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TWF0Y2hEZXRhaWxzXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1hdGNoX2lkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldE1hdGNoSGlzdG9yeVwiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TWF0Y2hIaXN0b3J5XCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImhlcm9JRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImhlcm9faWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJnYW1lTW9kZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImdhbWVfbW9kZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInNraWxsXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic2tpbGxcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtaW5QbGF5ZXJzXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWluX3BsYXllcnNcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJhY2NvdW50X2lkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydEF0TWF0Y2hJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0YXJ0X2F0X21hdGNoX2lkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hlc1JlcXVlc3RlZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1hdGNoZXNfcmVxdWVzdGVkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwidG91cm5hbWVudEdhbWVzT25seVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInRvdXJuYW1lbnRfZ2FtZXNfb25seVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0TWF0Y2hIaXN0b3J5QnlTZXF1ZW5jZU51bWJlclwiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0TWF0Y2hIaXN0b3J5QnlTZXF1ZW5jZU51bVwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydEF0TWF0Y2hTZXF1ZW5jZU51bWJlclwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0YXJ0X2F0X21hdGNoX3NlcV9udW1cIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaGVzUmVxdWVzdGVkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hlc19yZXF1ZXN0ZWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IFwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRTY2hlZHVsZWRMZWFndWVHYW1lc1wiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0U2NoZWR1bGVkTGVhZ3VlR2FtZXNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnREYXRlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZGF0ZV9taW5cIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJlbmREYXRlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZGF0ZV9tYXhcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFRlYW1JbmZvQnlUZWFtSURcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFRlYW1JbmZvQnlUZWFtSURcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwic3RhcnRBdFRlYW1JRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0YXJ0X2F0X3RlYW1faWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJ0ZWFtc1JlcXVlc3RlZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInRlYW1zX3JlcXVlc3RlZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0VG9wTGl2ZUdhbWVcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFRvcExpdmVHYW1lXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwicGFydG5lclwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInBhcnRuZXJcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0VG91cm5hbWVudFBsYXllclN0YXRzXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRUb3VybmFtZW50UGxheWVyU3RhdHNcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJhY2NvdW50X2lkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJsZWFndWVJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZV9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImhlcm9JRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImhlcm9faWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJ0aW1lRnJhbWVcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJ0aW1lX2ZyYW1lXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibWF0Y2hJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1hdGNoX2lkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwicGhhc2VJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInBoYXNlX2lkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRdXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRcIm5hbWVcIjogXCJTdHJlYW1TeXN0ZW1cIixcclxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSURPVEEyU3RyZWFtU3lzdGVtXzU3MFwiLFxyXG5cdFx0XHRcImVuZHBvaW50c1wiOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0QnJvYWRjYXN0ZXJJbmZvXCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRCcm9hZGNhc3RlckluZm9cIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJicm9hZGNhc3RlclN0ZWFtSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJicm9hZGNhc3Rlcl9zdGVhbV9pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIlRpY2tldFwiLFxyXG5cdFx0XHRcInVybFNlZ21lbnRcIjogXCJJRE9UQTJUaWNrZXRfNTcwXCIsXHJcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJTZXRTdGVhbUFjY291bnRQdXJjaGFzZWRcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIlNldFN0ZWFtQWNjb3VudFB1cmNoYXNlZFwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImV2ZW50SURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJldmVudGlkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGVhbUlEXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RlYW1pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJTdGVhbUFjY291bnRWYWxpZEZvckV2ZW50XCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJTdGVhbUFjY291bnRWYWxpZEZvckV2ZW50XCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZXZlbnRJRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImV2ZW50aWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0ZWFtSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJzdGVhbWlkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdFwibmFtZVwiOiBcIkVjb25vbXlcIixcclxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSUVjb25ET1RBMl81NzBcIixcclxuXHRcdFx0XCJlbmRwb2ludHNcIjogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEV2ZW50U3RhdHNGb3JBY2NvdW50XCIsXHJcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRFdmVudFN0YXRzRm9yQWNjb3VudFwiLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImV2ZW50SURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJldmVudGlkXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJhY2NvdW50aWRcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxhbmd1YWdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGFuZ3VhZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEdhbWVJdGVtc1wiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0R2FtZUl0ZW1zXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxhbmd1YWdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGFuZ3VhZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEhlcm9lc1wiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0SGVyb2VzXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxhbmd1YWdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGFuZ3VhZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJpdGVtaXplZE9ubHlcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJpdGVtaXplZG9ubHlcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEl0ZW1JY29uUGF0aFwiLFxyXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0SXRlbUljb25QYXRoXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaWNvbk5hbWVcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJpY29ubmFtZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaWNvblR5cGVcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJpY29udHlwZVwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0UmFyaXRpZXNcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFJhcml0aWVzXCIsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxhbmd1YWdlXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGFuZ3VhZ2VcIixcclxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFRvdXJuYW1lbnRQcml6ZVBvb2xcIixcclxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFRvdXJuYW1lbnRQcml6ZVBvb2xcIixcclxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXHJcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcclxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJsZWFndWVpZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XVxyXG5cdFx0fVxyXG5cdF1cclxufVxyXG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cbiIsInZhciBVdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQXBpSGFuZGxlciB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnNjaGVtYXMgPSBbXTtcclxuXHR9XHJcblxyXG5cdGdldFJlcXVlc3RVcmwoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xyXG5cdH1cclxuXHJcblx0Z2V0QXBpKCkge1xyXG5cdFx0cmV0dXJuIGdlbmVyYXRlQXBpKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NoZW1hcygpIHtcclxuXHRcdHJldHVybiB0aGlzLnNjaGVtYXM7XHJcblx0fVxyXG5cclxuXHRhZGRTY2hlbWEoc2NoZW1hSGFuZGxlcikge1xyXG5cdFx0dGhpcy5zY2hlbWFzLnB1c2goc2NoZW1hSGFuZGxlcik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXHJcblx0fVxyXG5cclxuXHRhZGRTY2hlbWFzKHNjaGVtYUhhbmRsZXJzKSB7XHJcblx0XHRmb3IgKGxldCBzY2hlbWFJbmRleCA9IDA7IHNjaGVtYUluZGV4IDwgc2NoZW1hSGFuZGxlcnMubGVuZ3RoOyBzY2hlbWFJbmRleCsrKSB7XHJcblx0XHRcdHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYUhhbmRsZXJzW3NjaGVtYUluZGV4XSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXHJcblx0fVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVBcGkoYXBpSGFuZGxlcikge1xyXG5cdGNvbnN0IGFwaSA9IHt9O1xyXG5cclxuXHRmb3IgKGxldCBzY2hlbWFJbmRleCA9IDA7IHNjaGVtYUluZGV4IDwgYXBpSGFuZGxlci5zY2hlbWFzLmxlbmd0aDsgc2NoZW1hSW5kZXgrKykge1xyXG5cdFx0YXBpW2FwaUhhbmRsZXIuc2NoZW1hc1tzY2hlbWFJbmRleF0uZ2V0TmFtZSgpXSA9XHJcblx0XHRcdGFwaUhhbmRsZXIuc2NoZW1hc1tzY2hlbWFJbmRleF0uZ2VuZXJhdGVTY2hlbWEoKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBhcGk7XHJcbn0iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcclxuXHJcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKVxyXG52YXIgYXBpSnNvbiA9IHJlcXVpcmUoJy4vLi4vZGF0YS9hcGkuanNvbicpO1xyXG52YXIgQXBpSGFuZGxlciA9IHJlcXVpcmUoJy4vQXBpSGFuZGxlcicpO1xyXG52YXIgU2NoZW1hSGFuZGxlciA9IHJlcXVpcmUoJy4vU2NoZW1hSGFuZGxlcicpO1xyXG52YXIgRW5kcG9pbnRIYW5kbGVyID0gcmVxdWlyZSgnLi9FbmRwb2ludEhhbmRsZXInKTtcclxudmFyIFBhcmFtZXRlckhhbmRsZXIgPSByZXF1aXJlKCcuL1BhcmFtZXRlckhhbmRsZXInKTtcclxuXHJcbnZhciBzdGVhbVdlYkFwaVZlcnNpb24gPSAxO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBEZW1vbkVkZ2Uge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0Ly8gZmluYWxseSBzcGVudCBhZ2VzIG1vdmluZyB0aGF0IG1lc3Mgb2YgYSBqc29uIG9iamVjdCB0byBpdHMgb3duIGpzb24gZmlsZVxyXG5cdFx0dGhpcy5hcGkgPSB0aGlzLmdlbmVyYXRlQXBpU3RydWN0dXJlKCk7XHJcblx0fVxyXG5cclxuXHRnZW5lcmF0ZUFwaVN0cnVjdHVyZSgpIHtcclxuXHRcdGNvbnN0IGFwaUhhbmRsZXIgPSBuZXcgQXBpSGFuZGxlcigpO1xyXG5cclxuXHRcdGNvbnN0IHNjaGVtYXMgPSBbXTtcclxuXHJcblx0XHQvLyBzY2hlbWEtbGV2ZWwgZ2VuZXJhdGlvblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcGlKc29uLnNjaGVtYXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Y29uc3Qgc2NoZW1hID0gYXBpSnNvbi5zY2hlbWFzW2ldO1xyXG5cclxuXHRcdFx0Y29uc3Qgc2NoZW1hT2JqID0gbmV3IFNjaGVtYUhhbmRsZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEudXJsU2VnbWVudCk7XHJcblxyXG5cdFx0XHRjb25zdCBlbmRwb2ludHMgPSBbXTtcclxuXHJcblx0XHRcdC8vIGVuZHBvaW50LWxldmVsIGdlbmVyYXRpb25cclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzY2hlbWEuZW5kcG9pbnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0Y29uc3QgZW5kcG9pbnQgPSBzY2hlbWEuZW5kcG9pbnRzW2pdO1xyXG5cclxuXHRcdFx0XHRjb25zdCBlbmRwb2ludE9iaiA9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEVuZHBvaW50SGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZHBvaW50Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludC51cmxTZWdtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlYW1XZWJBcGlWZXJzaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQucGFyYW1ldGVyUmVxdWlyZWQpO1xyXG5cclxuXHRcdFx0XHRjb25zdCBwYXJhbWV0ZXJzID0gW107XHJcblxyXG5cdFx0XHRcdC8vIHBhcmFtZXRlci1sZXZlbCBnZW5lcmF0aW9uXHJcblx0XHRcdFx0Zm9yIChsZXQgayA9IDA7IGsgPCBlbmRwb2ludC5wYXJhbWV0ZXJzLmxlbmd0aDsgaysrKSB7XHJcblx0XHRcdFx0XHRsZXQgcGFyYW1ldGVyID0gZW5kcG9pbnQucGFyYW1ldGVyc1trXTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBwYXJhbWV0ZXJPYmogPSBuZXcgUGFyYW1ldGVySGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlci51cmxTZWdtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIucmVxdWlyZWQpO1xyXG5cclxuXHRcdFx0XHRcdHBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXJPYmopO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0ZW5kcG9pbnRPYmouYWRkUGFyYW1ldGVycyhwYXJhbWV0ZXJzKTtcclxuXHRcdFx0XHRlbmRwb2ludHMucHVzaChlbmRwb2ludE9iaik7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNjaGVtYU9iai5hZGRFbmRwb2ludHMoZW5kcG9pbnRzKTtcclxuXHRcdFx0c2NoZW1hcy5wdXNoKHNjaGVtYU9iaik7XHJcblx0XHR9XHJcblxyXG5cdFx0YXBpSGFuZGxlci5hZGRTY2hlbWFzKHNjaGVtYXMpO1xyXG5cclxuXHJcblx0XHRjb25zdCB0ZW1wID0gYXBpSGFuZGxlci5nZXRBcGkoKTtcclxuXHJcblx0XHR1dGlsLmluc3BlY3QodGVtcCk7XHJcblxyXG5cdFx0cmV0dXJuIHRlbXA7XHJcblx0fVxyXG5cclxuXHRzZXREYWVkYWx1c1VybChkb21haW4sIHBvcnQpIHtcclxuXHRcdFV0aWxzLmRhZWRhbHVzVXJsID0gZG9tYWluO1xyXG5cdFx0VXRpbHMuZGFlZGFsdXNQb3J0ID0gcG9ydDtcclxuXHR9XHJcbn07XHJcbiIsInZhciBVdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRW5kcG9pbnRIYW5kbGVyIHtcclxuXHRjb25zdHJ1Y3RvcihuYW1lLCB1cmxTZWdtZW50LCB2ZXJzaW9uLCBuZWVkc1BhcmFtcyA9IHRydWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHQvLyB0aGlzIGlzIGRpZmZlcmVudCBmcm9tIENyeXN0YWx5cyBpbiBvcmRlciB0byB0YWxrIHRvIERhZWRhbHVzIHByb3Blcmx5XHJcblx0XHR0aGlzLnVybFNlZ21lbnQgPSBuYW1lO1xyXG5cdFx0dGhpcy5uZWVkc1BhcmFtcyA9IG5lZWRzUGFyYW1zO1xyXG5cclxuXHRcdHRoaXMucGFyYW1ldGVycyA9IFtdO1xyXG5cdH1cclxuXHJcblx0Z2V0TmFtZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHRnZXRQYXJhbWV0ZXJzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGFyYW1ldGVycztcclxuXHR9XHJcblxyXG5cdGdldFVybFNlZ21lbnQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xyXG5cdH1cclxuXHJcblx0Z2V0U3RlYW1XZWJBcGlWZXJzaW9uKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcclxuXHR9XHJcblxyXG5cdG5lZWRzUGFyYW1ldGVycygpIHtcclxuXHRcdHJldHVybiB0aGlzLm5lZWRzUGFyYW1ldGVycztcclxuXHR9XHJcblxyXG5cdGFkZFBhcmFtZXRlcihwYXJhbWV0ZXJIYW5kbGVyKSB7XHJcblx0XHR0aGlzLnBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXJIYW5kbGVyKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcclxuXHR9XHJcblxyXG5cdGFkZFBhcmFtZXRlcnMocGFyYW1ldGVySGFuZGxlcnMpIHtcclxuXHRcdGZvciAobGV0IHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCBwYXJhbWV0ZXJIYW5kbGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcclxuXHRcdFx0dGhpcy5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVySGFuZGxlcnNbcGFyYW1ldGVySW5kZXhdKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcclxuXHR9XHJcblxyXG5cdGdlbmVyYXRlRW5kcG9pbnQoc2VnbWVudHMpIHtcclxuXHRcdGNvbnN0IHVybFNlZ21lbnRzID0gc2VnbWVudHMuc2xpY2UoMCk7IC8vIGNyZWF0ZSBzaGFsbG93IGNvcHkgb2YgYXJyYXlcclxuXHRcdHVybFNlZ21lbnRzLnB1c2godGhpcy51cmxTZWdtZW50KTtcclxuXHRcdHVybFNlZ21lbnRzLnB1c2godGhpcy52ZXJzaW9uKTtcclxuXHJcblx0XHRjb25zdCBlbmRwb2ludCA9IHt9O1xyXG5cdFx0ZW5kcG9pbnQudmFsdWVzID0ge307XHJcblx0XHRlbmRwb2ludC51cmxTZWdtZW50cyA9IHVybFNlZ21lbnRzO1xyXG5cdFx0ZW5kcG9pbnQuZ2V0VXJsU2VnbWVudHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHBhcmFtZXRlckluZGV4ID0gMDtcclxuXHRcdGxldCBwYXJhbWV0ZXI7XHJcblx0XHRsZXQgZW5kcG9pbnRQYXJhbTtcclxuXHJcblx0XHRpZiAodGhpcy5uZWVkc1BhcmFtcykgeyAvLyBnZW5lcmF0ZSB0aGUgZW5kcG9pbnQgd2l0aCB0aGUgcGFyYW1ldGVycyBidXQgbm8gc2VuZFJlcXVlc3QgZnVuY3Rpb25cclxuXHRcdFx0Zm9yIChwYXJhbWV0ZXJJbmRleCA9IDA7IHBhcmFtZXRlckluZGV4IDwgdGhpcy5wYXJhbWV0ZXJzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXgrKykge1xyXG5cdFx0XHRcdHBhcmFtZXRlciA9IHRoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2VuZXJhdGVQYXJhbWV0ZXIodXJsU2VnbWVudHMpO1xyXG5cdFx0XHRcdGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXSA9IHBhcmFtZXRlcjtcclxuXHRcdFx0XHRlbmRwb2ludFBhcmFtID0gZW5kcG9pbnRbdGhpcy5wYXJhbWV0ZXJzW3BhcmFtZXRlckluZGV4XS5nZXROYW1lKCldO1xyXG5cclxuXHRcdFx0XHQvLyBpbW1lZGlhdGVseSBpbnZva2VkIGZ1bmN0aW9uIHRvIHNhdmUgdGhlIHByb3BlciByZWZlcmVuY2VzIHRvIHRoZSBwYXJhbWV0ZXIgZnVuY3Rpb25cclxuXHRcdFx0XHQvLyB1c2luZyBhbiBJSUZFIGlzIHByZXR0eSB1Z2x5LCBidXQgdGhlIGJlc3Qgd2F5IEkgY291bGQgY29tZSB1cCB3aXRoIHRvIGR5bmFtaWNhbGx5XHJcblx0XHRcdFx0Ly8gZ2VuZXJhdGUgcGFyYW1ldGVyIGZ1bmN0aW9ucyBmb3IgZWFjaCBlbmRwb2ludCBhcyBuZWVkZWQuLi5cclxuXHRcdFx0XHQoZnVuY3Rpb24ocGFyYW0pIHtcclxuXHRcdFx0XHRcdGVuZHBvaW50W3BhcmFtLm5hbWVdID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0ZW5kcG9pbnQudmFsdWVzW3BhcmFtLnVybFNlZ21lbnRdID0gdmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdFx0ZW5kcG9pbnQuc2VuZFJlcXVlc3QgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWVzdFVybCA9IFV0aWxzLmdlbmVyYXRlUmVxdWVzdFVybCh1cmxTZWdtZW50cywgZW5kcG9pbnQudmFsdWVzKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBwcm9taXNlID0gVXRpbHMuc2VuZFhIUlJlcXVlc3QocmVxdWVzdFVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KHBhcmFtZXRlcikpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRlbmRwb2ludC5yZXF1ZXN0YWJsZSA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIHsgLy8gZ2VuZXJhdGUgdGhlIGVuZHBvaW50IHdpdGggdGhlIHBhcmFtZXRlcnMgYnV0IGFsc28gd2l0aCBhIHNlbmRSZXF1ZXN0IGZ1bmN0aW9uXHJcblx0XHRcdGZvciAocGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IHRoaXMucGFyYW1ldGVycy5sZW5ndGg7IHBhcmFtZXRlckluZGV4KyspIHtcclxuXHRcdFx0XHRwYXJhbWV0ZXIgPSB0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdlbmVyYXRlUGFyYW1ldGVyKHVybFNlZ21lbnRzKTtcclxuXHRcdFx0XHRlbmRwb2ludFt0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdldE5hbWUoKV0gPSBwYXJhbWV0ZXI7XHJcblx0XHRcdFx0ZW5kcG9pbnRQYXJhbSA9IGVuZHBvaW50W3RoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2V0TmFtZSgpXTtcclxuXHJcblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgaW52b2tlZCBmdW5jdGlvbiB0byBzYXZlIHRoZSBwcm9wZXIgcmVmZXJlbmNlcyB0byB0aGUgcGFyYW1ldGVyIGZ1bmN0aW9uXHJcblx0XHRcdFx0KGZ1bmN0aW9uKHBhcmFtKSB7XHJcblx0XHRcdFx0XHRlbmRwb2ludFtwYXJhbS5uYW1lXSA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdGVuZHBvaW50LnZhbHVlc1twYXJhbS51cmxTZWdtZW50XSA9IHZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRcdGVuZHBvaW50LnNlbmRSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RVcmwgPSBVdGlscy5nZW5lcmF0ZVJlcXVlc3RVcmwodXJsU2VnbWVudHMsIGVuZHBvaW50LnZhbHVlcyk7XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBwcm9taXNlID0gVXRpbHMuc2VuZFhIUlJlcXVlc3QocmVxdWVzdFVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHRlbmRwb2ludC52YWx1ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KHBhcmFtZXRlcikpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRlbmRwb2ludC5yZXF1ZXN0YWJsZSA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGVuZHBvaW50O1xyXG5cdH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIFBhcmFtZXRlckhhbmRsZXIge1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsIHVybFNlZ21lbnQsIHJlcXVpcmVkKSB7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy51cmxTZWdtZW50ID0gbmFtZTtcclxuXHRcdHRoaXMucmVxdWlyZWQgPSByZXF1aXJlZDtcclxuXHR9XHJcblxyXG5cdGdldE5hbWUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Z2V0VXJsU2VnbWVudCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XHJcblx0fVxyXG5cclxuXHRpc1JlcXVpcmVkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucmVxdWlyZWQ7XHJcblx0fVxyXG5cclxuXHRnZW5lcmF0ZVBhcmFtZXRlcih1cmxTZWdtZW50cykge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bmFtZTogdGhpcy5uYW1lLFxyXG5cdFx0XHR1cmxTZWdtZW50OiB0aGlzLnVybFNlZ21lbnQsXHJcblx0XHRcdGdldFVybFNlZ21lbnRzKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgU2NoZW1hSGFuZGxlciB7XHJcblx0Y29uc3RydWN0b3IobmFtZSwgdXJsU2VnbWVudCkge1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdC8vIGRpZmZlcmVudCBmcm9tIENyeXN0YWx5cyB0byB0YWxrIHRvIERhZWRhbHVzIHByb3Blcmx5XHJcblx0XHR0aGlzLnVybFNlZ21lbnQgPSBuYW1lO1xyXG5cclxuXHRcdHRoaXMuZW5kcG9pbnRzID0gW107XHJcblx0fVxyXG5cclxuXHRnZXROYW1lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdGdldEVuZHBvaW50cygpIHtcclxuXHRcdHJldHVybiB0aGlzLmVuZHBvaW50cztcclxuXHR9XHJcblxyXG5cdGdldFVybFNlZ21lbnQoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xyXG5cdH1cclxuXHJcblx0YWRkRW5kcG9pbnQoZW5kcG9pbnRIYW5kbGVyKSB7XHJcblx0XHR0aGlzLmVuZHBvaW50cy5wdXNoKGVuZHBvaW50SGFuZGxlcik7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXHJcblx0fVxyXG5cclxuXHRhZGRFbmRwb2ludHMoZW5kcG9pbnRIYW5kbGVycykge1xyXG5cdFx0Zm9yIChsZXQgZW5kcG9pbnRJbmRleCA9IDA7IGVuZHBvaW50SW5kZXggPCBlbmRwb2ludEhhbmRsZXJzLmxlbmd0aDsgZW5kcG9pbnRJbmRleCsrKSB7XHJcblx0XHRcdHRoaXMuZW5kcG9pbnRzLnB1c2goZW5kcG9pbnRIYW5kbGVyc1tlbmRwb2ludEluZGV4XSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXHJcblx0fVxyXG5cclxuXHRnZW5lcmF0ZVNjaGVtYSgpIHtcclxuXHRcdGNvbnN0IHNjaGVtYSA9IHt9O1xyXG5cdFx0c2NoZW1hLmdldFVybFNlZ21lbnRzID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgdXJsU2VnbWVudHMgPSBbdGhpcy51cmxTZWdtZW50XTtcclxuXHJcblx0XHRmb3IgKGxldCBlbmRwb2ludEluZGV4ID0gMDsgZW5kcG9pbnRJbmRleCA8IHRoaXMuZW5kcG9pbnRzLmxlbmd0aDsgZW5kcG9pbnRJbmRleCsrKSB7XHJcblx0XHRcdHNjaGVtYVt0aGlzLmVuZHBvaW50c1tlbmRwb2ludEluZGV4XS5nZXROYW1lKCldID1cclxuXHRcdFx0XHR0aGlzLmVuZHBvaW50c1tlbmRwb2ludEluZGV4XS5nZW5lcmF0ZUVuZHBvaW50KHVybFNlZ21lbnRzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gc2NoZW1hO1xyXG5cdH1cclxufTsiLCJ2YXIgbG9hZEpTT05QID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciB1bmlxdWUgPSAwO1xyXG4gIHJldHVybiBmdW5jdGlvbih1cmwsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcbiAgICAvLyBJTklUXHJcbiAgICB2YXIgbmFtZSA9IGBfanNvbnBfJHt1bmlxdWUrK31gO1xyXG4gICAgaWYgKHVybC5tYXRjaCgvXFw/LykpIHVybCArPSBgJmNhbGxiYWNrPVwiJHtuYW1lfWA7XHJcbiAgICBlbHNlIHVybCArPSBgP2NhbGxiYWNrPVwiJHtuYW1lfWA7XHJcbiAgICBcclxuICAgIC8vIENyZWF0ZSBzY3JpcHRcclxuICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICBzY3JpcHQuc3JjID0gdXJsO1xyXG4gICAgXHJcbiAgICAvLyBTZXR1cCBoYW5kbGVyXHJcbiAgICB3aW5kb3dbbmFtZV0gPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGNhbGxiYWNrLmNhbGwoKGNvbnRleHQgfHwgd2luZG93KSwgZGF0YSk7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0ucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgc2NyaXB0ID0gbnVsbDtcclxuICAgICAgZGVsZXRlIHdpbmRvd1tuYW1lXTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIExvYWQgSlNPTlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gIH07XHJcbn0oKSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRkYWVkYWx1c1VybDogJ2xvY2FsaG9zdCcsXHJcblx0ZGFlZGFsdXNQb3J0OiA4MCxcclxuXHRsb2cobWVzc2FnZSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcihgQ1JJVDogJHttZXNzYWdlfWApO1xyXG5cdH0sXHJcblxyXG5cdGNsb25lKG9iaikge1xyXG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcblx0fSxcclxuXHJcblx0Ly8gY29uY2F0ZW5hdGVzIGFsbCB0aGUgdXJsU2VnbWVudHMgaW50byBvbmUgaHR0cCB1cmxcclxuXHQvLyBjb3VsZCBwcm9iYWJseSBiZSBkb25lIGEgYml0IG1vcmUgY2xlYW5seSwgYnV0IHRoaXMgd2lsbCB3b3JrIGZvciBub3dcclxuXHRnZW5lcmF0ZUVuZHBvaW50UmVxdWVzdFVybCh1cmxTZWdtZW50cykge1xyXG5cdFx0Ly8gMCA9IHNjaGVtYVVybFxyXG5cdFx0Ly8gMSA9IGVuZHBvaW50VXJsXHJcblx0XHRjb25zdCByZXF1ZXN0VXJsID1cclxuXHRcdFx0YCR7dXJsU2VnbWVudHNbMF19LyR7dXJsU2VnbWVudHNbMV19YDtcclxuXHJcblx0XHRyZXR1cm4gcmVxdWVzdFVybDtcclxuXHR9LFxyXG5cclxuXHQvLyBjb25jYXRlbmF0ZXMgYWxsIHRoZSB1cmxTZWdtZW50cyBpbnRvIG9uZSBodHRwIHVybCB3aXRoIHF1ZXJ5IHBhcmFtZXRlcnNcclxuXHRnZW5lcmF0ZVJlcXVlc3RVcmwodXJsU2VnbWVudHMsIHBhcmFtZXRlcnMpIHtcclxuXHRcdHZhciByZXF1ZXN0VXJsID0gdGhpcy5nZW5lcmF0ZUVuZHBvaW50UmVxdWVzdFVybCh1cmxTZWdtZW50cyk7XHJcblxyXG5cdFx0dmFyIHBhcmFtZXRlck5hbWVzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycyk7XHJcblxyXG5cdFx0Ly8gYXBwZW5kIHBhcmFtZXRlcnMgYXMgc3VjaDogJjxwYXJhbV9uYW1lPj08cGFyYW1fdmFsdWU+XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlck5hbWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHJlcXVlc3RVcmwgKz0gYCYke3BhcmFtZXRlck5hbWVzW2ldfT0ke3BhcmFtZXRlcnNbcGFyYW1ldGVyTmFtZXNbaV1dfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlcXVlc3RVcmw7XHJcblx0fSxcclxuXHJcblx0Ly8gc2VuZHMgYSB2YW5pbGxhIGpzIHhociByZXF1ZXN0LCBidXQgd3JhcHBlZCBpbiBhbiBFUzYgcHJvbWlzZVxyXG5cdC8vIGluIG9yZGVyIHRvIGFsbG93IGZvciBjb250YWN0aW5nIGEgc2VwYXJhdGUgYXBpIHNlcnZlciwgQ09SUyBoYXMgdG8gYmUgZW5hYmxlZFxyXG5cdC8vIHJldHVybiB0aGUgcHJvbWlzZSBvYmplY3QgZm9yIHRoZSB1c2VyIHRvIHJlc29sdmUgd2hlbiBuZWVkZWRcclxuXHRzZW5kWEhSUmVxdWVzdCh1cmwsIHBhcmFtcykge1xyXG5cdFx0Y29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhgZGFlZGFsdXMuZmxhc2NoZXIubmV0LyR7dXJsfWApO1xyXG5cclxuXHRcdFx0eGhyLm9wZW4oJ1BPU1QnLCBgaHR0cDovL2RhZWRhbHVzLmZsYXNjaGVyLm5ldC8ke3VybH1gLCB0cnVlKTtcclxuXHJcblx0XHRcdHhoci5vbmxvYWQgPSBmdW5jdGlvbiBvbmxvYWQoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8PSAzMDApIHtcclxuXHRcdFx0XHRcdHJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlamVjdCh0aGlzLnN0YXR1c1RleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHhoci5vbmVycm9yID0gZnVuY3Rpb24gb25lcnJvcigpIHtcclxuXHRcdFx0XHRyZWplY3QodGhpcy5zdGF0dXNUZXh0KTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHhoci5zZW5kKHBhcmFtcyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXR1cm4gcHJvbWlzZTtcclxuXHR9XHJcbn07IiwiY29uc3QgRGVtb25FZGdlID0gcmVxdWlyZSgnLi9EZW1vbkVkZ2UuanMnKTtcclxuXHJcbmlmKHdpbmRvdy5EZW1vbkVkZ2UgIT09IHVuZGVmaW5lZCkge1xyXG5cdHRocm93IG5ldyBFcnJvcignRGVtb25FZGdlIGhhcyBiZWVuIGluc3RhbnRpYXRlZCBtb3JlIHRoYW4gb25jZSEnKTtcclxufVxyXG5cclxud2luZG93LkRlbW9uRWRnZSA9IG5ldyBEZW1vbkVkZ2UoKTtcclxuIl19
=======
},{"./DemonEdge.js":8}]},{},[13])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkYXRhL2FwaS5qc29uIiwibm9kZV9tb2R1bGVzL2pzb25wLXByb21pc2UvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V0aWwvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXRpbC9zdXBwb3J0L2lzQnVmZmVyQnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy91dGlsL3V0aWwuanMiLCJzcmMvQXBpSGFuZGxlci5qcyIsInNyYy9EZW1vbkVkZ2UuanMiLCJzcmMvRW5kcG9pbnRIYW5kbGVyLmpzIiwic3JjL1BhcmFtZXRlckhhbmRsZXIuanMiLCJzcmMvU2NoZW1hSGFuZGxlci5qcyIsInNyYy9VdGlscy5qcyIsInNyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LFFBQVEsZ0JBQVIsQ0FBbEI7O0FBRUEsSUFBRyxPQUFPLFNBQVAsS0FBcUIsU0FBeEIsRUFBbUM7QUFDbEMsT0FBTSxJQUFJLEtBQUosQ0FBVSxpREFBVixDQUFOO0FBQ0E7O0FBRUQsT0FBTyxTQUFQLEdBQW1CLElBQUksU0FBSixFQUFuQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cz17XG5cdFwiYXBpVmVyc2lvblwiOiAxLFxuXHRcInNjaGVtYXNcIjogW1xuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcIkZhbnRhc3lcIixcblx0XHRcdFwidXJsU2VnbWVudFwiOiBcIklET1RBMkZhbnRhc3lfNTcwXCIsXG5cdFx0XHRcImVuZHBvaW50c1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRGYW50YXN5UGxheWVyU3RhdHNcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRGYW50YXN5UGxheWVyU3RhdHNcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZmFudGFzeUxlYWd1ZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkZhbnRhc3lMZWFndWVJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXJ0VGltZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJTdGFydFRpbWVcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZW5kVGltZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJFbmRUaW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hpZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzZXJpZXNJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJTZXJpZXNJRFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJwbGF5ZXJBY2NvdW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiUGxheWVyQWNjb3VudElEXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRQbGF5ZXJPZmZpY2lhbEluZm9cIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRQbGF5ZXJPZmZpY2lhbEluZm9cIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiYWNjb3VudElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImFjY291bnRpZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRQcm9QbGF5ZXJMaXN0XCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0UHJvUGxheWVyTGlzdFwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcIk1hdGNoXCIsXG5cdFx0XHRcInVybFNlZ21lbnRcIjogXCJJRE9UQTJNYXRjaF81NzBcIixcblx0XHRcdFwiZW5kcG9pbnRzXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldExlYWd1ZUxpc3RpbmdcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRMZWFndWVMaXN0aW5nXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW11cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldExpdmVMZWFndWVHYW1lc1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldExpdmVMZWFndWVHYW1lc1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGVhZ3VlX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldE1hdGNoRGV0YWlsc1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldE1hdGNoRGV0YWlsc1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1hdGNoX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldE1hdGNoSGlzdG9yeVwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldE1hdGNoSGlzdG9yeVwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaGVyb0lEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImhlcm9faWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZ2FtZU1vZGVcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZ2FtZV9tb2RlXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInNraWxsXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInNraWxsXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1pblBsYXllcnNcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWluX3BsYXllcnNcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiYWNjb3VudElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImFjY291bnRfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGVhZ3VlX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXJ0QXRNYXRjaElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0YXJ0X2F0X21hdGNoX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoZXNSZXF1ZXN0ZWRcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hlc19yZXF1ZXN0ZWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwidG91cm5hbWVudEdhbWVzT25seVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJ0b3VybmFtZW50X2dhbWVzX29ubHlcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldE1hdGNoSGlzdG9yeUJ5U2VxdWVuY2VOdW1iZXJcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRNYXRjaEhpc3RvcnlCeVNlcXVlbmNlTnVtXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydEF0TWF0Y2hTZXF1ZW5jZU51bWJlclwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJzdGFydF9hdF9tYXRjaF9zZXFfbnVtXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIm1hdGNoZXNSZXF1ZXN0ZWRcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibWF0Y2hlc19yZXF1ZXN0ZWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBcImZhbHNlXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRTY2hlZHVsZWRMZWFndWVHYW1lc1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFNjaGVkdWxlZExlYWd1ZUdhbWVzXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGFydERhdGVcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZGF0ZV9taW5cIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiZW5kRGF0ZVwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJkYXRlX21heFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0VGVhbUluZm9CeVRlYW1JRFwiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFRlYW1JbmZvQnlUZWFtSURcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0YXJ0QXRUZWFtSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RhcnRfYXRfdGVhbV9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJ0ZWFtc1JlcXVlc3RlZFwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJ0ZWFtc19yZXF1ZXN0ZWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFRvcExpdmVHYW1lXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0VG9wTGl2ZUdhbWVcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwicGFydG5lclwiLFxuXHRcdFx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJwYXJ0bmVyXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFRvdXJuYW1lbnRQbGF5ZXJTdGF0c1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldFRvdXJuYW1lbnRQbGF5ZXJTdGF0c1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiYWNjb3VudF9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxlYWd1ZUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxlYWd1ZV9pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJoZXJvSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiaGVyb19pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJ0aW1lRnJhbWVcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwidGltZV9mcmFtZVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJtYXRjaElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIm1hdGNoX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInBoYXNlSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwicGhhc2VfaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJuYW1lXCI6IFwiU3RyZWFtU3lzdGVtXCIsXG5cdFx0XHRcInVybFNlZ21lbnRcIjogXCJJRE9UQTJTdHJlYW1TeXN0ZW1fNTcwXCIsXG5cdFx0XHRcImVuZHBvaW50c1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRCcm9hZGNhc3RlckluZm9cIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRCcm9hZGNhc3RlckluZm9cIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiYnJvYWRjYXN0ZXJTdGVhbUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImJyb2FkY2FzdGVyX3N0ZWFtX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGVhZ3VlX2lkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdFwibmFtZVwiOiBcIlRpY2tldFwiLFxuXHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiSURPVEEyVGlja2V0XzU3MFwiLFxuXHRcdFx0XCJlbmRwb2ludHNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiU2V0U3RlYW1BY2NvdW50UHVyY2hhc2VkXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiU2V0U3RlYW1BY2NvdW50UHVyY2hhc2VkXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImV2ZW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiZXZlbnRpZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcInN0ZWFtSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwic3RlYW1pZFwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJTdGVhbUFjY291bnRWYWxpZEZvckV2ZW50XCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiU3RlYW1BY2NvdW50VmFsaWRGb3JFdmVudFwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJldmVudElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImV2ZW50aWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJzdGVhbUlEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcInN0ZWFtaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcIm5hbWVcIjogXCJFY29ub215XCIsXG5cdFx0XHRcInVybFNlZ21lbnRcIjogXCJJRWNvbkRPVEEyXzU3MFwiLFxuXHRcdFx0XCJlbmRwb2ludHNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0RXZlbnRTdGF0c0ZvckFjY291bnRcIixcblx0XHRcdFx0XHRcInVybFNlZ21lbnRcIjogXCJHZXRFdmVudFN0YXRzRm9yQWNjb3VudFwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInBhcmFtZXRlcnNcIjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJldmVudElEXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImV2ZW50aWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiB0cnVlXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJhY2NvdW50SURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiYWNjb3VudGlkXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGFuZ3VhZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGFuZ3VhZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEdhbWVJdGVtc1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEdhbWVJdGVtc1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGFuZ3VhZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGFuZ3VhZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldEhlcm9lc1wiLFxuXHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIkdldEhlcm9lc1wiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGFuZ3VhZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGFuZ3VhZ2VcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaXRlbWl6ZWRPbmx5XCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcIml0ZW1pemVkb25seVwiLFxuXHRcdFx0XHRcdFx0XHRcInJlcXVpcmVkXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJuYW1lXCI6IFwiR2V0SXRlbUljb25QYXRoXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0SXRlbUljb25QYXRoXCIsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJSZXF1aXJlZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImljb25OYW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImljb25uYW1lXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogdHJ1ZVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiaWNvblR5cGVcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiaWNvbnR5cGVcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwibmFtZVwiOiBcIkdldFJhcml0aWVzXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0UmFyaXRpZXNcIixcblx0XHRcdFx0XHRcInBhcmFtZXRlclJlcXVpcmVkXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyc1wiOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFwibmFtZVwiOiBcImxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwidXJsU2VnbWVudFwiOiBcImxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcdFwicmVxdWlyZWRcIjogZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcIm5hbWVcIjogXCJHZXRUb3VybmFtZW50UHJpemVQb29sXCIsXG5cdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwiR2V0VG91cm5hbWVudFByaXplUG9vbFwiLFxuXHRcdFx0XHRcdFwicGFyYW1ldGVyUmVxdWlyZWRcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJwYXJhbWV0ZXJzXCI6IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwibGVhZ3VlSURcIixcblx0XHRcdFx0XHRcdFx0XCJ1cmxTZWdtZW50XCI6IFwibGVhZ3VlaWRcIixcblx0XHRcdFx0XHRcdFx0XCJyZXF1aXJlZFwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0XVxufVxuIiwiLyoqXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8vIENhbGxiYWNrIGluZGV4LlxudmFyIGNvdW50ID0gMDtcblxuLyoqXG4gKiBKU09OUCBoYW5kbGVyXG4gKlxuICogT3B0aW9uczpcbiAqIC0gcHJlZml4IHtTdHJpbmd9IGNhbGxiYWNrIHByZWZpeCAoZGVmYXVsdHMgdG8gYF9fanBgKVxuICogLSBwYXJhbSB7U3RyaW5nfSBxcyBwYXJhbWV0ZXIgKGRlZmF1bHRzIHRvIGBjYWxsYmFja2ApXG4gKiAtIHRpbWVvdXQge051bWJlcn0gaG93IGxvbmcgYWZ0ZXIgdGhlIHJlcXVlc3QgdW50aWwgYSB0aW1lb3V0IGVycm9yXG4gKiAgIGlzIGVtaXR0ZWQgKGRlZmF1bHRzIHRvIGAxNTAwMGApXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb3B0aW9uYWwgb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fSBSZXR1cm5zIGEgcmVzcG9uc2UgcHJvbWlzZSBhbmQgYSBjYW5jZWwgaGFuZGxlci5cbiAqL1xudmFyIGpzb25wID0gZnVuY3Rpb24odXJsLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB2YXIgcHJlZml4ID0gb3B0aW9ucy5wcmVmaXggfHwgJ19fanAnO1xuICAgIHZhciBwYXJhbSA9IG9wdGlvbnMucGFyYW0gfHwgJ2NhbGxiYWNrJztcbiAgICB2YXIgdGltZW91dCA9IG9wdGlvbnMudGltZW91dCA/IG9wdGlvbnMudGltZW91dCA6IDE1MDAwO1xuICAgIHZhciB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0gfHwgZG9jdW1lbnQuaGVhZDtcbiAgICB2YXIgc2NyaXB0O1xuICAgIHZhciB0aW1lcjtcbiAgICB2YXIgY2xlYW51cDtcbiAgICB2YXIgY2FuY2VsO1xuICAgIHZhciBwcm9taXNlO1xuICAgIHZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGlkIGZvciB0aGUgcmVxdWVzdC5cbiAgICB2YXIgaWQgPSBwcmVmaXggKyAoY291bnQrKyk7XG5cbiAgICBjbGVhbnVwID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgc2NyaXB0IHRhZy5cbiAgICAgICAgaWYgKHNjcmlwdCAmJiBzY3JpcHQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvd1tpZF0gPSBub29wO1xuXG4gICAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RpbWVvdXQnKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvd1tpZF0gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEFkZCBxdWVyeXN0cmluZyBjb21wb25lbnRcbiAgICAgICAgdXJsICs9ICh+dXJsLmluZGV4T2YoJz8nKSA/ICcmJyA6ICc/JykgKyBwYXJhbSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChpZCk7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKCc/JicsICc/Jyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHNjcmlwdC5cbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIHRhcmdldCk7XG5cbiAgICAgICAgY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAod2luZG93W2lkXSkge1xuICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDYW5jZWxlZCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgY2FuY2VsOiBjYW5jZWxcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBqc29ucDtcblxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlcihhcmcpIHtcbiAgcmV0dXJuIGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0J1xuICAgICYmIHR5cGVvZiBhcmcuY29weSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcuZmlsbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIHR5cGVvZiBhcmcucmVhZFVJbnQ4ID09PSAnZnVuY3Rpb24nO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cbiIsInZhciBVdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBcGlIYW5kbGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zY2hlbWFzID0gW107XG5cdH1cblxuXHRnZXRSZXF1ZXN0VXJsKCkge1xuXHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdH1cblxuXHRnZXRBcGkoKSB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlQXBpKHRoaXMpO1xuXHR9XG5cblx0Z2V0U2NoZW1hcygpIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFzO1xuXHR9XG5cblx0YWRkU2NoZW1hKHNjaGVtYUhhbmRsZXIpIHtcblx0XHR0aGlzLnNjaGVtYXMucHVzaChzY2hlbWFIYW5kbGVyKTtcblxuXHRcdHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xuXHR9XG5cblx0YWRkU2NoZW1hcyhzY2hlbWFIYW5kbGVycykge1xuXHRcdGZvciAobGV0IHNjaGVtYUluZGV4ID0gMDsgc2NoZW1hSW5kZXggPCBzY2hlbWFIYW5kbGVycy5sZW5ndGg7IHNjaGVtYUluZGV4KyspIHtcblx0XHRcdHRoaXMuc2NoZW1hcy5wdXNoKHNjaGVtYUhhbmRsZXJzW3NjaGVtYUluZGV4XSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXG5cdH1cbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQXBpKGFwaUhhbmRsZXIpIHtcblx0Y29uc3QgYXBpID0ge307XG5cblx0Zm9yIChsZXQgc2NoZW1hSW5kZXggPSAwOyBzY2hlbWFJbmRleCA8IGFwaUhhbmRsZXIuc2NoZW1hcy5sZW5ndGg7IHNjaGVtYUluZGV4KyspIHtcblx0XHRhcGlbYXBpSGFuZGxlci5zY2hlbWFzW3NjaGVtYUluZGV4XS5nZXROYW1lKCldID1cblx0XHRcdGFwaUhhbmRsZXIuc2NoZW1hc1tzY2hlbWFJbmRleF0uZ2VuZXJhdGVTY2hlbWEoKTtcblx0fVxuXG5cdHJldHVybiBhcGk7XG59IiwidmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vVXRpbHMnKVxudmFyIGFwaUpzb24gPSByZXF1aXJlKCcuLy4uL2RhdGEvYXBpLmpzb24nKTtcbnZhciBBcGlIYW5kbGVyID0gcmVxdWlyZSgnLi9BcGlIYW5kbGVyJyk7XG52YXIgU2NoZW1hSGFuZGxlciA9IHJlcXVpcmUoJy4vU2NoZW1hSGFuZGxlcicpO1xudmFyIEVuZHBvaW50SGFuZGxlciA9IHJlcXVpcmUoJy4vRW5kcG9pbnRIYW5kbGVyJyk7XG52YXIgUGFyYW1ldGVySGFuZGxlciA9IHJlcXVpcmUoJy4vUGFyYW1ldGVySGFuZGxlcicpO1xuXG52YXIgc3RlYW1XZWJBcGlWZXJzaW9uID0gMTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBEZW1vbkVkZ2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHQvLyBwbGVhc2UgZm9yZ2l2ZSBtZS4gdGhpcyB3aWxsIHByb2JhYmx5IGFsbCBiZSBoaWRkZW4gaW4gYSBqc29uIGZpbGUgdG8gYmUgcGFyc2VkIGV2ZW50dWFsbHkuXG5cdFx0dGhpcy5hcGkgPSB0aGlzLmdlbmVyYXRlQXBpU3RydWN0dXJlKCk7XG5cdH1cblxuXHRnZW5lcmF0ZUFwaVN0cnVjdHVyZSgpIHtcblx0XHRjb25zdCBhcGlIYW5kbGVyID0gbmV3IEFwaUhhbmRsZXIoKTtcblxuXHRcdGNvbnN0IHNjaGVtYXMgPSBbXTtcblxuXHRcdC8vIHNjaGVtYS1sZXZlbCBnZW5lcmF0aW9uXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcGlKc29uLnNjaGVtYXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBzY2hlbWEgPSBhcGlKc29uLnNjaGVtYXNbaV07XG5cblx0XHRcdGNvbnN0IHNjaGVtYU9iaiA9IG5ldyBTY2hlbWFIYW5kbGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEudXJsU2VnbWVudCk7XG5cblx0XHRcdGNvbnN0IGVuZHBvaW50cyA9IFtdO1xuXG5cdFx0XHQvLyBlbmRwb2ludC1sZXZlbCBnZW5lcmF0aW9uXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHNjaGVtYS5lbmRwb2ludHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0bGV0IGVuZHBvaW50ID0gc2NoZW1hLmVuZHBvaW50c1tqXTtcblxuXHRcdFx0XHRjb25zdCBlbmRwb2ludE9iaiA9XG4gICAgICAgICAgICAgICAgICAgIG5ldyBFbmRwb2ludEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludC51cmxTZWdtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZWFtV2ViQXBpVmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludC5wYXJhbWV0ZXJSZXF1aXJlZCk7XG5cblx0XHRcdFx0Y29uc3QgcGFyYW1ldGVycyA9IFtdO1xuXG5cdFx0XHRcdC8vIHBhcmFtZXRlci1sZXZlbCBnZW5lcmF0aW9uXG5cdFx0XHRcdGZvciAobGV0IGsgPSAwOyBrIDwgZW5kcG9pbnQucGFyYW1ldGVycy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdGxldCBwYXJhbWV0ZXIgPSBlbmRwb2ludC5wYXJhbWV0ZXJzW2tdO1xuXG5cdFx0XHRcdFx0Y29uc3QgcGFyYW1ldGVyT2JqID0gbmV3IFBhcmFtZXRlckhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbWV0ZXIubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtZXRlci51cmxTZWdtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1ldGVyLnJlcXVpcmVkKTtcblxuXHRcdFx0XHRcdHBhcmFtZXRlcnMucHVzaChwYXJhbWV0ZXJPYmopO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZW5kcG9pbnRPYmouYWRkUGFyYW1ldGVycyhwYXJhbWV0ZXJzKTtcblx0XHRcdFx0ZW5kcG9pbnRzLnB1c2goZW5kcG9pbnRPYmopO1xuXHRcdFx0fVxuXG5cdFx0XHRzY2hlbWFPYmouYWRkRW5kcG9pbnRzKGVuZHBvaW50cyk7XG5cdFx0XHRzY2hlbWFzLnB1c2goc2NoZW1hT2JqKTtcblx0XHR9XG5cblx0XHRhcGlIYW5kbGVyLmFkZFNjaGVtYXMoc2NoZW1hcyk7XG5cblxuXHRcdGNvbnN0IHRlbXAgPSBhcGlIYW5kbGVyLmdldEFwaSgpO1xuXG5cdFx0dXRpbC5pbnNwZWN0KHRlbXApO1xuXG5cdFx0cmV0dXJuIHRlbXA7XG5cdH1cblxuXHRzZXREYWVkYWx1c1VybChkb21haW4sIHBvcnQpIHtcblx0XHRVdGlscy5kYWVkYWx1c1VybCA9IGRvbWFpbjtcblx0XHRVdGlscy5kYWVkYWx1c1BvcnQgPSBwb3J0O1xuXHR9XG59O1xuIiwidmFyIFV0aWxzID0gcmVxdWlyZSgnLi9VdGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEVuZHBvaW50SGFuZGxlciB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIHVybFNlZ21lbnQsIHZlcnNpb24sIG5lZWRzUGFyYW1zID0gdHJ1ZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0Ly8gdGhpcyBpcyBkaWZmZXJlbnQgZnJvbSBDcnlzdGFseXMgaW4gb3JkZXIgdG8gdGFsayB0byBEYWVkYWx1cyBwcm9wZXJseVxuXHRcdHRoaXMudXJsU2VnbWVudCA9IG5hbWU7XG5cdFx0dGhpcy5uZWVkc1BhcmFtcyA9IG5lZWRzUGFyYW1zO1xuXG5cdFx0dGhpcy5wYXJhbWV0ZXJzID0gW107XG5cdH1cblxuXHRnZXROYW1lKCkge1xuXHRcdHJldHVybiB0aGlzLm5hbWU7XG5cdH1cblxuXHRnZXRQYXJhbWV0ZXJzKCkge1xuXHRcdHJldHVybiB0aGlzLnBhcmFtZXRlcnM7XG5cdH1cblxuXHRnZXRVcmxTZWdtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdH1cblxuXHRnZXRTdGVhbVdlYkFwaVZlcnNpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMudmVyc2lvbjtcblx0fVxuXG5cdG5lZWRzUGFyYW1ldGVycygpIHtcblx0XHRyZXR1cm4gdGhpcy5uZWVkc1BhcmFtZXRlcnM7XG5cdH1cblxuXHRhZGRQYXJhbWV0ZXIocGFyYW1ldGVySGFuZGxlcikge1xuXHRcdHRoaXMucGFyYW1ldGVycy5wdXNoKHBhcmFtZXRlckhhbmRsZXIpO1xuXG5cdFx0cmV0dXJuIHRoaXM7IC8vIGFsbG93IGNoYWluaW5nXG5cdH1cblxuXHRhZGRQYXJhbWV0ZXJzKHBhcmFtZXRlckhhbmRsZXJzKSB7XG5cdFx0Zm9yIChsZXQgcGFyYW1ldGVySW5kZXggPSAwOyBwYXJhbWV0ZXJJbmRleCA8IHBhcmFtZXRlckhhbmRsZXJzLmxlbmd0aDsgcGFyYW1ldGVySW5kZXgrKykge1xuXHRcdFx0dGhpcy5wYXJhbWV0ZXJzLnB1c2gocGFyYW1ldGVySGFuZGxlcnNbcGFyYW1ldGVySW5kZXhdKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcblx0fVxuXG5cdGdlbmVyYXRlRW5kcG9pbnQoc2VnbWVudHMpIHtcblx0XHRjb25zdCB1cmxTZWdtZW50cyA9IHNlZ21lbnRzLnNsaWNlKDApOyAvLyBjcmVhdGUgc2hhbGxvdyBjb3B5IG9mIGFycmF5XG5cdFx0dXJsU2VnbWVudHMucHVzaCh0aGlzLnVybFNlZ21lbnQpO1xuXHRcdHVybFNlZ21lbnRzLnB1c2godGhpcy52ZXJzaW9uKTtcblxuXHRcdGNvbnN0IGVuZHBvaW50ID0ge307XG5cdFx0ZW5kcG9pbnQudmFsdWVzID0ge307XG5cdFx0ZW5kcG9pbnQudXJsU2VnbWVudHMgPSB1cmxTZWdtZW50cztcblx0XHRlbmRwb2ludC5nZXRVcmxTZWdtZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudXJsU2VnbWVudDtcblx0XHR9O1xuXG5cdFx0bGV0IHBhcmFtZXRlckluZGV4ID0gMDtcblx0XHRsZXQgcGFyYW1ldGVyO1xuXHRcdGxldCBlbmRwb2ludFBhcmFtO1xuXG5cdFx0aWYgKHRoaXMubmVlZHNQYXJhbXMpIHsgLy8gZ2VuZXJhdGUgdGhlIGVuZHBvaW50IHdpdGggdGhlIHBhcmFtZXRlcnMgYnV0IG5vIHNlbmRSZXF1ZXN0IGZ1bmN0aW9uXG5cdFx0XHRmb3IgKHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCB0aGlzLnBhcmFtZXRlcnMubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCsrKSB7XG5cdFx0XHRcdHBhcmFtZXRlciA9IHRoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2VuZXJhdGVQYXJhbWV0ZXIodXJsU2VnbWVudHMpO1xuXHRcdFx0XHRlbmRwb2ludFt0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdldE5hbWUoKV0gPSBwYXJhbWV0ZXI7XG5cdFx0XHRcdGVuZHBvaW50UGFyYW0gPSBlbmRwb2ludFt0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdldE5hbWUoKV07XG5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgaW52b2tlZCBmdW5jdGlvbiB0byBzYXZlIHRoZSBwcm9wZXIgcmVmZXJlbmNlcyB0byB0aGUgcGFyYW1ldGVyIGZ1bmN0aW9uXG5cdFx0XHRcdC8vIHVzaW5nIGFuIElJRkUgaXMgcHJldHR5IHVnbHksIGJ1dCB0aGUgYmVzdCB3YXkgSSBjb3VsZCBjb21lIHVwIHdpdGggdG8gZHluYW1pY2FsbHlcblx0XHRcdFx0Ly8gZ2VuZXJhdGUgcGFyYW1ldGVyIGZ1bmN0aW9ucyBmb3IgZWFjaCBlbmRwb2ludCBhcyBuZWVkZWQuLi5cblx0XHRcdFx0KGZ1bmN0aW9uKHBhcmFtKSB7XG5cdFx0XHRcdFx0ZW5kcG9pbnRbcGFyYW0ubmFtZV0gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdFx0ZW5kcG9pbnQudmFsdWVzW3BhcmFtLnVybFNlZ21lbnRdID0gdmFsdWU7XG5cblx0XHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRlbmRwb2ludC5zZW5kUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWVzdFVybCA9IFV0aWxzLmdlbmVyYXRlUmVxdWVzdFVybCh1cmxTZWdtZW50cywgZW5kcG9pbnQudmFsdWVzKTtcblxuXHRcdFx0XHRcdFx0dmFyIHByb21pc2UgPSBVdGlscy5zZW5kWEhSUmVxdWVzdChyZXF1ZXN0VXJsKTtcblxuXHRcdFx0XHRcdFx0ZW5kcG9pbnQudmFsdWVzID0ge307XG5cblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0ocGFyYW1ldGVyKSk7XG5cdFx0XHR9XG5cblx0XHRcdGVuZHBvaW50LnJlcXVlc3RhYmxlID0gZmFsc2U7XG5cdFx0fSBlbHNlIHsgLy8gZ2VuZXJhdGUgdGhlIGVuZHBvaW50IHdpdGggdGhlIHBhcmFtZXRlcnMgYnV0IGFsc28gd2l0aCBhIHNlbmRSZXF1ZXN0IGZ1bmN0aW9uXG5cdFx0XHRmb3IgKHBhcmFtZXRlckluZGV4ID0gMDsgcGFyYW1ldGVySW5kZXggPCB0aGlzLnBhcmFtZXRlcnMubGVuZ3RoOyBwYXJhbWV0ZXJJbmRleCsrKSB7XG5cdFx0XHRcdHBhcmFtZXRlciA9IHRoaXMucGFyYW1ldGVyc1twYXJhbWV0ZXJJbmRleF0uZ2VuZXJhdGVQYXJhbWV0ZXIodXJsU2VnbWVudHMpO1xuXHRcdFx0XHRlbmRwb2ludFt0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdldE5hbWUoKV0gPSBwYXJhbWV0ZXI7XG5cdFx0XHRcdGVuZHBvaW50UGFyYW0gPSBlbmRwb2ludFt0aGlzLnBhcmFtZXRlcnNbcGFyYW1ldGVySW5kZXhdLmdldE5hbWUoKV07XG5cblx0XHRcdFx0Ly8gaW1tZWRpYXRlbHkgaW52b2tlZCBmdW5jdGlvbiB0byBzYXZlIHRoZSBwcm9wZXIgcmVmZXJlbmNlcyB0byB0aGUgcGFyYW1ldGVyIGZ1bmN0aW9uXG5cdFx0XHRcdChmdW5jdGlvbihwYXJhbSkge1xuXHRcdFx0XHRcdGVuZHBvaW50W3BhcmFtLm5hbWVdID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRcdGVuZHBvaW50LnZhbHVlc1twYXJhbS51cmxTZWdtZW50XSA9IHZhbHVlO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0ZW5kcG9pbnQuc2VuZFJlcXVlc3QgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RVcmwgPSBVdGlscy5nZW5lcmF0ZVJlcXVlc3RVcmwodXJsU2VnbWVudHMsIGVuZHBvaW50LnZhbHVlcyk7XG5cblx0XHRcdFx0XHRcdGNvbnN0IHByb21pc2UgPSBVdGlscy5zZW5kWEhSUmVxdWVzdChyZXF1ZXN0VXJsKTtcblxuXHRcdFx0XHRcdFx0ZW5kcG9pbnQudmFsdWVzID0ge307XG5cblx0XHRcdFx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0ocGFyYW1ldGVyKSk7XG5cdFx0XHR9XG5cblx0XHRcdGVuZHBvaW50LnJlcXVlc3RhYmxlID0gdHJ1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5kcG9pbnQ7XG5cdH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQYXJhbWV0ZXJIYW5kbGVyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgdXJsU2VnbWVudCwgcmVxdWlyZWQpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudXJsU2VnbWVudCA9IG5hbWU7XG5cdFx0dGhpcy5yZXF1aXJlZCA9IHJlcXVpcmVkO1xuXHR9XG5cblx0Z2V0TmFtZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xuXHR9XG5cblx0Z2V0VXJsU2VnbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xuXHR9XG5cblx0aXNSZXF1aXJlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZXF1aXJlZDtcblx0fVxuXG5cdGdlbmVyYXRlUGFyYW1ldGVyKHVybFNlZ21lbnRzKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWU6IHRoaXMubmFtZSxcblx0XHRcdHVybFNlZ21lbnQ6IHRoaXMudXJsU2VnbWVudCxcblx0XHRcdGdldFVybFNlZ21lbnRzKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBTY2hlbWFIYW5kbGVyIHtcblx0Y29uc3RydWN0b3IobmFtZSwgdXJsU2VnbWVudCkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0Ly8gZGlmZmVyZW50IGZyb20gQ3J5c3RhbHlzIHRvIHRhbGsgdG8gRGFlZGFsdXMgcHJvcGVybHlcblx0XHR0aGlzLnVybFNlZ21lbnQgPSBuYW1lO1xuXG5cdFx0dGhpcy5lbmRwb2ludHMgPSBbXTtcblx0fVxuXG5cdGdldE5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcblx0fVxuXG5cdGdldEVuZHBvaW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy5lbmRwb2ludHM7XG5cdH1cblxuXHRnZXRVcmxTZWdtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLnVybFNlZ21lbnQ7XG5cdH1cblxuXHRhZGRFbmRwb2ludChlbmRwb2ludEhhbmRsZXIpIHtcblx0XHR0aGlzLmVuZHBvaW50cy5wdXNoKGVuZHBvaW50SGFuZGxlcik7XG5cblx0XHRyZXR1cm4gdGhpczsgLy8gYWxsb3cgY2hhaW5pbmdcblx0fVxuXG5cdGFkZEVuZHBvaW50cyhlbmRwb2ludEhhbmRsZXJzKSB7XG5cdFx0Zm9yIChsZXQgZW5kcG9pbnRJbmRleCA9IDA7IGVuZHBvaW50SW5kZXggPCBlbmRwb2ludEhhbmRsZXJzLmxlbmd0aDsgZW5kcG9pbnRJbmRleCsrKSB7XG5cdFx0XHR0aGlzLmVuZHBvaW50cy5wdXNoKGVuZHBvaW50SGFuZGxlcnNbZW5kcG9pbnRJbmRleF0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzOyAvLyBhbGxvdyBjaGFpbmluZ1xuXHR9XG5cblx0Z2VuZXJhdGVTY2hlbWEoKSB7XG5cdFx0Y29uc3Qgc2NoZW1hID0ge307XG5cdFx0c2NoZW1hLmdldFVybFNlZ21lbnRzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy51cmxTZWdtZW50O1xuXHRcdH1cblxuXHRcdGNvbnN0IHVybFNlZ21lbnRzID0gW3RoaXMudXJsU2VnbWVudF07XG5cblx0XHRmb3IgKGxldCBlbmRwb2ludEluZGV4ID0gMDsgZW5kcG9pbnRJbmRleCA8IHRoaXMuZW5kcG9pbnRzLmxlbmd0aDsgZW5kcG9pbnRJbmRleCsrKSB7XG5cdFx0XHRzY2hlbWFbdGhpcy5lbmRwb2ludHNbZW5kcG9pbnRJbmRleF0uZ2V0TmFtZSgpXSA9XG5cdFx0XHRcdHRoaXMuZW5kcG9pbnRzW2VuZHBvaW50SW5kZXhdLmdlbmVyYXRlRW5kcG9pbnQodXJsU2VnbWVudHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzY2hlbWE7XG5cdH1cbn07IiwiaW1wb3J0IGpzb25wIGZyb20gJ2pzb25wLXByb21pc2UnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGFlZGFsdXNVcmw6ICdsb2NhbGhvc3QnLFxuXHRkYWVkYWx1c1BvcnQ6IDc1NzUsXG5cdGxvZyhtZXNzYWdlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihgQ1JJVDogJHttZXNzYWdlfWApO1xuXHR9LFxuXG5cdGNsb25lKG9iaikge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuXHR9LFxuXG5cdC8vIGNvbmNhdGVuYXRlcyBhbGwgdGhlIHVybFNlZ21lbnRzIGludG8gb25lIGh0dHAgdXJsXG5cdC8vIGNvdWxkIHByb2JhYmx5IGJlIGRvbmUgYSBiaXQgbW9yZSBjbGVhbmx5LCBidXQgdGhpcyB3aWxsIHdvcmsgZm9yIG5vd1xuXHRnZW5lcmF0ZUVuZHBvaW50UmVxdWVzdFVybCh1cmxTZWdtZW50cykge1xuXHRcdC8vIDAgPSBlbmRwb2ludFVybFxuXHRcdC8vIDEgPSBhcGlWZXJzaW9uXG5cdFx0bGV0IHJlcXVlc3RVcmwgPSAnJztcblx0XHRpZih0aGlzLmRhZWRhbHVzVXJsID09PSAnbG9jYWxob3N0JyB8fCB0aGlzLmRhZWRhbHVzVXJsID09PSAnMTI3LjAuMC4xJykge1xuXHRcdFx0cmVxdWVzdFVybCA9IGAke3RoaXMuZGFlZGFsdXNVcmx9OiR7dGhpcy5kYWVkYWx1c1BvcnR9LyR7dXJsU2VnbWVudHNbMF19LyR7dXJsU2VnbWVudHNbMV19YDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVxdWVzdFVybCA9IGAke3RoaXMuZGFlZGFsdXNVcmx9LyR7dXJsU2VnbWVudHNbMF19LyR7dXJsU2VnbWVudHNbMV19YDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVxdWVzdFVybDtcblx0fSxcblxuXHQvLyBjb25jYXRlbmF0ZXMgYWxsIHRoZSB1cmxTZWdtZW50cyBpbnRvIG9uZSBodHRwIHVybCB3aXRoIHF1ZXJ5IHBhcmFtZXRlcnNcblx0Z2VuZXJhdGVSZXF1ZXN0VXJsKHVybFNlZ21lbnRzLCBwYXJhbWV0ZXJzKSB7XG5cdFx0dmFyIHJlcXVlc3RVcmwgPSB0aGlzLmdlbmVyYXRlRW5kcG9pbnRSZXF1ZXN0VXJsKHVybFNlZ21lbnRzKTtcblxuXHRcdHZhciBwYXJhbWV0ZXJOYW1lcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpO1xuXG5cdFx0cmVxdWVzdFVybCArPSAnPyc7XG5cblx0XHQvLyBhcHBlbmQgcGFyYW1ldGVycyBhcyBzdWNoOiAmPHBhcmFtX25hbWU+PTxwYXJhbV92YWx1ZT5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtZXRlck5hbWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZihpICE9PSAwKSB7XG5cdFx0XHRcdHJlcXVlc3RVcmwgKz0gJyYnO1xuXHRcdFx0fVxuXHRcdFx0cmVxdWVzdFVybCArPSBgJHtwYXJhbWV0ZXJOYW1lc1tpXX09JHtwYXJhbWV0ZXJzW3BhcmFtZXRlck5hbWVzW2ldXX1gO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXF1ZXN0VXJsO1xuXHR9LFxuXG5cdC8vIHNlbmRzIGEgdmFuaWxsYSBqcyB4aHIgcmVxdWVzdCwgYnV0IHdyYXBwZWQgaW4gYW4gRVM2IHByb21pc2Vcblx0Ly8gaW4gb3JkZXIgdG8gYWxsb3cgZm9yIGNvbnRhY3RpbmcgYSBzZXBhcmF0ZSBhcGkgc2VydmVyLCBDT1JTIGhhcyB0byBiZSBlbmFibGVkXG5cdC8vIHJldHVybiB0aGUgcHJvbWlzZSBvYmplY3QgZm9yIHRoZSB1c2VyIHRvIHJlc29sdmUgd2hlbiBuZWVkZWRcblx0c2VuZFhIUlJlcXVlc3QodXJsLCBwYXJhbXMpIHtcblx0XHQvLyBUT0RPOiByZW1vdmUgaHR0cHM6Ly8gZm9yIHByb2R1Y3Rpb25cblx0XHRyZXR1cm4ganNvbnAoJ2h0dHBzOi8vJyArIHVybCwgeyBwYXJhbTogcGFyYW1zIH0pLnByb21pc2U7XG5cdH1cbn07XG4iLCJjb25zdCBEZW1vbkVkZ2UgPSByZXF1aXJlKCcuL0RlbW9uRWRnZS5qcycpO1xuXG5pZih3aW5kb3cuRGVtb25FZGdlICE9PSB1bmRlZmluZWQpIHtcblx0dGhyb3cgbmV3IEVycm9yKCdEZW1vbkVkZ2UgaGFzIGJlZW4gaW5zdGFudGlhdGVkIG1vcmUgdGhhbiBvbmNlIScpO1xufVxuXG53aW5kb3cuRGVtb25FZGdlID0gbmV3IERlbW9uRWRnZSgpO1xuIl19
>>>>>>> Stashed changes
