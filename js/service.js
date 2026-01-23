let readMore = document.querySelectorAll('.read_more');
 readMore.forEach(element =>{
    element.addEventListener('click',function(){
        readMore.forEach(readMore=>readMore.classList.remove('active'))
        this.parentNode.classList.toggle('active')
    })
 })