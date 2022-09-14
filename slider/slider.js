const slider = document.querySelector('.slider'),
    leftBtn = slider.querySelector('.slide-left'),
    rightBtn = slider.querySelector('.slide-right'),
    sliderImg = slider.querySelectorAll('.slider-item')


const sliderWidth = sliderImg[0].clientWidth,
    transitionTime = 500,
    intervalTime = 5;

let slideCounter = 0,
    btnActive = false

rightBtn.addEventListener('click', () => {
    if (!btnActive) {
        sliderImg.forEach((slider, index) => {
            dragSlide(false)
        })
        slideCounter -= 1
        checkPagValue()
    }
})

leftBtn.addEventListener('click', () => {
    if (!btnActive) {
        sliderImg.forEach((slider, index) => {
            dragSlide(true)
        })
        slideCounter += 1
        checkPagValue()
    }
})


function dragSlide(side) {
    let changedWidth = slideCounter * sliderWidth;
    btnActive = true

    if (changedWidth <= -9000 && !side) {
        slider.style.background = `url(./slider/img/10.jpg) center/cover no-repeat`
        slideCounter = 1
    }
    if (changedWidth >= 0 && side) {
        slider.style.background = `url(./slider/img/1.jpg) center/cover no-repeat`
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

function createPaginationBtn() {
    let pagBtn = document.createElement('span')
    pagBtn.classList.add('pagination-btn')
    pagBtn.textContent = '.'
    return pagBtn
}

const paginationWrapper = slider.querySelector('.pagination')
for (let slide of sliderImg) {
    const pagBtn = createPaginationBtn()
    paginationWrapper.appendChild(pagBtn)
}
const pagBtns = paginationWrapper.querySelectorAll('.pagination-btn')
function checkPagValue() {
    pagBtns.forEach((pagBtn, index) => {
        if (index === -slideCounter) {
            pagBtn.classList.add('active')
        } else {
            pagBtn.classList.remove('active')
        }
    })
}
checkPagValue()
pagBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
      if (!btnActive && !btn.classList.contains('active')) {
          pagBtns.forEach(item => {
              item.classList.remove('active')
          })
          btn.classList.add('active')
          if (slideCounter < -index) {
              slideCounter = -index - 1
              dragSlide(true)
              slideCounter += 1
          } else {
              slideCounter = -index + 1
              dragSlide(false)
              slideCounter -= 1
          }
      }
  })
})
