import util from 'util';
import { expect } from 'chai';
import DemonEdge from '../dist/demonedge.web.js';

describe('Given an instance of my library', function() {
	let demonedge;
	let api;
	let matchPromise;

	expect(DemonEdge).to.not.be.undefined;

	before(function() {
		demonedge = new DemonEdge();

		util.inspect(demonedge);

		api = demonedge.api;

		matchPromise = api.Match.GetMatchHistory.sendRequest();
	});

	expect(demonedge).to.not.be.undefined;

	expect(api).to.be.an('object');
	expect(matchPromise).to.be.a('promise');

});