document.addEventListener('DOMContentLoaded',()=>{
    const elementCarousel = document. querySelectorAll('.carousel');
    M.Carousel.init(elementCarousel,{
        duration: 150,
        dist:-80,
        shift:5,
        padding:5,
        numVisible:3,
        indicators: true,
        noWrap: false
    });

});