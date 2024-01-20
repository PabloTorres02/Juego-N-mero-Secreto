let numeroSecreto = 0;
let intentos = 0
let listaNumerosGenerados=[];
let numeroMaximo = 10;

//funcion que asigna textos del HTML
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto

}

function generarNumeroSecreto() {
    let numeroGenerasdo = Math.floor(Math.random()*numeroMaximo)+1
    console.log(listaNumerosGenerados);
    console.log(numeroGenerasdo);
    // si el numero generado ya esta incluido en la lista lo omitira y generara otro diferente
    if(listaNumerosGenerados.length == numeroMaximo){
        asignarTextoElemento("p","se han sorteado todos los numeros posibles");
    }else{
        if (listaNumerosGenerados.includes(numeroGenerasdo)){
            return generarNumeroSecreto();
        }else{
            listaNumerosGenerados.push(numeroGenerasdo);
            return numeroGenerasdo;
        }
    }
}

asignarTextoElemento("h1","Juego del numero secreto!");
asignarTextoElemento("p",`ingrese un numero del 1 al ${numeroMaximo}` )

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento("p",`Asertaste el numero secreto en ${intentos} ${intentos === 1 ? "vez" : "veces"}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        // EL usuario no acerto
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p","el numero secreto es menor");
        }else{
            asignarTextoElemento("p","el numero secreto es mayor");
        }
        limpiarCaja();
        intentos++;
    }
    return;
}

// limpiar el imput donde el ususario ingresa su numero 
function limpiarCaja(){
    let limpiarCaja = document.getElementById("valorUsuario");
    limpiarCaja.value="";
}
function condicionesinicio(){
    asignarTextoElemento("h1","Juego del numero secreto!");
    asignarTextoElemento("p",`ingrese un numero del 1 al ${numeroMaximo} `)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarjuego(){
    condicionesinicio();
    limpiarCaja();+
    document.querySelector("#reiniciar").setAttribute("disabled","true");

}

condicionesinicio();