'use strict';

const expect = require('chai').expect;
const random = require('lodash.random');
const run = require('.');

describe('Function: run', () => {

  describe('Definition', () => {

    it('should be a function', () => {
      expect(typeof run).to.equal('function');
    });

    it('should have two parameters', () => {
      expect(run.length).to.equal(3);
    });

  });

  describe('Return', () => {
    const fakeUAList = [
      'Mozilla/5.0 (Linux; U; Android-4.0.3; en-us; Xoom Build/IML77) AppleWebKit/535.7 (KHTML, like Gecko) CrMo/16.0.912.75 Safari/535.7',
      'Mozilla/5.0 (Linux; U; Jolla; Sailfish; Mobile; rv:20.0) Gecko/20.0 Firefox/20.0 Sailfish Browser/1.0 like Safari/535.19',
      'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; Touch; rv:11.0) like Gecko',
      'BlackBerry9800/5.0.0.862 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/331 UNTRUSTED/1.0 3gpp-gba'
    ];

    let fakeGenerator;
    let fakeUA;
    let fakeSummary;

    beforeEach(() => {
      fakeGenerator = function *(ua, summary) { yield; };
      fakeUA = fakeUAList[random(0, fakeUAList.length - 1)];
      fakeSummary = {};
    });

    afterEach(() => {
      fakeGenerator = null;
      fakeUA = null;
      fakeSummary = null;
    });

    it('should always return `undefined` value', () => {
      expect(run(fakeGenerator, fakeUA, fakeSummary)).not.to.exist;
    });

  });

});
