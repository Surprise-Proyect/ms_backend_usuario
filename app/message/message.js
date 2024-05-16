import colors from "colors";

const msg = (message, color) => {
    console.log(colors[color](message));
};

export const contenido = {
    "1":"Hola Home",
    "2":"Hola About",
    "3":"Hola Gallery",
    "4":"Hola About"
};

export const success = (req, res, status=200, mensaje="") => {
    res.status(status).send({
        error:false,
        status:status,
        body:mensaje
    })
};

export const error = (req, res, status=500, mensaje="") => {
    res.status(status).send({
        error:true,
        status:status,
        body:mensaje
    })
};

export default msg;