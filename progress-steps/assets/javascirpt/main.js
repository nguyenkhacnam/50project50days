var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var progress = $('.progress');
var circles = $$('.circle');
var prev = $('.prev');
var next = $('.next');

var currentActive = 1
prev.addEventListener('click', function () {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update();
})

next.addEventListener('click', function () {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update();
})

function update () {
    circles.forEach(function (circle, index) {
        if (index < currentActive) {
            circle.classList.add('active');
        }
        else {
            circle.classList.remove('active')
        }
    })
    
    progress.style.width = (currentActive -1) / (circles.length - 1) * 100 + "%"

    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}