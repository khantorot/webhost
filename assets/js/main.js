window.onload = function () {
  setTimeout(function () {
    document.querySelector('.preloader').classList.add('preloader_done');
  }, 1000);


  var menuBtn = document.querySelector('.menuBtn');
  var menu = document.querySelector('.menu');
  var scrollBtn = document.querySelector('.scrollBtn');
  var loginBtn = document.querySelector('.loginBtn');
  var wrap = document.querySelector('.wrap');


  wrap.onclick = function () {
    menuBtn.classList.remove('menuBtn_active');
    menu.classList.remove('menu_active');
    loginBtn.classList.remove('loginBtn_active');
    menu.classList.remove('menu_show');
  }


  menuBtn.onclick = function () {
    this.classList.toggle('menuBtn_active');
    menu.classList.toggle('menu_active');
    loginBtn.classList.toggle('loginBtn_active');
    setTimeout(function () {
      menu.classList.toggle('menu_show');
    }, 400);
  }


  var scrolled;
  var timer;
  scrollBtn.onclick = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled <= document.documentElement.clientHeight - 1) {
      scrollToBot();
    } else {
      scrollToTop();
    }
  }
  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled -= 30;
      timer = setTimeout(scrollToTop, 1);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  };
  function scrollToBot() {
    if (scrolled <= document.documentElement.clientHeight) {
      window.scrollTo(0, scrolled);
      scrolled += 30;
      timer = setTimeout(scrollToBot, 1);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, document.documentElement.clientHeight);
    } 
  };

  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= document.documentElement.clientHeight) {
      scrollBtn.classList.add('scrollBtn_active');
    } else {
      scrollBtn.classList.remove('scrollBtn_active');
    }
    if (scrolled >= document.documentElement.clientHeight) {
      menuBtn.classList.add('menuBtn_show');
      menu.classList.add('menu_style');
    } else {
      menuBtn.classList.remove('menuBtn_show');
      menu.classList.remove('menu_style');
    }
  }


}