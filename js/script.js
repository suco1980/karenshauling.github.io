const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
//_________________________________________________________________________________________________________
const carouselCaption = document.querySelectorAll(".carousel-caption ");
//________________________________________________________________________________________________________
hamburger.addEventListener("click",()=>{
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");	
	let newArray = Array.from(carouselCaption);
	newArray.map(index=>{
	index.classList.toggle("active");
	});
	contact();

});

// ______________________________________________________________________________________________________________________________
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
	hamburger.classList.remove('active');
	navMenu.classList.remove('active');
	// index.classList.remove("active");
}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function contact(){
const contactContainer = document.querySelector(".contact-container");
if(contactContainer === null){
   return true;
}else{
	contactContainer.classList.toggle("active")
}
}
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// footer display year
window.addEventListener('DOMContentLoaded',(event)=>{
  document.querySelector('.current_year').innerHTML = new Date().getFullYear();
});

