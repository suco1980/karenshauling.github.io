const dropBtn = document.querySelector('.drop-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
});