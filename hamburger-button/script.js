const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});


// btn.addEventListener('click', () => {
//   if(nav.style.backgroundColor != 'white') {
//         nav.style.backgroundColor = 'white'
//     } else {
//         nav.style.backgroundColor = 'purple';
//     }  
// });
