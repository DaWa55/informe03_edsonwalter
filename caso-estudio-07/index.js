const h2 = document.querySelector('section form h2');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const clave = document.querySelector('#clave');
const repetirclave = document.querySelector('#repetirclave');
const mensaje = document.querySelector('#mensaje');
const btn = document.querySelector('#btnEnviar');

//Envío de datos usando solo javascript
btn.addEventListener('click', btnOnclick);

function btnOnclick(event){
    event.preventDefault();
    console.log("Nombre: " + nombre.value +
                "<br>Correo: " + correo.value +
                "<br>Clave:" + clave.value +
                "<br>repetirclave:" + repetirclave.value
                );

    const datos = {
        nombre: nombre.value,
        correo: correo.value,
        clave: clave.value
    }

    fetch('procesa.php', {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(data.status === 200) {
            mensaje.innerHTML = "SE REGISTRÓ SATISFACTORIAMENTE";
        } else {
            mensaje.innerHTML = "Error: " + data.message;
        }
    })
    .catch(error => console.log(error));
}