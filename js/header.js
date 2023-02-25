$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // check if user has scrolled past 100 viewport height
      $(".header").css("background-color", "red"); // set background color of navbar to black
    } else {
      $(".header").css("background-color", "transparent"); // set background color of navbar to transparent
    }
  });
});
