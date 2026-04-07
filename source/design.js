tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Satoshi', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                zinc: {
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                    950: '#09090b',
                },
                accent: {
                    DEFAULT: '#059669', // Emerald 600
                    light: '#d1fae5',   // Emerald 100
                    dark: '#065f46',    // Emerald 800
                }
            },
            boxShadow: {
                'bento': '0 20px 40px -15px rgba(0,0,0,0.05)',
                'bento-hover': '0 30px 60px -15px rgba(0,0,0,0.08)',
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
            }
        }
    }
}

async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error('Network response was not ok');
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error('Ошибка загрузки компонента:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent('sidebar-placeholder', 'components/sidebar.html');
});
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('footer', 'components/footer.html');
});
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'components/header.html');
});