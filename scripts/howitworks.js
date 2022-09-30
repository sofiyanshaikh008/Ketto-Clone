
window.onload  = () =>{
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './styles/nav.css';
  // append this link to head of document
  document.querySelector('head').append(link);
  document.getElementById('navbar').innerHTML = navbar();

 document.getElementById('footerOne').innerHTML = footer();

appendPopLogin();
document.getElementById('signin').addEventListener('click', toggleLogin)
}








let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
event.addEventListener('click', () => {
    if (event.classList.contains("active")) {
        event.classList.remove("active");
    }
    else {
        event.classList.add("active");
    }
})
});


$(function () {
// Owl Carousel
let owl = $(".owl-carousel");
owl.owlCarousel({
    items: 3,
    margin: 40,
    loop: true,
    nav: true
});
});

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

if(index<0){
index = slides.length-1;
}

if(index>slides.length-1){
index = 0;
}

for(let i=0;i<slides.length;i++){
slides[i].style.display = "none";
dot[i].classList.remove("active");
}

slides[index].style.display= "block";
dot[index].classList.add("active");

index++;

setTimeout(changeSlide,2000);

}

changeSlide();