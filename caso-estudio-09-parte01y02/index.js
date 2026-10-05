const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const clave = document.querySelector('#clave');
const repetirclave = document.querySelector('#repetirclave');
const mensaje = document.querySelector('#mensaje');
const btn = document.querySelector('#btnEnviar');

// Caso 09: recuperar lo que se guardó antes y ponerlo en las cajas
const datosLocalStorage = JSON.parse(localStorage.getItem("datos"));
if (datosLocalStorage) {
    nombre.value = datosLocalStorage.nombre;
    correo.value = datosLocalStorage.correo;
}

console.log(localStorage.getItem("datos"));

btn.addEventListener('click', btnOnclick);

function btnOnclick(event) {
    event.preventDefault();
    console.log("Nombre:" + nombre.value +
                "\nCorreo:" + correo.value +
                "\nClave:" + clave.value +
                "\nRepetirclave:" + repetirclave.value
    );

    const datos = {
        nombre: nombre.value,
        correo: correo.value,
        clave: clave.value
    }

    // Caso 09: guardar en el localStorage
    localStorage.setItem('datos', JSON.stringify(datos));

    // Caso 07: enviar los datos a la base de datos (necesita XAMPP)
    fetch('procesa.php', {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.status === 200) {
            mensaje.innerHTML = "SE REGISTRÓ SATISFACTORIAMENTE";
        } else {
            mensaje.innerHTML = "Error: " + data.message;
        }
    })
    .catch(error => console.log(error));
}

// paso 10: abrir el modal al dar clic en Login
document.getElementById("loginLink").addEventListener("click", () => {
    document.getElementById("loginModal").style.display = "flex";
});

// paso 11: cerrar el modal con la X
document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("loginModal").style.display = "none";
});

// paso 12: validar usuario y contraseña
document.getElementById("loginBtn").addEventListener("click", () => {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (user === "admin" && pass === "12345") {
        message.textContent = "¡Login exitoso!";
        message.style.color = "green";
    } else {
        message.textContent = "Usuario o contraseña incorrectos.";
        message.style.color = "red";
    }
});