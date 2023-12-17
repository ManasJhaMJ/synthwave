VanillaTilt.init(document.querySelectorAll(".glassmorphic-card"), {
    max: 15,
    speed: 200,
    glare: true,
    "max-glare": 1,
});

ScrollReveal({ reset: false });
ScrollReveal().reveal('.heading', { delay: 1300 });
ScrollReveal().reveal('.heading2', { delay: 2000 });
ScrollReveal().reveal('.card', { delay: 700 });