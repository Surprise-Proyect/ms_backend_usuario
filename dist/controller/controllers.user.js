"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostrarUsuario = exports.modificarUsuario = exports.logueoUsuario = exports.listarUsuario = exports.eliminarUsuario = exports.crearUsuario = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _message = require("../message/message.js");
var _dbMysql = require("../config/db.mysql.js");
var _dotenv = require("dotenv");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var mostrarUsuario = exports.mostrarUsuario = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params['id'];
          _context.prev = 1;
          _context.next = 4;
          return _dbMysql.pool.query("CALL SP_MOSTRAR_USUARIO(".concat(id, ");"));
        case 4:
          respuesta = _context.sent;
          console.log(respuesta);
          (0, _message.success)(req, res, 200, respuesta[0]);
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          (0, _message.error)(req, res, 500, _context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  }));
  return function mostrarUsuario(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var listarUsuario = exports.listarUsuario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _dbMysql.pool.query("CALL SP_LISTAR_USUARIO();");
        case 3:
          respuesta = _context2.sent;
          console.log(respuesta);
          (0, _message.success)(req, res, 200, respuesta[0]);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          (0, _message.error)(req, res, 500, _context2.t0);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function listarUsuario(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var crearUsuario = exports.crearUsuario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var nombre, apellido, claveSinCifrar, hash, clave, respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          nombre = req.body.nombre;
          apellido = req.body.apellido;
          claveSinCifrar = req.body.clave;
          _context3.prev = 3;
          _context3.next = 6;
          return _bcrypt["default"].hash(claveSinCifrar, 2);
        case 6:
          hash = _context3.sent;
          clave = hash;
          _context3.next = 10;
          return _dbMysql.pool.query("CALL SP_CREAR_USUARIO('".concat(nombre, "', '").concat(apellido, "', '").concat(clave, "');"));
        case 10:
          respuesta = _context3.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _message.success)(req, res, 200, "Usuario creado");
          } else {
            (0, _message.error)(req, res, 400, "No se pudo agregar el nuevo usuario");
          }
          _context3.next = 17;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](3);
          (0, _message.error)(req, res, 400, _context3.t0);
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 14]]);
  }));
  return function crearUsuario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var modificarUsuario = exports.modificarUsuario = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, nombre, apellido, clave, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.body.id;
          nombre = req.body.nombre;
          apellido = req.body.apellido;
          clave = req.body.clave;
          _context4.prev = 4;
          _context4.next = 7;
          return _dbMysql.pool.query("CALL SP_MODIFICAR_USUARIO(".concat(id, ", '").concat(nombre, "', '").concat(apellido, "', '").concat(clave, "');"));
        case 7:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _message.success)(req, res, 200, nombre + " ha sido modificado");
          } else {
            (0, _message.error)(req, res, 400, "No se pudo agregar el nuevo usuario");
          }
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](4);
          (0, _message.error)(req, res, 400, _context4.t0);
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[4, 11]]);
  }));
  return function modificarUsuario(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var eliminarUsuario = exports.eliminarUsuario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.id;
          _context5.prev = 1;
          _context5.next = 4;
          return _dbMysql.pool.query("CALL SP_ELIMINAR(".concat(id, ")"));
        case 4:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _message.success)(req, res, 200, nombre + " ha sido eliminado");
          } else {
            (0, _message.error)(req, res, 400, "No se pudo eliminar el usuario con la id " + id);
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          (0, _message.error)(req, res, 400, _context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function eliminarUsuario(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var logueoUsuario = exports.logueoUsuario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, nombre, clave, respuesta, match, payload, token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, clave = _req$body.clave; // const hash = await bcrypt.hash(clave, 2);
          _context6.prev = 1;
          _context6.next = 4;
          return _dbMysql.pool.query("CALL SP_BUSCAR_USUARIO('".concat(nombre, "')"));
        case 4:
          respuesta = _context6.sent;
          if (!(respuesta[0][0] == 0)) {
            _context6.next = 8;
            break;
          }
          // const error = new Error("Usuario no existe");
          (0, _message.error)(req, res, 400, "Usuario no encontrado");
          return _context6.abrupt("return");
        case 8:
          _context6.next = 10;
          return _bcrypt["default"].compare(clave, respuesta[0][0][0].CLAVE);
        case 10:
          match = _context6.sent;
          if (match) {
            _context6.next = 14;
            break;
          }
          (0, _message.error)(req, res, 401, "Clave errada");
          return _context6.abrupt("return");
        case 14:
          payload = {
            "nombre": respuesta[0][0][0].NOMBRE,
            "clave": respuesta[0][0][0].CLAVE
          };
          token = _jsonwebtoken["default"].sign(payload, process.env.TOKEN_PRIVATEKEY, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
          });
          (0, _message.success)(req, res, 200, {
            token: token
          });
          _context6.next = 23;
          break;
        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](1);
          console.error("Error del servidor", _context6.t0);
          (0, _message.error)(req, res, 500, "Error en el servidor");
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 19]]);
  }));
  return function logueoUsuario(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();