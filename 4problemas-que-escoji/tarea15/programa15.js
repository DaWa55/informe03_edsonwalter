// tipo de cambio, se puede cambiar según el día
const tipoCambio = 3.75;

const soles = parseFloat(prompt("Ingrese la cantidad de dinero en soles:"));
const dolares = soles / tipoCambio;

alert("Con S/ " + soles + " tienes $ " + dolares.toFixed(2) + " dólares");