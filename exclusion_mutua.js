var tiempo = 6000;

setInterval(function(){
    tiempo -= 1000;
    console.log("A consume: 1000");
    if (tiempo < 1){process.exit()};
},1000);

setInterval(function(){
    tiempo -= 1000;
    console.log("B consume: 1000");
    if (tiempo < 1){process.exit()};
},1000);