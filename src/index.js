const DeObj = window.DemonEdge || {};

const DemonEdge = require('./DemonEdge.js');

DeObj.api = new DemonEdge();

window.DemonEdge = DeObj;