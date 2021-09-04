let text = document.getElementById('text');
let word = text.getElementsByTagName('span');
let i = 0;

setInterval(function () {
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}, 2000);




var slideBlocks = document.querySelectorAll('.slider div');
var slideBtn = document.querySelectorAll('.slider span p');
var body = document.querySelector('body');

slideBlocks[0].classList.add('slider_active');
slideBtn[0].classList.add('slider_active');
body.addEventListener("click", slide);

function slide(e) {
    if (e.target.classList.contains('slideBtn')) {
        var slID = e.target.getAttribute('data-id');
        for (var i = 0; i < slideBlocks.length; i++) {
            slideBlocks[i].classList.remove('slider_active');
            slideBtn[i].classList.remove('slideBtn_active');
        }
        slideBlocks[slID].classList.add('slider_active');
        slideBtn[slID].classList.add('slideBtn_active');
        clearTimeout(slideTimer);
    }
};

var x = 0;
var slideTimer;
autoSlider();
function autoSlider() {
    slideTimer = setTimeout(function () {
        if (x <= 2) {
            for (var i = 0; i < slideBlocks.length; i++) {
                slideBlocks[i].classList.remove('slider_active');
                slideBtn[i].classList.remove('slideBtn_active');
            }
            slideBlocks[x].classList.add('slider_active');
            slideBtn[x].classList.add('slideBtn_active');
            x++;
        } else {
            x = 0;
        }
        autoSlider();
    }, 4000);
}