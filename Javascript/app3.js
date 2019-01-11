let nombre, mensaje;

nombre = 'Marco A';
nombre = "Marco A";
// nombre = 'Marco A";
mensaje = 'y entonces dije "buen curso!!"';
mensaje = 20;

// concatenar javascript

mensaje = 'java' + 'javascript';

// uniendo variables en una sola

let aprendiendo = 'Aprendiendo',
    tecnologia = 'javascript',
    programar = 'aprendiendo a programar',
    frase = 'aprendiendo Javascript, CSS, HTML para ser FrontEnd';


console.log(tecnologia.concat(' ', 'es genial'));
console.log(Aprendiendo.toUpperCase() );
console.log(programar.toLowerCase() );
console.log(frase.indexOf('Javascript'));
console.log(mensaje.substring(0,11));
console.log(frase.split(' '));
console.log(frase.replace('CSS', 'PHP'));
console.log(frase.includes('CSS'));
console.log(Aprendiendo.repeat(10) + ' ');