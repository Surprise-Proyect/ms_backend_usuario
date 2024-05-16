import { Router } from "express";
import msg from "../message/message.js";
import { contenido } from "../message/message.js";

const rutaMain = Router();

rutaMain.get("/home", (req, res)=>{
    res.json({
        "mensaje":contenido[1]
    })
    msg("Hola home", "green")
})

rutaMain.get("/gallery", (req, res)=>{
    res.json({
        "mensaje":contenido[2]
    })
    msg("Hola gallery", "green")
})

rutaMain.get("/about", (req, res)=>{
    res.json({
        "mensaje":contenido[3]
    })
    msg("Hola about", "green")  
})

rutaMain.get("/contact", (req, res)=>{  
    res.json({
        "mensaje":contenido[4]
    })
    msg("Hola contact", "green")
})

export default rutaMain;