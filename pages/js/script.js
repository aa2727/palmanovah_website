class Diaporama {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelectorAll(".element");
        this.prevBtn = container.querySelector("#nav-gauche");
        this.nextBtn = container.querySelector("#nav-droite");
        this.index = 0;

        this.updateSlides();

        this.prevBtn.addEventListener("click", () => this.prev());
        this.nextBtn.addEventListener("click", () => this.next());

        window.addEventListener("resize", () => this.updateSlides());
    }

    updateSlides() {
        this.slides.forEach(slide => slide.classList.remove("active", "prev", "next"));

        const prevIndex = (this.index - 1 + this.slides.length) % this.slides.length;
        const nextIndex = (this.index + 1) % this.slides.length;

        this.slides[this.index].classList.add("active");
        this.slides[prevIndex].classList.add("prev");
        this.slides[nextIndex].classList.add("next");
    }

    prev() {
        this.index = (this.index - 1 + this.slides.length) % this.slides.length;
        this.updateSlides();
    }

    next() {
        this.index = (this.index + 1) % this.slides.length;
        this.updateSlides();
    }
}

// Initialisation pour **tous les diaporamas** de la page
document.querySelectorAll(".diapo").forEach(container => new Diaporama(container));
