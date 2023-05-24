function close() {
    if (this.navbar.classList.contains('burger-active')) {
        this.navbar.classList.remove('burger-active')
        this.navbar.classList.add('burger-default');
    }
}

function open() {
    if (this.navbar.classList.contains('burger-default')) {
        this.navbar.classList.remove('burger-default')
        this.navbar.classList.add('burger-active');
    }
}

function switchState() {
    if (this.navbar.classList.contains('burger-default')) {
        this.open()
    } else if (this.navbar.classList.contains('burger-active')) {
        this.close()
    }
}

let burger = {};

burger.navbar = document.getElementById('navbar')
burger.switcher = document.getElementById('burger-switcher')
burger.overflow = document.getElementById('navbar-overflow')
burger.links = document.querySelectorAll('.burger .navbar__list-link')

burger.close = close
burger.open = open
burger.switchState = switchState

burger.switcher.addEventListener('click', () => {
    burger.switchState()
})

burger.overflow.addEventListener('click', () => {
    burger.close()
});

[...burger.links].forEach(el => {
    el.addEventListener('click', () => {
        burger.close()
    })
});