let numberSlide = 0;
const slides = document.querySelectorAll('.form_slide');
const slideDots = document.querySelectorAll('.form_count');

document.querySelectorAll('.form_next').forEach(element => {
    element.addEventListener('click', event =>{
        event.preventDefault();
        showSlide(1)
    })
})
document.querySelectorAll('.input_return').forEach(element => {
    element.addEventListener('click', event =>{
        event.preventDefault()
        showSlide(-1)
    })
})

function showSlide(nextSlide) {

    console.log(nextSlide)
    let currentSlide = slides[numberSlide];
    currentSlide.classList.remove('active');
    slideDots[numberSlide].classList.remove('active');
    numberSlide = numberSlide + nextSlide;
    slides[numberSlide].classList.add('active')
    slideDots[numberSlide].classList.add('active');
}