document.querySelectorAll('h2').forEach(title => {
    title.style.textShadow = '0 0 10px #d4af37, 0 0 20px #d4af37';
    setInterval(() => {
        title.style.textShadow = title.style.textShadow ? '' : '0 0 10px #d4af37, 0 0 20px #d4af37';
    }, 1000);
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
        themeToggle.textContent = 'Dark Mode';
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        themeToggle.classList.remove('btn-outline-light');
        themeToggle.classList.add('btn-outline-dark');
    }
});

// Toggle theme and save preference
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');
    themeToggle.textContent = isLightMode ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('theme', isLightMode ? 'light-mode' : 'dark-mode');

    // Adjust navbar readability for light mode
    const navbar = document.querySelector('.navbar');
    if (isLightMode) {
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light', 'bg-light');
        themeToggle.classList.remove('btn-outline-light');
        themeToggle.classList.add('btn-outline-dark');
    } else {
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
        themeToggle.classList.remove('btn-outline-dark');
        themeToggle.classList.add('btn-outline-light');
    }
});
