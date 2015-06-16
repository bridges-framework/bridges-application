'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _bridgesSupervisor = require('bridges-supervisor');

var _bridgesSupervisor2 = _interopRequireDefault(_bridgesSupervisor);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var BridgesApplication = function BridgesApplication(_ref) {
  var directory = _ref.directory;
  var processes = _ref.processes;

  _classCallCheck(this, BridgesApplication);

  if (!_fs2['default'].existsSync(options.directory)) {
    throw new Error('options.directory must be a valid directory');
  }
  if (!processes) {
    processes = {
      injext: []
    };
  }
  processes.directory = _path2['default'].join(directory, 'processes');
  this.supervisor = new _bridgesSupervisor2['default'](processes);
};

exports['default'] = BridgesApplication;
module.exports = exports['default'];