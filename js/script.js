document.addEventListener("DOMContentLoaded", () => {
    // Pobieramy elementy do animacji pojawiania się
    const elementsToAnimate = document.querySelectorAll(".card, .glass");
    
    // Dynamicznie dodajemy bazową klasę zamiast pisać inline-style w HTML, dla czystości kodu
    elementsToAnimate.forEach(el => {
        el.classList.add("reveal");
    });

    // Skonfigurowany Intersection Observer z odpowiednim progiem
    const observerOptions = {
        root: null, // Obserwacja w kontekście widoku przeglądarki
        rootMargin: "0px 0px -50px 0px", // Animacja odpala się 50px przed całkowitym wejściem na ekran
        threshold: 0.15 // 15% elementu musi być widoczne
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Element animuje się tylko raz podczas przewijania
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
        revealObserver.observe(element);
    });
});
