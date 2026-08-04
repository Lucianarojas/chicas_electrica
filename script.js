document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navUl = document.querySelector(".nav ul");
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    const navLinks = document.querySelectorAll(".nav-link");

    // Menú responsive
    menuToggle.addEventListener("click", () => {
        navUl.classList.toggle("active");
    });

    // Switch día/noche
    modeToggle.addEventListener("change", () => {
        if (modeToggle.checked) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }
    });

    // Resaltar sección activa
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
