// importaciones
import express from "express";
import {config} from "dotenv";
import ruta from "./routes/index.js";
config();

// definiciones
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true }))

app.set("port", process.env.PORT) || 3000;

// rutas
app.use("/",ruta);

// exportar variables
export default app;