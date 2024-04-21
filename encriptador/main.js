// function encriptar() {
//     let texto = document.getElementById('texto').value.toLowerCase();

//     let tituloMensaje = document.getElementById("titulo-mensaje");
//     let parrafo = document.getElementById('parrafo');
//     let muñeco = document.getElementById('muñeco');


//     //i = Toma letras mayusculas y minusculas
//     //g = toma en cuenta toda la linea u oración
//     //m = toma en cuenta multiples lineas
//     let textoCifrado = texto
//         .replace(/e/gi, "enter")
//         .replace(/i/gi, "imes")
//         .replace(/a/gi, "ai")
//         .replace(/o/gi, "ober")
//         .replace(/u/gi, "ufat");

//         //Si los caracteres ingresados son diferentes de 0 entonces..
//     if(texto.length != 0){
//         //accedemos al campo de texto y su valor
//         document.getElementById('texto').value = textoCifrado;
//         tituloMensaje.textContent = "Texto incriptado con exito";
//         parrafo.textContent = "";
//         muñeco.src = "./img/encriptado.jpg";
//     }else{
//         muñeco.src = "./img/muñeco.png"
//         tituloMensaje.textContent = "Ningún mensaje fue agregado";
//         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//         alert("Debes ingresar algún texto");
//     }
    // limpiarTexto();
// }

// function limpiarTexto() {
//     document.getElementById('texto').value = "";
// }

// function desencriptar() {
//     let texto = document.getElementById('texto').value.toLowerCase();

//     let textoDescifrado = texto
//         .replace(/enter/gi, "e")
//         .replace(/imes/gi, "i")
//         .replace(/ai/gi, "a")
//         .replace(/ober/gi, "o")
//         .replace(/ufat/gi, "u");

// if(texto.length != 0){
//     document.getElementById('texto').value = textoDescifrado;
//     tituloMensaje.textContent = "Texto desencriptado con exito";
//     parrafo.textContent = "";
//     muñeco.src = "./img/desencriptado.jpg";
// }else{
//     muñeco.src = "./img/muñeco.png";
// }
// }


// function encriptar() {
//     let texto = document.getElementById('texto').value.toLowerCase();
//     let tituloMensaje = document.getElementById('titulo-mensaje');
//     let parrafo = document.getElementById('parrafo');
//     let muñeco = document.getElementById('muñeco');
//     let textoCifrado = texto 
//         .replace(/e/gi, "enter")
//         .replace(/i/gi, "imes")
//         .replace(/a/gi, "ai")
//         .replace(/o/gi, "ober")
//         .replace(/u/gi, "ufat");

//     if(texto.length != 0){
//         document.getElementById('texto').value = textoCifrado;
//         tituloMensaje.textContent = "Texto encriptado con exito";
//         parrafo.textContent = "";
//         muñeco.src = "./img/encriptado.jpg";
//     }else{
//         tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//         muñeco.src = "./img/muñeco.png";
//         alert("Ingresa un texto rey");
//     }
// }

// function desencriptar() {
//     let texto = document.getElementById('texto').value.toLowerCase();
//     let tituloMensaje = document.getElementById('titulo-mensaje');
//     let parrafo = document.getElementById('parrafo');
//     let muñeco = document.getElementById('muñeco');

//     let textoDescifrado = texto
//         .replace(/enter/gi, "e")
//         .replace(/imes/gi, "i")
//         .replace(/ober/gi, "o")
//         .replace(/ai/gi, "a")
//         .replace(/ufat/gi, "u");
    
//     if(texto.length != 0){
//         document.getElementById('texto').value = textoDescifrado;
//         tituloMensaje.textContent = "Texto desencriptado con exito";
//         parrafo.textContent = "";
//         muñeco.src = "./img/desencriptado.jpg";
//     }else{
//         tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//         muñeco.src = "./img/muñeco.png";
//         alert("Ingresa un texto rey");
//     }
// }

function encriptar() {
let texto = document.getElementById('texto').value.toLowerCase();
let tituloMensaje = document.getElementById('titulo-mensaje');
let parrafo = document.getElementById('parrafo');
let muñeco = document.getElementById('muñeco');

let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");


if(texto.length != 0){
    document.getElementById('texto').value = textoCifrado;
    tituloMensaje.textContent = "texto encriptado con exito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado.jpg";
}else{
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "";
    muñeco.src = "./img/muñeco.png";
    alert("No se encontro ningún texto");
}
}

function desencriptar() {
    let texto = document.getElementById('texto').value.toLowerCase();
    let tituloMensaje = document.getElementById('titulo-mensaje');
    let parrafo = document.getElementById('parrafo');
    let muñeco = document.getElementById('muñeco');

    let textoDescifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if(texto.length != 0){
        document.getElementById('texto').value = textoDescifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito =D";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
    }else{
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "";
        muñeco.src = "./img/muñeco.png";
        alert("No se encontro ningún texto");
    }
}