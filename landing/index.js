const cookie = document.querySelector('.cookie'),
    cookieBtn = document.querySelector('.cookie-btn')

function openCookie() {
    setTimeout(() =>{
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