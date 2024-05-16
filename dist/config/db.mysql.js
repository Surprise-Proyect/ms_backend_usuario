"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;
var _promise = require("mysql2/promise");
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var pool = exports.pool = (0, _promise.createPool)({
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE
});