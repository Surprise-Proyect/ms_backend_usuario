import bcrypt from "bcrypt";
import { success, error } from "../message/message.js";
import { pool } from "../config/db.mysql.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken";

export const mostrarUsuario = async (req, res) =>{
    let id = req.params['id'];
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_USUARIO(${id});`);
        console.log(respuesta);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)
    }
};
export const listarUsuario = async(req, res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_USUARIO();`);
        console.log(respuesta);
        success(req, res, 200, respuesta[0]);
    } catch (err) {
        error(req, res, 500, err)
    }
};
export const crearUsuario = async (req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const claveSinCifrar = req.body.clave;
    try {
        const hash = await bcrypt.hash(claveSinCifrar, 2);
        const clave = hash;
        const respuesta = await pool.query(`CALL SP_CREAR_USUARIO('${nombre}', '${apellido}', '${clave}');`);
        if (respuesta[0].affectedRows == 1){
            success(req, res, 200, "Usuario creado");
        }else{
            error(req, res, 400, "No se pudo agregar el nuevo usuario")
        }
    } catch (err) {
        error(req, res, 400, err)
    }
};
export const modificarUsuario = async (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const clave = req.body.clave;
    try {
        const respuesta = await pool.query(`CALL SP_MODIFICAR_USUARIO(${id}, '${nombre}', '${apellido}', '${clave}');`);
        if (respuesta[0].affectedRows == 1){
            success(req, res, 200, nombre + " ha sido modificado");
        }else{
            error(req, res, 400, "No se pudo agregar el nuevo usuario")
        }
    } catch (err) {
        error(req, res, 400, err)
    }
};
export const eliminarUsuario = async (req, res) =>{
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR(${id})`);
        if (respuesta[0].affectedRows == 1){
            success(req, res, 200, nombre + " ha sido eliminado");
        }else{
            error(req, res, 400, "No se pudo eliminar el usuario con la id " + id)
        }
    } catch (err) {
        error(req, res, 400, err)
    }
};

export const logueoUsuario = async (req, res) => {
const {nombre, clave} = req.body;
// const hash = await bcrypt.hash(clave, 2);
try {
    const respuesta = await pool.query(`CALL SP_BUSCAR_USUARIO('${nombre}')`);
    if(respuesta[0][0]==0){
        // const error = new Error("Usuario no existe");
        error(req, res, 400, "Usuario no encontrado")
        return;
    }
    const match = await bcrypt.compare(clave, respuesta[0][0][0].CLAVE);
    // console.log(respuesta[0][0][0].CLAVE);
    // console.log(clave);
    if (!match) {
        error(req, res, 401, "Clave errada")
        return;
    }
    let payload = {
        "nombre": respuesta[0][0][0].NOMBRE,
        "clave": respuesta[0][0][0].CLAVE

    }
    let token = jwt.sign(payload, process.env.TOKEN_PRIVATEKEY, {
        expiresIn: process.env.TOKEN_EXPIRES_IN
    })
    success(req, res, 200, {token})
} catch (err) {
    console.error("Error del servidor", err);
    error(req, res, 500, "Error en el servidor");
}
}
