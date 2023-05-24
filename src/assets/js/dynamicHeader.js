window.addEventListener('load', () => {
   
    let lastScroll = 0
    const defaultOffset = 30
    const defaultOffsetHide = window.innerHeight / 3
    const header = document.getElementById('header')

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
    const containHide = () => header.classList.contains('hide')
    const containScrolled = () => header.classList.contains('scrolled')

    if (!containScrolled() && scrollPosition() > defaultOffset) {
        header.classList.add('scrolled')
    }

    window.addEventListener('scroll', () => {
        if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffsetHide) {
            //scroll down
            header.classList.add('hide')
        }
        else if(scrollPosition() < lastScroll && containHide()){
            //scroll up
            header.classList.remove('hide')
        }

        lastScroll = scrollPosition()

        if (scrollPosition() > (defaultOffset) && !containScrolled()) {
            header.classList.add('scrolled')
        } else if (scrollPosition() < (defaultOffset)) {
            header.classList.remove('scrolled')
        }
    })

})


