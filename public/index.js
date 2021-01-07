const menu_bar = document.querySelector('#menu_bar');
const menu_list = document.querySelector('#menu_list');
const input = document.querySelector('#input');
const search = document.querySelector('#search');
const youtube = document.querySelector('#youtube');
const back = document.querySelector('#back');
menu_bar.addEventListener('click', () => {
    if (menu_list.classList.contains('hidden')) {
        menu_list.classList.remove('hidden');
    } else {
        menu_list.classList.add('hidden');
    }
})

search.addEventListener('click', () => {
    if (input.classList.contains('hidden')) {
        input.classList.remove('hidden');
        youtube.classList.add('hidden');
        back.classList.remove('hidden');

    }
})
back.addEventListener('click', () => {
    if (youtube.classList.contains('hidden')) {
        youtube.classList.remove('hidden');
        back.classList.add('hidden');
        input.classList.add('hidden');
    }
})