"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUser = require("../controller/controllers.user.js");
var _oaut = require("../../middleware/oaut.js");
var rutaUser = (0, _express.Router)();

//Get mostrar
rutaUser.get("/user/:id", _controllersUser.mostrarUsuario);

//Mostrar todos los usuarios
rutaUser.get("/user", _controllersUser.listarUsuario);

//Guardar o crear
rutaUser.post("/user", _oaut.verifytoken, _controllersUser.crearUsuario);

//Modificar
rutaUser.put("/user", _controllersUser.modificarUsuario);

//Eliminar
rutaUser["delete"]("/user", _controllersUser.eliminarUsuario);

// para loguearse
rutaUser.post("/login", _controllersUser.logueoUsuario);
var _default = exports["default"] = rutaUser;