const btn = document.getElementById('btn');
const input = document.getElementById('input');

btn.addEventListener('click', () => {
    btn.classList.toggle('btn-active');
    input.classList.toggle('active');
});
