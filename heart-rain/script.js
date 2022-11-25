const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setInterval(createHeart, 300);

    btn.remove();
});

function createHeart() {
    const heart = document.createElement('div');

    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'

    heart.innerText = '❤️';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000)
}
