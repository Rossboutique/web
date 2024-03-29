// Función para mostrar un mensaje de éxito al enviar el formulario de contacto
function sendMessage(event) {
    event.preventDefault();
    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
}

// Función para resaltar la sección actual en el menú de navegación
function highlightCurrentSection() {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
            const id = section.getAttribute("id");
            const menuItems = document.querySelectorAll("a.nav-link");
            menuItems.forEach(item => {
                if (item.getAttribute("href") === `#${id}`) {
                    item.classList.add("active");
                } else {
                    item.classList.remove("active");
                }
            });
        }
    });
}

// Cambiar el color de fondo del menú de navegación al hacer scroll
function changeNavbarColor() {
    const navbar = document.querySelector("header");
    if (window.scrollY > 50) {
        navbar.classList.add("bg-dark");
    } else {
        navbar.classList.remove("bg-dark");
    }
}

// Mostrar u ocultar el menú en dispositivos móviles al hacer clic en el botón de hamburguesa
function toggleMobileMenu() {
    const navbarCollapse = document.querySelector("#navbarCollapse");
    navbarCollapse.classList.toggle("show");
}

// Cerrar el menú de navegación al hacer clic en un enlace en dispositivos móviles
function closeMobileMenu() {
    const navbarCollapse = document.querySelector("#navbarCollapse");
    navbarCollapse.classList.remove("show");
}

// Inicializar el carrusel de imágenes en la sección de inicio
document.addEventListener("DOMContentLoaded", function() {
    const carousel = new bootstrap.Carousel(document.querySelector(".carousel"), {
        interval: 5000, // Cambiar de imagen cada 5 segundos
        pause: "hover" // Pausar el carrusel al pasar el mouse sobre él
    });
});

// Event listener para cambiar el color de fondo del menú de navegación
window.addEventListener("scroll", changeNavbarColor);

// Event listener para mostrar u ocultar el menú en dispositivos móviles
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.querySelector(".navbar-toggler");
    navbarToggle.addEventListener("click", toggleMobileMenu);
});

// Event listener para cerrar el menú de navegación al hacer clic en un enlace en dispositivos móviles
document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(scrollLink => {
        scrollLink.addEventListener("click", closeMobileMenu);
    });
});

// Event listener para el formulario de contacto
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", sendMessage);
});

// Event listener para resaltar la sección actual en el menú de navegación
window.addEventListener("scroll", highlightCurrentSection);
