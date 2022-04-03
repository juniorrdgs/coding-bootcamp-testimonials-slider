let totalSlides = document.querySelectorAll('.card-item').length;
let currentSlide = 0;
let mMedia = window.matchMedia("(max-width: 1439px)");

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();

}
function updateMargin(matchMedia) {
    let sliderItemWidth = document.querySelector('.card-item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    if (!mMedia.matches) {
        if (currentSlide != 0) {
            document.querySelector('.card-item').style.marginLeft = `calc(-${newMargin}px - 210px)`;
        } else {
            document.querySelector('.card-item').style.marginLeft = `149px`;
        }
    } else {
        if (currentSlide != 0) {
            document.querySelector('.card-item').style.marginLeft = `calc(-${newMargin}px)`;
        } else {
            document.querySelector('.card-item').style.marginLeft = `60px`;
        }
    }
}

//setInterval(goNext, 4000);