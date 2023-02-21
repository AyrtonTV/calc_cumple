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
        body.style.backgroundColor = "#F6D4BA";
        // Ocultar la calculadora
        document.querySelector(".calculator").style.display = "none";

        // Crear una imagen y un párrafo para mostrar en la pantalla
        const img = document.createElement("img");
        img.src = "img/SAM_0133.JPG";
        img.style.display = "block";
        img.style.margin = "0 auto";
        img.style.borderRadius = "10px"
        img.style.boxShadow = "1px 1px 5px #0C120C"
        img.style.width = "50%";
        const h2 = document.createElement("h2");
        h2.innerText = "¡Feliz Cumpleaños, Má!";
        h2.style.textAlign = "center";
        h2.style.marginTop = "20px";
        h2.style.color = "#FF8CC6";
        h2.style.textShadow = "1px 1px 1px #0C120C";
        const p = document.createElement("p");
        p.innerText = "Espero que te lo pases muy bien en tu día, que disfrutes la comida si te llevan a comer, que disfrutes los regalos que te den y disfruta este pequeño easter egg dentro de una de mis prácticas de programación. (No te preocupes, no es visible sin meter la clave xD) ";
        p.style.textAlign = "center";
        p.style.margin = "20px 100px 0";
        p.style.color = "#FF8CC6";
        p.style.fontSize = "18px"
        p.style.textShadow = "1px 1px 1px #0C120C";

        // Agregar la imagen y el párrafo al cuerpo de la página
        body.appendChild(img);
        body.appendChild(h2);
        body.appendChild(p);

        // Reproducir música de fondo
        const audio = new Audio("audio/mananitas.mp3");
        audio.play();
    }
    else if(input.value === "221092"){
        body.style.backgroundColor = "#F6D4BA";
        document.querySelector(".calculator").style.display = "none";

        const video = document.createElement("video");
        // video.src = "vids/maru.mp4";
        video.controls = false;
        video.autoplay = true;
        video.muted = false;
        video.loop = true;
        video.style.margin = "100px auto 0";
        video.style.display = "block";
        video.style.width = "30%";
        const source = document.createElement("source");
        source.src = "vids/maru.mp4";
        source.type = "video/mp4";

        body.appendChild(video);
        video.appendChild(source);
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
