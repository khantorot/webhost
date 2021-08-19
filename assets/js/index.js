let text = document.getElementById('text');
let word = text.getElementsByTagName('span');
let i = 0;

setInterval(function () {
    word[i].style.display = 'none';
    i = (i + 1) % word.length;
    word[i].style.display = 'initial';
}, 2000);
