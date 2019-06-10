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

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'darkorchid', 'teal', 'dodgerblue', 'crimson', 'orchid'];

const randomColor = arr => {
    page.style.backgroundColor = arr[Math.floor((Math.random() * 10) + 1)]
}

window.addEventListener('resize', () => randomColor(colors));

// creat a draggable item that has various functions depending on the action taken

//create a container for the draggable item

const newElementStyle = function(element, width, height, color = 'black', display = 'flex', alignItems = 'center', justifyContent = 'center', bgColor = 'white', border = '1px solid black', 
                                    borderRadius = '50%', textContent = '', touchAction = 'none', userSelect = 'none') {
    element.style.width = width;
    element.style.height = height;
    element.style.color = color;
    element.style.display = display;
    element.style.alignItems = alignItems;
    element.style.justifyContent = justifyContent;
    element.style.backgroundColor = bgColor;
    element.style.border = border;
    element.style.borderRadius = borderRadius;
    element.textContent = textContent;
    element.style.touchAction = touchAction;
    element.style.userSelect = userSelect;
}
const dragBox = document.createElement('section')

const mainContentHeader = document.querySelector('.intro')

mainContentHeader.appendChild(dragBox)

newElementStyle(dragBox, '100%', '500px', 'black', 'flex', 'center', 'center', '#eee', 'none', '20px')

// draggable item

const newButton = () => document.createElement('button')

const dragButton = newButton()

dragBox.appendChild(dragButton)

newElementStyle(dragButton, '200px', '50px', 'dodgerblue', 'flex', 'center', 'center', 'sand', '2px solid dodgerblue', '50%', 'Double Click ME!', 'none', 'none')

dragButton.addEventListener('dblclick', event => {
    event.target.textContent = "Drag ME!"
})

// magic

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

dragBox.addEventListener('touchstart', dragStart, false)
dragBox.addEventListener('touchend', dragEnd, false)
dragBox.addEventListener('touchmove', drag, false)

dragBox.addEventListener('mousedown', dragStart, false)
dragBox.addEventListener('mouseup', dragEnd, false)
dragBox.addEventListener('mousemove', drag, false)

function dragStart(event){
    if(event.type === 'touchstart') {
        initialX = event.touches[0].clientX - xOffset;
        initialY = event.touches[0].clientY - yOffset;
    } else {
        initialX = event.clientX - xOffset;
        initialY = event.clientY - yOffset;
    }

    if(event.target === dragButton) {
        active = true;
    }
}

function dragEnd(event) {
    intialX = currentX;
    initialY = currentY;

    active = false;
}

function drag(event) {
    if(active) {
        event.preventDefault();

        if(event.type === 'touchmove') {
            currentX = event.touches[0].clientX - initialX;
            currentY = event.touches[0].clientY - initialY;
        } else {
            currentX = event.clientX - initialX;
            currentY = event.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragButton);        
    }
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}