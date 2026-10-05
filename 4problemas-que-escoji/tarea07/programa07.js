// pido la cantidad de fotos
const fotos = parseInt(prompt("Ingrese la cantidad de fotos:"));
let precio;

// el precio depende de cuántas fotos son
if (fotos < 10) {
    precio = 1.50;
} else if (fotos <= 30) {
    precio = 1.00;
} else {
    precio = 0.50;
}

const importe = fotos * precio;

alert("Su precio es: " + precio + " Su importe es: " + importe);