
function maximo(num1,num2,num3,num4){

    return Math.max(num1,num2,num3,num4); 
}

function lanzamiento(){
    let num=Math.floor(Math.random()*6)+1; 
    
    return ("El valor del dado es: " + num); 
}

function volumenEsfera(radio){

    return (4*Math.PI*Math.pow(radio,3))/3; 
}

function areaCirculo(radio){

     return Math.PI*Math.pow(radio,2); 
}

function potencia(numero,exponente){

    return Math.pow(numero,exponente); 
}



//funciones modulares

import  { filterNumbersGreaterThan } from "./funcion_modular/modAuxiliar.js";
console.log( filterNumbersGreaterThan ([1,8,6,2,10],7)); 


import { toHackerSpeak } from "./funcion_modular/modAuxiliar.js";
console.log(toHackerSpeak("Hacker Spain"));


import { getFileExtension } from "./funcion_modular/modAuxiliar.js";
console.log(getFileExtension("imagen.jpg")); 

import { flatArray } from "./funcion_modular/modAuxiliar.js";
console.log(flatArray([[1,2],[2,1]])); 

import { removeDuplicates } from "./funcion_modular/modAuxiliar.js";
console.log(removeDuplicates([1,1,2,4,4,3,5,7,5,1])); 

import { countLetter } from "./funcion_modular/modAuxiliar.js";
console.log(countLetter("a","chaquetas se llama mi perro"));


import { removeWords } from "./funcion_modular/modAuxiliar.js";
console.log(removeWords("This is a really bad test",["bad","test"])); 