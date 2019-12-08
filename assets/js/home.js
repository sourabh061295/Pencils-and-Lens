//Scroll effect for navbar
$(window).scroll(function() {
    if ($(document).scrollTop() > 50 && $("#jumboName > h1").text()!= " World of Colors!") {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
});

//Changing background of jumbotron
switch (document.querySelector("#jumboName > h1").textContent) {
  case " Art Collection": document.querySelector(".jumbotron").style.backgroundImage = "url(../data/images/frames.jpg)";
                          break;
  case " Image Gallery":  document.querySelector(".jumbotron").style.backgroundImage = "url(../data/images/photo_wall.jpg)";
                          break;
  case " Orders": document.querySelector(".jumbotron").style.backgroundImage = "url(../data/images/sketch_order.jpg)";
                          break;
  case " World of Colors!": document.querySelector(".jumbotron").style.backgroundImage = "url(../data/images/olav-ahrens-rotne-4Ennrbj1svk-unsplash.jpg)";
                            document.querySelector(".navbar").classList.add("rainbow_background");
                            break;
}