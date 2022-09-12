const slider = document.querySelector('.slider'),
    leftBtn = slider.querySelector('.slide-left'),
    rightBtn = slider.querySelector('.slide-right'),
    sliderImg = slider.querySelectorAll('.slider-item')

leftBtn.addEventListener('click', () => {
    for (const index in sliderImg) {
        console.log(sliderImg[index])
        if (sliderImg[index] !== undefined && sliderImg[index].classList.contains('slider-item')) {
            sliderImg[index].style.transform = `translateX(-100%)`
        }
    }
})
