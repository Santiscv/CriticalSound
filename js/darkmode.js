const body = document.body;
const btnDarkMode = document.getElementById("dark_mode");
const btnDarkModeResponsive = document.getElementById("dark_mode_responsive");

// Función para manejar el cambio de modo oscuro
toggleDarkMode=() => {
    body.classList.toggle("dark");

    // Guardar el estado en localStorage
    if (body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }
};

// Asignar la función a ambos botones
btnDarkMode.addEventListener("click", toggleDarkMode);
btnDarkModeResponsive.addEventListener("click", toggleDarkMode);

// Obtener el modo actual
if (localStorage.getItem("dark-mode") === "true") {
    body.classList.add("dark");
} else {
    body.classList.remove("dark");
}
