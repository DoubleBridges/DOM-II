// Your code goes here
const headerNav = document.querySelector('.main-navigation');

headerNav.addEventListener('mouseenter', (event) => event.target.style.backgroundColor = '#FFEBCD');

headerNav.addEventListener('mouseleave', (event) => event.target.style.backgroundColor = '');

const images = document.querySelectorAll('img');

const page = document.querySelector('body')

page.addEventListener('click', event => {
    images.forEach(function(el) {
        if (el.style.visibility === 'hidden') {
            event.target.style.visibility = 'visible'
            console.log(el)
        }
    })
})

images.forEach((el) => el.addEventListener('click', event => event.target.style.visibility = 'hidden'));










// images.forEach(el => {
    // if(el.visibility === 'hidden') {
        // event => event.target.style.visibility = 'visible'; 
    // });