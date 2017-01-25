'use strict';

var _DemonEdge = require('./../lib/DemonEdge');

var _DemonEdge2 = _interopRequireDefault(_DemonEdge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_DemonEdge2.default.setDaedalusUrl('0.0.0.0', 7575);

var promise1 = _DemonEdge2.default.api.Match.GetMatchHistory.sendRequest();

promise1.then(function (response) {
    console.log(response.data);
});

var promise2 = _DemonEdge2.default.api.Match.GetMatchDetails.matchID(2620320305).sendRequest();

promise2.then(function (response) {
    console.log(response.data);
});

