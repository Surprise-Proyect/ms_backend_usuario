import app from "./app.js";
app.listen(app.get("port"), ()=>{
    console.log(`Estas trabajando en el puerto: http://localhost:${app.get("port")}`);
})