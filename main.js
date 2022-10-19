$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    if ($(this).scrollTop() > $nav.height()) {
      $nav.addClass("scrolled");
      $nav.removeClass("navbar-dark");
      $nav.addClass("navbar-light");
    } else {
      $nav.removeClass("scrolled");
      $nav.addClass("navbar-dark");
      $nav.removeClass("navbar-light");
    }
  });
});

//
/*
let username = window.prompt("siapakah nama anda");

document.getElementById("welcome").innerHTML = "hello " + username;

false;
console.log(username);
