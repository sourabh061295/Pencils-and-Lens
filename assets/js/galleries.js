// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var img = $('.myImg');
var modalImg = $("#img01");

$(document).ready(function(){
  for (var i=0;i<5;i++)
  {
    $(".images").append("<div class='col-8 col-md-4 col-lg-3'><img class='myImg img-thumbnail' src='../data/images/photo.png'></div>");
  }
  
  $('.myImg').on("click", function(){
    console.log("sdvsd");
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
  });
});



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    modal.style.display = "none";
  }
});