
const slides = document.querySelectorAll(".element");
const prevBtn = document.getElementById("nav-gauche");
const nextBtn = document.getElementById("nav-droite");

let index = 0;

function updateSlides() {
    slides.forEach(slide => {
        slide.classList.remove("active", "prev", "next");
    });

    const prevIndex = (index - 1 + slides.length) % slides.length;
    const nextIndex = (index + 1) % slides.length;

    slides[index].classList.add("active");
    slides[prevIndex].classList.add("prev");
    slides[nextIndex].classList.add("next");
}

prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlides();
});

nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlides();
});

// Initialisation
updateSlides();
