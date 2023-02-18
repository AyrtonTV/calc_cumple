// Seleccionar los elementos relevantes del HTML
const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");
const equals = document.getElementById("equals");
const body = document.querySelector("body");

// Función para actualizar el valor del campo de entrada
function updateInput(value) {
    input.value = input.value + value;
}

// Función para evaluar la expresión aritmética ingresada
function calculate() {
    const result = eval(input.value);
    input.value = result;

    // Comprobar si el usuario ingresó "180264"
    if (input.value === "180259") {
        // Ocultar la calculadora
        document.querySelector(".calculator").style.display = "none";

        // Crear una imagen y un párrafo para mostrar en la pantalla
        const img = document.createElement("img");
        img.src = "img/SAM_0133.JPG";
        img.style.display = "block";
        img.style.margin = "0 auto";
        img.style.width = "50%";
        const p = document.createElement("p");
        p.innerText = "¡Feliz Cumpleaños!";
        p.style.textAlign = "center";
        p.style.marginTop = "20px";

        // Agregar la imagen y el párrafo al cuerpo de la página
        body.appendChild(img);
        body.appendChild(p);

        // Reproducir música de fondo
        const audio = new Audio("audio/mananitas.mp3");
        audio.play();
    }
}

// Agregar un evento click a cada botón
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        updateInput(button.value);
    });
});

// Agregar un evento keypress al campo de entrada
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar que la tecla Enter actualice la página
        calculate();
    }
});

// Agregar un evento click al botón de igualdad
equals.addEventListener("click", () => {
    calculate();
});
