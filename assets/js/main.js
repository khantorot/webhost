window.onload = function () {
  setTimeout(function () {
    document.querySelector('.preloader').classList.add('preloader_done');
  }, 0);


  var menuBtn = document.querySelector('.menuBtn');
  var menu = document.querySelector('.menu');
  var scrollBtn = document.querySelector('.scrollBtn');
  var body = document.querySelector('body');


  menuBtn.onclick = function () {
    this.classList.toggle('menuBtn_active');
    menu.classList.toggle('menu_active');
    setTimeout(function () {
      menu.classList.toggle('menu_show');
    }, 400);
  }


  var scrolled;
  var timer;
  scrollBtn.onclick = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled <= 450) {
      scrollToBot();
    } else {
      scrollToTop();
    }
  }
  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled -= 20;
      timer = setTimeout(scrollToTop, 5);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  };
  function scrollToBot() {
    if (scrolled <= 450) {
      window.scrollTo(0, scrolled);
      scrolled += 20;
      timer = setTimeout(scrollToBot, 5);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 500);
    }
  };

  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 400) {
      scrollBtn.classList.add('scrollBtn_active');
    } else {
      scrollBtn.classList.remove('scrollBtn_active');
    }
    if (scrolled >= 500) {
      menuBtn.classList.add('menuBtn_show');
      menu.classList.add('menu_style');
    } else {
      menuBtn.classList.remove('menuBtn_show');
      menu.classList.remove('menu_style');
    }
  }




  var slideBlocks = document.querySelectorAll('.slider div');
  var slideBtn = document.querySelectorAll('.slider span p');

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
}