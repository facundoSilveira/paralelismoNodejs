console.clear();
import { createServer } from "http";
let count = 0;
const httpServer = createServer((req, res) => {
    console.log("PETICION RECIBIDA N°"+count);
    count ++;
    res.end("RECIBIDO COLEGA");
});

httpServer.listen(3000);

setInterval(()=> {
    operacionCostosa();
}, 10000);

function operacionCostosa(){
    console.log(" *inicio operacion costosa");
    var total = 0;
    for (let c = 0; c < 3000000000; c++) {
        total += c;
    }
    console.log(" *fin operacion costosa");
    return total;
}