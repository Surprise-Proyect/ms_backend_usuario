"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifytoken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var verifytoken = exports.verifytoken = function verifytoken(token) {
  _jsonwebtoken["default"].verify(token, process.env.TOKEN_PRIVATEKEY);
};