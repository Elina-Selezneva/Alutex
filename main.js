
// открыть по кнопке
$('.js-button-campaign').click(function() {

    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() {
    $('.js-overlay-campaign').fadeOut();

});

document.querySelectorAll('.callPopup').forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault();
        showPopup();
    })
});

function showPopup() {
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
}

document.querySelector('.close').addEventListener('click', event => {
    closePopup()
})

function closePopup() {
        $('.js-overlay-campaign').fadeOut();
}

window.addEventListener('load', ()=>{

    const left = document.querySelector('.btn-left');
    const right = document.querySelector('.btn-right');
    const slider = document.querySelector('.corusel__slide');
    const images = document.querySelectorAll('.page7_card');


    let counter = 0;
    const stepSize = images[0].clientWidth;

    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

    right.addEventListener('click',()=>{
        if (counter >= images.length -1) counter = -1;
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    });
    left.addEventListener('click',()=>{
        if (counter <= 0) counter = images.length;
        slider.classList.add('transformAnimation');
        counter--;
        slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
    })

})
