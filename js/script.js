// Płynne przewijanie menu (smooth scroll) dla linków zaczynających się od '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Sprawdzamy, czy link nie jest pustym '#' ani przełącznikiem języka
        if (targetId && targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Zabezpieczenie dla urządzeń mobilnych – automatyczne zamykanie menu (jeśli istnieje) po kliknięciu linku
const navLinks = document.querySelectorAll('.links a');
const navMenu = document.querySelector('.links');

if (navLinks && navMenu) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Jeśli w CSS była używana klasa 'active' lub 'show' do otwierania menu mobilnego, tutaj ją zdejmujemy
            navMenu.classList.remove('active');
            navMenu.classList.remove('show');
        });
    });
}
