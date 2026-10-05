const lado1 = parseFloat(prompt("Ingrese el lado 1:"));
const lado2 = parseFloat(prompt("Ingrese el lado 2:"));
const lado3 = parseFloat(prompt("Ingrese el lado 3:"));

if (lado1 === lado2 && lado2 === lado3) {
    alert("Es un triángulo equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("Es un triángulo isósceles");
} else {
    alert("Es un triángulo escaleno");
}