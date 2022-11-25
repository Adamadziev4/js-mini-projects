const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.getElementById('btn').classList.toggle('dark');
});