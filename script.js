const miDiv = document.getElementById("miDiv");
const botonJugar = document.getElementById("botonJugar");
let juegoJugado = false;
let victorias = 0;
let derrotas = 0;
let partidasTotales = 0;

const computerChoice = "a";
cambiarImagen(computerChoice);


function actualizarContadores(resultado) {
    partidasTotales++;
    if (resultado === '¡Ganaste!') {
        victorias++;
    } else if (resultado === '¡Perdiste!') {
        derrotas++;
    }
    // Actualizar los elementos de texto para mostrar los contadores
    document.getElementById('victorias').textContent = `Victorias: ${victorias}`;
    document.getElementById('derrotas').textContent = `Derrotas: ${derrotas}`;
    document.getElementById('partidasTotales').textContent = `Partidas Totales: ${partidasTotales}`;
}
// Función para cambiar la imagen en el div
function cambiarImagen(esCondicionVerdadera) {

    const imgElement = document.createElement("img");
    imgElement.classList.add("choices");

    if (esCondicionVerdadera === "a") {
        imgElement.src = "img/piedra.jpg";
        imgElement.classList.add("choices", "oponente");
    } else if (esCondicionVerdadera === "piedra") {
        imgElement.src = "img/piedra.jpg";
        imgElement.classList.add("choices", "entrada");
    } else if (esCondicionVerdadera === "tijera") {
        imgElement.src = "img/tijera.jpg";
        imgElement.classList.add("choices", "entrada");
    } else if (esCondicionVerdadera === "papel") {
        imgElement.src = "img/papel.jpg";
        imgElement.classList.add("choices", "entrada");
    }
    miDiv.innerHTML = "";

    // Agregar la imagen al div
    miDiv.appendChild(imgElement);
}

function play(userChoice) {
    if (juegoJugado) {
        return; // Salir si el juego ya se jugó
    }
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultText = document.getElementById('resultText');

    // Cambiar la imagen en el div según la elección de la computadora
    cambiarImagen(computerChoice);

    if (userChoice === computerChoice) {
        resultText.textContent = '¡Empate!';
    } else if ((userChoice === 'piedra' && computerChoice === 'tijera') ||
        (userChoice === 'papel' && computerChoice === 'piedra') ||
        (userChoice === 'tijera' && computerChoice === 'papel')) {
        resultText.textContent = '¡Ganaste!';
    } else {
        resultText.textContent = '¡Perdiste!';
    }
    actualizarContadores(resultText.textContent);

    juegoJugado = true;
    botonJugar.disabled = false;
}

botonJugar.addEventListener('click', () => {
    // Limpiar el resultado y habilitar el juego
    document.getElementById('resultText').textContent = '';
    juegoJugado = false;
    botonJugar.disabled = true;
    let computerChoice = "a";
    cambiarImagen(computerChoice);

});
