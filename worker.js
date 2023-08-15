import { parentPort } from "worker_threads";

parentPort.on("message", function(data){
    if (data.msg === "inicializar"){
        operacionCostosa();
    }
});
//parentPort.postMessage("iniciado desde worker");


function operacionCostosa(){
    console.log(" *inicio operacion costosa");
    var total = 0;
    for (let c = 0; c < 300000000; c++) {
        total += c;
    }
    console.log(" *fin operacion costosa");
    return total;
}
