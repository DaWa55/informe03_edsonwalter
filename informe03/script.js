// Calculadora - Informe de Práctica IP03
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".boton");

let numeroActual = "";    // el número que se está escribiendo
let numeroAnterior = "";  // el primer número de la operación
let operador = "";        // + - * /
let hayResultado = false; // para saber si lo que se ve es un resultado
let mensajeError = "";    // por si se divide entre 0

// cada botón avisa qué tipo es (numero, operador, igual o limpiar)
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const tipo = boton.dataset.tipo;
        const valor = boton.dataset.valor;

        // si quedó un error en pantalla, empezamos de cero
        if (mensajeError !== "") {
            limpiar();
        }

        if (tipo === "numero") {
            agregarNumero(valor);
        } else if (tipo === "operador") {
            elegirOperador(valor);
        } else if (tipo === "igual") {
            calcularResultado();
        } else if (tipo === "limpiar") {
            limpiar();
        }

        mostrar();
    });
});

function mostrar() {
    if (mensajeError !== "") {
        pantalla.value = mensajeError;
    } else {
        pantalla.value = numeroAnterior + operador + numeroActual;
    }
}

function agregarNumero(digito) {
    // si había un resultado y escribo otro número, empiezo de nuevo
    if (hayResultado) {
        numeroActual = "";
        hayResultado = false;
    }

    // evito ceros a la izquierda como 007
    if (numeroActual === "0") {
        numeroActual = digito;
    } else if (numeroActual === "-0") {
        numeroActual = "-" + digito;
    } else {
        numeroActual += digito;
    }
}

function elegirOperador(op) {
    hayResultado = false;

    // el menos al inicio sirve para escribir un número negativo
    if (numeroActual === "" && numeroAnterior === "") {
        if (op === "-") {
            numeroActual = "-";
        }
        return;
    }

    // si solo hay un "-" escrito todavía no es un número
    if (numeroActual === "-") {
        return;
    }

    // si ya hay un operador y no escribí el segundo número, solo lo cambio
    if (numeroActual === "") {
        operador = op;
        return;
    }

    // si ya había una operación pendiente, la resuelvo primero
    if (numeroAnterior !== "" && operador !== "") {
        if (!resolver()) {
            return;
        }
    }

    numeroAnterior = numeroActual;
    numeroActual = "";
    operador = op;
}

function calcularResultado() {
    // solo calculo si tengo los dos números y el operador
    if (numeroAnterior === "" || operador === "" || numeroActual === "" || numeroActual === "-") {
        return;
    }
    if (resolver()) {
        hayResultado = true;
    }
}

// hace la operación y deja el resultado en numeroActual
function resolver() {
    const a = Number(numeroAnterior);
    const b = Number(numeroActual);
    let resultado;

    if (operador === "+") {
        resultado = a + b;
    } else if (operador === "-") {
        resultado = a - b;
    } else if (operador === "*") {
        resultado = a * b;
    } else if (operador === "/") {
        if (b === 0) {
            limpiar();
            mensajeError = "Error: división entre 0";
            return false;
        }
        resultado = a / b;
    }

    // redondeo para que no salgan cosas como 0.30000000000000004
    resultado = Math.round(resultado * 1e10) / 1e10;

    numeroActual = String(resultado);
    numeroAnterior = "";
    operador = "";
    return true;
}

function limpiar() {
    numeroActual = "";
    numeroAnterior = "";
    operador = "";
    hayResultado = false;
    mensajeError = "";
}