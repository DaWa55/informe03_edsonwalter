const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Paso 2 y 3: agregar la tarea con sus span (segunda forma)
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = taskInput.value;
    console.log(task);

    const li = document.createElement("li");
    li.textContent = task;
    li.append(  agregarBotonesSpan("X","delete-btn"),
                agregarBotonesSpan("✎","edit-btn"));

    taskList.appendChild(li);

} );


function agregarBotonesSpan(texto, nombreClase) {
    const btn = document.createElement("span");
    btn.textContent = texto;
    btn.classList.add(nombreClase);
    return btn;
}   
// Paso 4: eliminar y editar
taskList.addEventListener("click", (event) => {
    if (event.target.closest(".delete-btn")) {
        if (confirm("¿Estás seguro de borrar este elemento?")) {
            event.target.closest(".delete-btn").parentElement.remove();
        }
    } else if (event.target.closest(".edit-btn")) {
        const txtEdit = prompt("Editar");
        event.target.closest(".edit-btn").parentElement.firstChild.textContent = txtEdit;
    }
});

// Paso 5: cambiar de tema
document.querySelector("#toggle-theme-btn").addEventListener("click", (event) => {
    document.body.classList.toggle("dark-theme");
});