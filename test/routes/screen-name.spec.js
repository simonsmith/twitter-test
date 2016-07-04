const sinon = require('sinon');
require('sinon-as-promised');
const rootPath = require('app-root-path');
const expect = require('chai').expect;
const rewire = require('rewire');
const route = rewire(rootPath + '/src/routes/screen-name');

describe.skip('screen_name route', () => {
  // TBC
});
