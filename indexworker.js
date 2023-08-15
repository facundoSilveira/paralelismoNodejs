console.clear();
import { createServer } from "http";
import { Worker } from "worker_threads";
const worker = new Worker("./worker.js");
let count = 0;
const httpServer = createServer((req, res) => {
    console.log("PETICION RECIBIDA N°"+count);
    count ++;
    res.end("RECIBIDO COLEGA");
});

httpServer.listen(3000);

worker.postMessage("iniciar");
worker.on("message", function(data){
    console.log("msj recibido desde el parent", data);
});
setInterval(()=> {
    worker.postMessage({msg: "inicializar"});
}, 10000);

