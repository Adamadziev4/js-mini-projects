const listEl = document.getElementById('list');
const pagination = document.getElementById('pagination');
const bugsInfo = document.getElementById('bugs-container');

let currentPage = 1;
let rows = 5;

getBugs();

async function getBugs() {
    const url = 'https://lk.ellco.ru:8000/bug_tracker';

    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'X-AUTH-TOKEN': '38fa0880d113c79d8e0196481d4f4562576b5348de1ab9619696d3449de5',
            'Content-Type': 'application/json',
            'Application': 'application/json'
        }
    });

    const respData = await resp.json();

    const bugs = [];

    for(let i = 0; i < respData.bug_trackers.length; i++) {
        bugs.push(respData.bug_trackers[i]);
    };

    console.log(respData)

    displayList(bugs, listEl, rows, currentPage);
    setupPagination(bugs, pagination, rows);
}

function displayList(items, wrapper, rowsPerPage, page) {
    wrapper.innerHTML = '';
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;

    let paginationItems = items.slice(start, end);

    console.log(paginationItems);

    for(let i = 0; i < paginationItems.length; i++) {

        let timestamp = paginationItems[i].createdAt.timestamp;
        let date = new Date(timestamp * 1000);

        let itemEl = document.createElement('div');

        itemEl.classList.add('item');
        itemEl.innerHTML = `
            <strong>Имя:</strong> ${paginationItems[i].name} <br>
            <strong>Описание:</strong> ${paginationItems[i].description} <br>
            <strong>Статус:</strong> ${paginationItems[i].status.tooltip}
        `;

        wrapper.appendChild(itemEl);

        bugsInfo.classList.remove('bugs-container');

        itemEl.addEventListener('click', () => {
            bugsInfo.classList.toggle('bugs-container');

            bugsInfo.innerHTML = `
            <div class="info">
                <strong>Имя:</strong> ${paginationItems[i].name} <br>
                <strong>Описание:</strong> ${paginationItems[i].description} <br>
                <strong>Статус:</strong> ${paginationItems[i].status.tooltip} <br>  
                <strong>С какого устройства: </strong> ${paginationItems[i].product.name} <br>
                <strong>Дата: </strong> ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} <br>
            </div>
            `

            bugsInfo.addEventListener('click', () => {
                bugsInfo.innerHTML = '';
                bugsInfo.classList.remove('bugs-container');
            })
        });
    }
}

function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = '';

    let pageCount = Math.ceil(items.length / rowsPerPage);  // Создаем страниц на столько на сколько элементов мы хотим вывести

    for(let i = 1; i <= pageCount; i++) {
        let btn = paginationBtn(i, items);

        wrapper.appendChild(btn);
    }
}

function paginationBtn(page, items) {
    let btn = document.createElement('button');

    btn.innerText = page;

    btn.addEventListener('click', () => {
        currentPage = page;
        displayList(items, listEl, rows, currentPage);
    });

    return btn;
}