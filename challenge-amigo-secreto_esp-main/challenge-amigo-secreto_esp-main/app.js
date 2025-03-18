// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los amigos ingresados
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // Capturamos el valor del campo de texto
    let nombre = document.getElementById('amigo').value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir si está vacío
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de texto
    document.getElementById('amigo').value = "";

    // Actualizar la lista de amigos en la interfaz
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    // Agregar cada amigo a la lista en el HTML
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Crear una copia del array de amigos y mezclarlo
    let amigosMezclados = [...amigos];
    amigosMezclados.sort(() => Math.random() - 0.5); // Mezclar aleatoriamente

    // Asignar a cada amigo su amigo secreto
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado previo

    amigos.forEach(function(amigo, index) {
        let amigoSecreto = amigosMezclados[(index + 1) % amigosMezclados.length]; // Asegura que no se asigne a uno mismo
        let li = document.createElement('li');
        li.textContent = `${amigo} le corresponde a ${amigoSecreto}`;
        resultado.appendChild(li);
    });
}

