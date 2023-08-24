setTimeout(function(){console.log("Evento A");}, 2);
setTimeout(function(){console.log("Evento B");}, 0);
process.nextTick(function(){console.log("Evento D");});
process.nextTick(function(){console.log("Evento E");});
console.log("Fin del programa");