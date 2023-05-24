import Inputmask from "inputmask";

let input = document.getElementById('input-phone');

let im = new Inputmask("999 999-99-99")
im.mask(input)


let select = document.querySelector('#custom-select');
let items = select.querySelectorAll('.custom-select__label')
let isOpen = false;
let current = 'ru';


function openSelect(el) {
    if (!select.classList.contains('custom-select-active') && isOpen === false) {
        select.classList.add('custom-select-active')
        isOpen = true;
    }
}

function closeSelect(el) {
    if (select.classList.contains('custom-select-active') && isOpen === true) {
        select.classList.remove('custom-select-active')
        isOpen = false
    }
}

function toggleSelect(el) {
    if (select.classList.contains('custom-select-active') && isOpen === true) {
        select.classList.remove('custom-select-active')
        isOpen = false
    } else if (!select.classList.contains('custom-select-active') && isOpen === false) {
        select.classList.add('custom-select-active')
        isOpen = true
    }
}

function changeSelected(el) {
    current = el.getAttribute('for')
    let inp = select.querySelector(`#${current}`);
    [...select.querySelectorAll('.custom-select__radio-input')].forEach(el => {
        el.removeAttribute('checked')
    })

    inp.setAttribute('checked', '')




}

[...items].forEach(item => {
    item.addEventListener('click', (e) => {
        let reg = e.target.getAttribute('for');
        let inp = document.querySelector(`#${reg}`);
        if (inp.hasAttribute('checked')) { 
            toggleSelect();
            return true 
        }

        changeSelected(e.target)
        closeSelect(select)
    })
})

window.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
        closeSelect(select)
    }
});


