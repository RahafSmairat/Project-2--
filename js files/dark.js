document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
      
        body.classList.toggle('dark-theme');

        
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light Theme';
        } else {
            themeToggle.textContent = 'Dark Theme';
        }
    });
});
