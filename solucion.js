function tareaPesada() {
    for (let i = 0; i < 100000000000; i++) {
      // Simulación de una tarea pesada
    }
  }
  
  function funcion1() {
    console.log("Inicio de la función 1");
    tareaPesada();
    console.log("Fin de la función 1");
  }
  
  function funcion2() {
    console.log("Inicio de la función 2");
    // Simulación de una tarea rápida
    console.log("Fin de la función 2");
  }
  
  
  console.log("Inicio del programa");
  setTimeout(funcion1, 1);
  funcion2();
  console.log("Fin del programa");
