import { Router } from "express";
import { crearUsuario, eliminarUsuario, listarUsuario, modificarUsuario, mostrarUsuario, logueoUsuario } from "../controller/controllers.user.js";
import { verifytoken } from "../../middleware/oaut.js";
const rutaUser = Router();


//Get mostrar
rutaUser.get("/user/:id", mostrarUsuario)

//Mostrar todos los usuarios
rutaUser.get("/user", listarUsuario)

//Guardar o crear
rutaUser.post("/user", verifytoken, crearUsuario)

//Modificar
rutaUser.put("/user", modificarUsuario)

//Eliminar
rutaUser.delete("/user", eliminarUsuario)

// para loguearse
rutaUser.post("/login", logueoUsuario);

export default rutaUser;