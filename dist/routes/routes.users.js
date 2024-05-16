"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUser = require("../controllers/controllers.user.js");
var _oaut = require("../middleware/oaut.js");
var rutaUser = (0, _express.Router)();

// GET = MOSTRAR
rutaUser.get("/user/:id", _controllersUser.showUser);
rutaUser.get("/user", _controllersUser.listUser);

// POST = GUARDAR O CREAR
rutaUser.post("/user", _oaut.verifyToken, _controllersUser.createUser);
rutaUser.post("/login", _controllersUser.logueoUsuario);

// PUT = MODIFICAR DATOS
rutaUser.put("/user", _oaut.verifyToken, _controllersUser.modifyUser);

// DELETE = ELIMINAR DATOS
rutaUser["delete"]("/user", _controllersUser.deleteUser);
var _default = exports["default"] = rutaUser;