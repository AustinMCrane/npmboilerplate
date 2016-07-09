'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('SomeClass', function () {
  it('should render SomeClass', function () {
    var someClass = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_2.default, null));
    (0, _expect2.default)(someClass).toExist();
  });
});