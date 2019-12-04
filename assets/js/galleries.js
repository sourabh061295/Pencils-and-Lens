/********************************************* Image Tiles ****************************************/
/*************************************** Variable declarations*************************************/
// Variable to hold all image links 
var img_arr = [];
// Variable to hold random index value
var curr_idx;
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal
var img = $('.myImg');
var modalImg = $("#img01");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Check which page is currently open
if ($("#jumboName > h1").text() == " Art Collection")
{
  // Links for all art works
  img_arr = ["https://live.staticflickr.com/65535/49163513536_cc25030519_h.jpg","https://i.pinimg.com/originals/cd/68/e1/cd68e180500931019df5917003ff0126.jpg"];
}
else
{
  // Links for all photos
  img_arr = ["https://i.pinimg.com/originals/cd/68/e1/cd68e180500931019df5917003ff0126.jpg","https://live.staticflickr.com/65535/49163513536_cc25030519_h.jpg"];
}

// Loop through all contents of the array
while (img_arr.length != 0)
{
  // Get a random integer value
  curr_idx = Math.floor(Math.random() * (img_arr.length));
  // Append each image to the body
  $(".images").append("<div class='col-8 col-md-4 col-lg-3'><img class='myImg img-thumbnail' src="+img_arr[curr_idx]+"></div>");
  // Remove the link after appending
  img_arr.splice(curr_idx, 1);
}

/********************************************* Modal image ****************************************/
// Assign each image to the modal function for pop up effect
$(document).ready(function(){
  $('.myImg').on("click", function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
    modal.style.display = "none";
  }
});
/**************************************************************************************************/