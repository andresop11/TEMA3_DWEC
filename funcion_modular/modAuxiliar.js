export  function  filterNumbersGreaterThan(number,filter){
    let result=[]; 

    for (let i=0;i<=number.length;i++){
        if (number[i]<filter){
            result.push(number[i]); 
        }
    }

    return result; 
}


export function toHackerSpeak(text){
    let hackerStr = ""; // String vacío para construir el resultado

    for (let i = 0; i < text.length; i++) {
        // Convertimos cada carácter según las reglas
        if (text[i] === 'a' || text[i] === 'A') {
            hackerStr += '4';
        } else if (text[i] === 'e' || text[i] === 'E') {
            hackerStr += '3';
        } else if (text[i] === 'i' || text[i] === 'I') {
            hackerStr += '1';
        } else if (text[i] === 'o' || text[i] === 'O') {
            hackerStr += '0';
        } else if (text[i] === 's' || text[i] === 'S') {
            hackerStr += '5';
        } else {
            hackerStr += text[i]; // Otros caracteres permanecen iguales
        }
    }

    return hackerStr; // Devolvemos el string transformado
}


export function getFileExtension(file) {
    return "La extension es: " + file.substring(file.lastIndexOf('.'));
}

export function flatArray(arr){
    return arr.flat(); 
}

export function removeDuplicates(arr){

    return [...new Set(arr)]; //set se utiliza para crear otro array sin que haya duplicados 
}


export function countLetter(letter,text){
    let contador=0; 
    for (let i=0; i<text.length;i++){

        if (letter==text[i]){
            contador++;
        }
    }

    return "La letra '" + letter + "' aparece en el texto '" + text + "' " + contador + " veces"; 
}


export function removeWords(str,words){
    let result = ""; // Inicializamos una variable para almacenar el resultado
    
    // Separamos el texto en un array de palabras
    const strArray = str.split(' ');

    // Recorremos cada palabra en el array
    for (let i = 0; i < strArray.length; i++) {
        // Si la palabra no está en el array de palabras a remover
        if (!words.includes(strArray[i])) {
            result += strArray[i] + ' '; // La agregamos al resultado
        }
    }

    return result; // Devolvemos el resultado sin espacios al final
}
