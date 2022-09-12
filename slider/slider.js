const slider = document.querySelector('.slider'),
    leftBtn = slider.querySelector('.slide-left'),
    rightBtn = slider.querySelector('.slide-right'),
    sliderImg = slider.querySelectorAll('.slider-item')


const sliderWidth = sliderImg[0].clientWidth,
    transitionTime = 500,
    intervalTime = 5;

let slideCounter = 0,
    btnActive = false

leftBtn.addEventListener('click', () => {
    if (!btnActive) {
        sliderImg.forEach((slider, index) => {
            dragSlide(false)
        })
        slideCounter -= 1
    }
})

rightBtn.addEventListener('click', () => {
    if (!btnActive) {
        sliderImg.forEach((slider, index) => {
            dragSlide(true)
        })
        slideCounter += 1
    }
})


function dragSlide(side) {
    let changedWidth = slideCounter * sliderWidth;
    btnActive = true

    if (changedWidth <= -9000 && !side) {
        slider.style.background = `url(./img/10.jpg) center/cover no-repeat`
        slideCounter = 1
    }
    if (changedWidth >= 0 && side) {
        slider.style.background = `url(./img/1.jpg) center/cover no-repeat`
        slideCounter = -10
    }

    const slideMotion = setInterval(() => {
        if (!side) {
            changedWidth -= (intervalTime / transitionTime) * sliderWidth
        } else {
            changedWidth += (intervalTime / transitionTime) * sliderWidth
        }
        for (let slide of sliderImg) {
            slide.style.transform = `translateX(${changedWidth}px)`
        }
        if (changedWidth % sliderWidth === 0) {
            btnActive = false
            clearTimeout(slideMotion)
            slider.style.background = `#2a2a2a`
        }
    }, intervalTime)
}
