'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _utils = require('./utils');

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getColor = function getColor(time) {
  return new _promise2.default(function (resolve, reject) {
    (0, _request2.default)(_config2.default, function (err, res, body) {
      if (err) {
        reject(err);return;
      }
      resolve(body);
    });
  }).then(function (data) {
    return (0, _utils.matchHex)(24)(data);
  }).then(function (hex) {
    return (0, _utils.take)(time, hex);
  });
};

var color = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var time = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var rawdata;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getColor(time);

          case 2:
            rawdata = _context.sent;

            rawdata.map(function (o) {
              console.log((0, _utils.matchHex)(6)(o));
            });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function color(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = color;