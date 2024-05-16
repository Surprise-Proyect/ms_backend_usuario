import { success, error } from "../message/message.js";
import pool from "../config/db.mysql.js";
import { config } from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
config();
// INGRESAR DATO
export const createUser = async(req, res) => {
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
        error(req, res, 400, err);
    }
};

// MOSTRAR USUARIO
export const showUser = async(req, res) => {

    let id = req.params['id']

    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_USUARIO(${id}); `)
        success(req,res, 200, respuesta[0]); 
    } catch (err) {
        error(req,res, 500, err)
    }
};

// MOSTRAR USUARIOS
export const listUser = async(req, res) => {
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_USUARIO();`)
        success(req,res, 200, respuesta[0]); 
    } catch (err) {
        error(req,res, 500, err)
    }
};

// MODIFICAR DATO
export const modifyUser = async(req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const usuario = req.body.usuario;
    const claveSinCifrar = req.body.clave;
    const clave = claveSinCifrar;
    try {
        const respuesta = await pool.query(`CALL SP_EDITAR_USUARIO(${id} ,'${nombre}', '${usuario}', '${clave}');`);
        if(respuesta[0].affectedRows == 1){
            success(req, res, 200, "Usuario modificado "+ usuario);     
        }else{
            success(req, res, 200, "No se pudo modificar");
        }
    } catch (err) {
        error(req, res, 400, err)
    }
};

// ELIMINAR DATO
export const deleteUser = async(req, res) => {
    const id = req.body.id;

    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_USUARIO(${id});`);
        if(respuesta[0].affectedRows == 1){
            success(req, res, 200, "Usuario eliminado ");     
        }else{
            success(req, res, 200, "No se pudo eliminar");
        }
    } catch (err) {
        error(req, res, 400, err)
    }
};

export const logueoUsuario = async (req, res) => {
    const {nombre, clave} = req.body;
    // const hash = await bcrypt.hash   (clave, 2);

    try {
        const respuesta = await pool.query(`CALL SP_BUSCAR_USUARIO("${nombre}")`);
        if (respuesta[0][0] == 0) { 
            // const error =  new Error("Usuario no encontrado");
            error(req, res, 400, "Usuario no encontrado");     
            return;
        }
        const match = await bcrypt.compare(clave, respuesta[0][0][0].CLAVE)
        if (!match) {
            error(req, res, 401, "Clave Errada");
            return;
        }
        let payload ={
            "usuario": respuesta[0][0][0].NOMBRE,
            "clave": respuesta[0][0][0].CLAVE 
        }
        let token = jwt.sign(payload, process.env.TOKEN_PRIVATEKEY, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
        })
        success(req, res, 200, {token});     
    } catch (e) {
        error(req, res, 500, "Error en el servidor");  
    }
}