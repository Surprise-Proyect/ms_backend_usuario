import { Router } from "express";
import { createUser, deleteUser, listUser, logueoUsuario, modifyUser, showUser } from "../controllers/controllers.user.js";
import { verifyToken } from "../middleware/oaut.js";
const rutaUser = Router();

// GET = MOSTRAR
rutaUser.get("/user/:id", showUser);

rutaUser.get("/user", listUser);

// POST = GUARDAR O CREAR
rutaUser.post("/user", verifyToken, createUser);

rutaUser.post("/login", logueoUsuario);

// PUT = MODIFICAR DATOS
rutaUser.put("/user", verifyToken, modifyUser);

// DELETE = ELIMINAR DATOS
rutaUser.delete("/user", deleteUser);

export default rutaUser;