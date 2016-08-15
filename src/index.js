const DemonEdge = require('./DemonEdge.js');

if(window.DemonEdge !== undefined) {
	throw new Error('DemonEdge has been instantiated more than once!');
}

window.DemonEdge = new DemonEdge();
