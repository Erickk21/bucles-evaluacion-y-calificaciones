// Parte 1
const arrayNumeros = [10, 20, 30, 40, 50];

let sumaTotal = 0;

for (let i = 0; i < arrayNumeros.length; i++) {
    sumaTotal += arrayNumeros[i];
}

console.log(sumaTotal);

// Parte 2
let numero;

while (true) {
    numero = parseInt(prompt("Ingresa un número (un número negativo para salir):"));

    if (numero < 0) {
        console.log("Número negativo ingresado. Salir del bucle.");
        break;
    }

    console.log("Número ingresado:", numero);
}

// Parte 3
let contrasenaCorrecta = "secreta123";
let contrasenaIngresada;

do {
    contrasenaIngresada = prompt("Ingresa la contraseña:");

    if (contrasenaIngresada !== contrasenaCorrecta) {
        console.log("Contraseña incorrecta. Intenta de nuevo.");
    }
} while (contrasenaIngresada !== contrasenaCorrecta);

console.log("Contraseña correcta. Acceso permitido.");



