
function generate() {
    let catContainer = document.querySelector('.cat-container');
    let img = document.createElement('img');
    img.src = "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp=";
    img.classList.add('img');
    catContainer.appendChild(img);
};