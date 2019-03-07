// crear arerglos

const numeros = [10, 20, 30, 40, 50];
//console.log(numeros)


// Arreglos de strings (metodo alternativo)
const meses = new Array('enero', 'febrero', 'marzo', 'abril')
//console.log(meses.length)
//console.log(Array.isArray(meses));
//console.log(meses[1]);

//Añadir un dato al arreglo
meses[4] = 'Mayo';
meses.push('junio');

//Añadir en el inicio del arreglo
meses.unshift('mes 0');
//console.log(meses);

//Eliminar un elemento de un arreglo
meses.pop()
// Eliminar un elemento del inicio
meses.shift()
// quitar un rango
meses.splice(2, 1);
// revertir
meses.reverse()

console.log(meses);

//encontrar elemento en el arreglo
//console.log(meses.indexOf('abril'));



// Arreglos mezclados
//const mezclado = ['Hola', 20, true, null, false, undefined];
//console.log(mezclado);

