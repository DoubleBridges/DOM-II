// Your code goes here

//Nav changes color when mouse enters and returns to default on leave
const headerNav = document.querySelector('.main-navigation');

headerNav.addEventListener('mouseenter', (event) => event.target.style.backgroundColor = '#FFEBCD');

headerNav.addEventListener('mouseleave', (event) => event.target.style.backgroundColor = '');

//Make img's disappear on click and reapper on click anywhere other than img
const images = document.querySelectorAll('img');

const page = document.querySelector('body')

page.addEventListener('click', event => {
    images.forEach(function (el) {
        if (event.target.tagName !== 'IMG') {
            el.style.visibility = 'visible'
        }
    })
})

images.forEach((el) => el.addEventListener('click', event => event.target.style.visibility = 'hidden'));

// assign a random color to the background any time the window is resized
const { innerWidth } = window;

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'darkorchid', 'teal', 'dodgerblue', 'crimson', 'orchid'];

const randomColor = arr => {
    page.style.backgroundColor = arr[Math.floor((Math.random() * 10) + 1)]
}

window.addEventListener('resize', () => randomColor(colors));







