// JAVASCRIPT - LA RUTA DE PAU PROPOSAL

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU TOGGLE
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
                icon.className = 'fa-solid fa-bars';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(245, 242, 235, 0.98)';
                navLinks.style.padding = '20px';
                navLinks.style.borderBottom = '2px solid var(--color-jungle-dark)';
                icon.className = 'fa-solid fa-xmark';
            }
        });

        // Close menu on link click (mobile)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.className = 'fa-solid fa-bars';
                }
            });
        });
    }

    // 2. CTA & SUCCESS TRIGGER
    const btnAccept = document.getElementById('btn-accept');
    const ctaBox = document.querySelector('.cta-box');
    const successPanel = document.getElementById('success-panel');
    const btnResetSuccess = document.getElementById('btn-reset-success');

    if (btnAccept && successPanel && ctaBox) {
        btnAccept.addEventListener('click', () => {
            ctaBox.style.display = 'none';
            successPanel.style.display = 'block';
            createConfetti();
            // Open WhatsApp link in new tab after showing success
            window.open("https://wa.me/34601108311?text=Hola%20Pau%2C%20hemos%20visto%20tu%20propuesta%20para%20Arenal%20Backpackers%20Resort%20y%20nos%20interesa%20comenzar%20el%20acuerdo%20de%20canje.", "_blank");
        });
    }

    if (btnResetSuccess && successPanel && ctaBox) {
        btnResetSuccess.addEventListener('click', () => {
            successPanel.style.display = 'none';
            ctaBox.style.display = 'block';
        });
    }

    // 3. CONFETTI ANIMATION
    function createConfetti() {
        const colors = ['#ffb703', '#e76f51', '#3d8c4c', '#142f1b', '#ffffff'];
        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '9999';
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            
            document.body.appendChild(confetti);
            
            const speed = 4 + Math.random() * 4;
            const drift = -1.5 + Math.random() * 3;
            
            let top = -10;
            let left = parseFloat(confetti.style.left);
            
            const interval = setInterval(() => {
                top += speed;
                left += drift;
                confetti.style.top = top + 'px';
                confetti.style.left = left + 'px';
                
                if (top > window.innerHeight) {
                    clearInterval(interval);
                    confetti.remove();
                }
            }, 20);
        }
    }
});
