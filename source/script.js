document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('aside nav a');

            const observerOptions = {
                root: null,
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.remove('bg-white', 'shadow-sm', 'text-zinc-950');
                            link.querySelector('i').classList.remove('text-accent');
                            
                            if (link.getAttribute('href').substring(1) === entry.target.id) {
                                link.classList.add('bg-white', 'shadow-sm', 'text-zinc-950');
                                link.querySelector('i').classList.add('text-accent');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => observer.observe(section));
        });