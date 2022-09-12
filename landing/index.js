const cookie = document.querySelector('.cookie'),
    cookieBtn = document.querySelector('.cookie-btn')

function openCookie() {
    setTimeout(() => {
        cookie.style.transform = 'translateY(0%)'
        cookie.style.opacity = '1'
        cookieBtn.addEventListener('click', () => {
            cookie.style.transform = 'translateY(50%)'
            cookie.style.opacity = '0'
        })
    }, 2000)
}

openCookie()