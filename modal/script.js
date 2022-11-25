const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createModal();
});

function createModal() {
    container.classList.toggle('container');
    
    let modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
        <div class='text'>
            <h2>Lorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Adipisci labore minima minus dolores, consequuntur commodi 
            error tempore nostrum accusantium veniam!</p>
        </div>
        <button class='close-btn' id='close-btn'>&#10006</button>
    `;

    container.appendChild(modal);

    const closeBtn = document.getElementById('close-btn');

    closeBtn.addEventListener('click', () => {
        container.classList.remove('container');
        modal.remove();
    });
}