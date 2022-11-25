const text = 'Всем привет!!!';

let index = 1;

function writeText() {
    document.body.innerText = text.slice(0, index);

    index++;

    if(index > text.length) {
        setTimeout(() => {
            index = 0;
        }, 500);
    }
}

setInterval(writeText, 200);