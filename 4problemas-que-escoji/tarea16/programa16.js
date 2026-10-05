const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));
const operacion = prompt("Ingrese la operación: S (suma), R (resta), M (multiplicación), D (división)").toUpperCase();

let resultado;

switch (operacion) {
    case "S":
        resultado = num1 + num2;
        break;
    case "R":
        resultado = num1 - num2;
        break;
    case "M":
        resultado = num1 * num2;
        break;
    case "D":
        if (num2 === 0) {
            resultado = "No se puede dividir entre cero";
        } else {
            resultado = num1 / num2;
        }
        break;
    default:
        resultado = "Operación no válida";
}

alert("El resultado es: " + resultado);