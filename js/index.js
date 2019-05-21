import $ from 'jquery';
window.$ = $;
window.jQuery = $;


(() => {
  
  //Variables
  var activeGame1 = false;
  var activeGame2 = false;
  var numero= [];
  var intentos=0;


  ///////////////
  //EJERCICIO 1//
  ///////////////
  
  //funcion para iniciar el juego 1 (la persona adivina el número)
  let initGame1 = () => {
    //se muestra html oculto correspondiente al primer juego
    $(".instructions-container, .results-container").removeClass("hide");

    if(activeGame1==true){
      alert("Se comenzo otro juego");
      let htmlActual = $("#results-text").html();
      $("#results-text").html(" SE COMENZO OTRO JUEGO <br>" + htmlActual);
    }
    
    activeGame1 = true;
    activeGame2 = false;

    //Numeros que con los que se puede armar el numero a advinar
    var opciones = ["1","2","3","4","5","6","7","8","9","0"];
    var pos;
    
    //Vacio el arreglo por si inicia un nuevo juego y reinicio los intentos
    numero = [];
    intentos = 0;

    //Armo un arreglo con 4 numeros al azar, que no se repitan
    for(var i=0; i<4; i++){
      var cifra = opciones[Math.round(Math.random()*(opciones.length-1))];
      pos = opciones.indexOf(cifra);
      opciones.splice(pos,1);
      numero.push(cifra);
    }
    console.log(numero);

  }

  //funcion para chequear los numeros que se ingresan
  let checkNumber = () =>{
    let valor = $("#value").val().toString();
    //Declaro un arreglo para la opcion ingresada
    let opcion = []
    let correctos = 0;
    let regulares = 0;

    //subo variable intentos
    intentos++;

    //verifico que el valor ingresado sea de 4 cifras y mayor a igual 0
    if(valor.length == 4 & valor >= 0){

      //Lleno el arreglo con la opcion ingresada.
      for(var j=0; j<4; j++){
        opcion.push(valor.charAt(j));
      }

      //Comparo la opcion ingresada con el numero
      console.log(opcion + "<br>" + numero)
      if(opcion.toString() == numero.toString()){
        if(intentos == 1){
          let htmlActual = $("#results-text").html();
          $("#results-text").html("GANASTE EN " + intentos + " INTENTO! <br>" + htmlActual);
          console.log("GANASTE");
        }else {          
        let htmlActual = $("#results-text").html();
        $("#results-text").html( "GANASTE EN " + intentos + " INTENTOS! <br>" + htmlActual);
        console.log("GANASTE");
        }
        
      } else {
        for(var j=0; j<4; j++){
          //compruebo si los numeros guardados en el arreglo de la opcion ingresada, estan en el arreglo del numero pensado
          if(numero.indexOf(opcion[j]) != -1 ){
            //en caso de que el numero este y ocupe la misma posicion del otro arreglo aumento la variable correctos
            if(numero[j] == opcion[j]){
              correctos++;
            }
            //en caso de que el numero este y ocupe una posicion distinta aumento la variable regulares
            else {
              regulares++;
            }
          }
        }

        //muestro en el cuadro resultados
        let htmlActual = $("#results-text").html();
        $("#results-text").html( "Bien:" + correctos + " , Regular: " + regulares + "<br>"+ htmlActual);
        
      }

      
    }else {
      alert("Por favor ingresa un numero positivo de 4 cifras");
    }

  }


  
  //Llamado a funciones
  $("#adivinador").click(initGame1);
  $("#send").click(checkNumber);
})();
