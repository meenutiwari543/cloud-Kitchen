// Header animation on load
window.addEventListener("load", () => {
    document.querySelector("header").style.opacity = "0";
    document.querySelector("header").style.transform = "translateY(-20px)";

    setTimeout(() => {
        document.querySelector("header").style.transition = "0.8s";
        document.querySelector("header").style.opacity = "1";
        document.querySelector("header").style.transform = "translateY(0)";
    }, 200);
});

// Search bar focus animation
const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
    searchInput.style.transform = "translate(-50%, -50%) scale(1.05)";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.transform = "translate(-50%, -50%) scale(1)";
});

// Navbar hover underline animation
const navLinks = document.querySelectorAll("header ul li a");

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.borderBottom = "2px solid #8b4513";
    });

    link.addEventListener("mouseout", () => {
        link.style.borderBottom = "none";
    });
});
