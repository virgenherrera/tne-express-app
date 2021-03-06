import { expect, should } from 'chai';
import * as express from 'express';
import * as joi from 'joi';
import * as TneAppIndex from '../../src';

should();
describe('@tne/express-app index', () => {
	it('should expose all framework libraries', () => {
		const exports = [
			// foundation libraries
			'express',
			'joi',
			// main lib
			'ExpressApplication',
			// Middleware
			'jwtAuth',
			// libraries
			'parseSort',
			'parseSkipLimit',
			'joiValidate',
			// decorators
			'ExpressRouter',
			'Endpoint',
			'Config',
			'FinalClass',
			'Prefix',
		];

		expect(TneAppIndex).to.be.an('object').that.has.keys(exports);
	});

	it('should expose encapsulated pristine express framework', () => {
		expect(TneAppIndex.express).to.be.a('function');
		expect(TneAppIndex.express).to.be.deep.equal(express);
		expect(TneAppIndex.joi).to.be.deep.equal(joi);
	});

	it('should expose the App interface static methods', () => {
		expect(TneAppIndex.ExpressApplication).to.be.a('function');
		expect(TneAppIndex.ExpressApplication.construct).to.be.a('function');
		expect(TneAppIndex.ExpressApplication.destruct).to.be.a('function');
		expect(TneAppIndex.ExpressApplication.getInstance).to.be.a('function');
		expect(TneAppIndex.ExpressApplication.getExpressApp).to.be.a('function');
	});
});
