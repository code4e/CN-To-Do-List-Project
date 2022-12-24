
let itemsContainer = document.querySelector('.items-cont');
itemsContainer.addEventListener('click', e => {
    e.stopPropagation();
    console.log(e.target);
});