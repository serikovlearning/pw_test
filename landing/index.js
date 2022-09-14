const cookie = document.querySelector('.cookie'),
    cookieBtn = document.querySelector('.cookie-btn')

function openCookie() {
    setTimeout(() => {
        cookie.style.display = 'flex'
    }, 1999)
    setTimeout(() => {
        cookie.style.transform = 'translateY(0%)'
        cookie.style.opacity = '1'
        cookieBtn.addEventListener('click', () => {
            cookie.style.transform = 'translateY(50%)'
            cookie.style.opacity = '0'
            setTimeout(() => {
                cookie.style.display = 'none'
            }, 501)
        })
    }, 2000)
}

openCookie()

const goals = document.querySelector('.goals'),
    goalsBg = goals.querySelector('.goals-bg'),
    goalsContent = goals.querySelector('.goals-content')

function goalsAnimation(entry) {
    if (!(goals.clientWidth < 1098.99)) {
        setTimeout(() => {
            goalsBg.style.transform = entry ? 'rotate(-90deg)' : 'rotate(0deg)'
            goalsBg.style.opacity = entry ? '0.1' : '1'
            entry
                ? goalsContent.classList.add('active')
                : goalsContent.classList.remove('active')

            setTimeout(() => {
                entry
                    ? goalsBg.classList.add('active')
                    : goalsBg.classList.remove('active')

                entry
                    ? goalsBg.style.backgroundImage = 'url("landing/img/goals/goals-phone-rotate.png")'
                    : goalsBg.style.backgroundImage = 'url("landing/img/goals/goals-phone.png")'

                goalsBg.style.opacity = '1'
                goalsBg.style.transform = 'rotate(-360deg)'
            }, 1000)
        }, 500)
    }
}

let animated = false
let screenPos = window.innerHeight / 1.7
window.addEventListener('scroll', () => {
    let goalsPos = goals.getBoundingClientRect().top
    if (goalsPos < screenPos && !animated && goalsPos > -100) {
        goalsAnimation(true)
        animated = true
    } else if ((animated && goalsPos > screenPos) || (animated && goalsPos < -100)) {
        goalsAnimation(false)
        animated = false
    }
})

