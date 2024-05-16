"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.success = exports.error = exports["default"] = exports.contenido = void 0;
var _colors = _interopRequireDefault(require("colors"));
var msg = function msg(message, color) {
  console.log(_colors["default"][color](message));
};
var contenido = exports.contenido = {
  "1": "Hola Home",
  "2": "Hola About",
  "3": "Hola Gallery",
  "4": "Hola About"
};
var success = exports.success = function success(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  res.status(status).send({
    error: false,
    status: status,
    body: mensaje
  });
};
var error = exports.error = function error(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  res.status(status).send({
    error: true,
    status: status,
    body: mensaje
  });
};
var _default = exports["default"] = msg;