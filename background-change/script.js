const btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    randomBg()
});

function randomBg() {
    let backgroundColors = ['red', 'blue', 'aqua', 'purple', 'green', 'yellow', 'orange', 'grey', 'black'];
    let randomTwo = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`

    // let random = Math.round(Math.random() * backgroundColors.length);

    document.body.style.backgroundColor = randomTwo;
}