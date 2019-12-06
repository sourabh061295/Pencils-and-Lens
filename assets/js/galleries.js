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
  img_arr = ["https://i.pinimg.com/originals/cd/68/e1/cd68e180500931019df5917003ff0126.jpg",
            "https://i.pinimg.com/originals/0d/67/f7/0d67f7df67b96a523a7436cf07432b43.jpg",
            "https://i.pinimg.com/originals/44/22/a2/4422a2b8c00e682a7eb833e457a494ab.jpg",
            "https://i.pinimg.com/originals/f6/cf/a9/f6cfa994c000d5ce3261cabfaf5c6ce7.jpg",
            "https://i.pinimg.com/originals/e3/a0/68/e3a0688bf261e04606f4761ee61f0628.jpg",
            "https://i.pinimg.com/originals/b4/d5/07/b4d507e3a7d2f289637e388a990fda52.jpg",
            "https://i.pinimg.com/originals/ee/19/8b/ee198bcb2650db50ec6b8756db7ef4d1.jpg",
            "https://i.pinimg.com/originals/c9/fa/00/c9fa00e363b0ff92fca532690ca9d6cb.jpg",
            "https://i.pinimg.com/originals/bd/21/f7/bd21f79b025606ea021616e382f1abdf.jpg",
            "https://i.pinimg.com/originals/aa/f8/9b/aaf89b9f76a8c591f5efefb3a8e826d4.jpg",
            "https://i.pinimg.com/originals/ae/13/7d/ae137d3baf8543480a17309a25a166bd.jpg",
            "https://i.pinimg.com/originals/f7/41/13/f74113428d27f4a73e83b51e9a466dc9.jpg",
            "https://i.pinimg.com/originals/2c/4b/cd/2c4bcdc888042bced5e051e981be8897.jpg",
            "https://i.pinimg.com/originals/f8/76/b9/f876b953a69e6a220347943fee664241.jpg",
            "https://i.pinimg.com/originals/0c/a2/6e/0ca26e80a333a153db35442b66d1c053.jpg",
            "https://i.pinimg.com/originals/07/5e/f5/075ef50dce463589e5b29c687a757fb5.jpg",
            "https://i.pinimg.com/originals/bc/dd/44/bcdd448abbfd7e12c7f03365b1e4d3ab.jpg",
            "https://i.pinimg.com/originals/fe/e5/34/fee534e6f8ef0958ea97ba5bf5acde08.jpg",
            "https://i.pinimg.com/originals/5d/6e/54/5d6e5417e34870a4047b3a33476e3309.jpg",
            "https://i.pinimg.com/originals/5d/b7/af/5db7af30a651f66d8031726d4b2ae5e8.jpg",
            "https://i.pinimg.com/originals/e7/ca/3e/e7ca3e3997d679e7d59962fadb171559.jpg",
            "https://i.pinimg.com/originals/69/d6/06/69d606175334c03e1adb0e24b2dadcc2.jpg",
            "https://i.pinimg.com/originals/b6/cd/6b/b6cd6befa969839595f8d83cd6abf21d.jpg",
            "https://i.pinimg.com/originals/46/74/b8/4674b8ebeb1a6d5601bac78ccdff04c9.jpg",
            "https://i.pinimg.com/originals/20/25/6e/20256e55f7a2418330b12ddb47600f47.jpg",
            "https://i.pinimg.com/originals/d9/8c/a1/d98ca1013d889ceb779c4cffcdfe1009.jpg",
            "https://i.pinimg.com/originals/2e/96/c8/2e96c8a2f7313a6ca5d924fbb02417a1.jpg",
            "https://i.pinimg.com/originals/e9/f0/8d/e9f08d1782dd8d2a53d121e8260606ac.jpg",
            "https://i.pinimg.com/originals/40/ce/2d/40ce2d744c905736ac4e9c2a138520ed.jpg",
            "https://i.pinimg.com/originals/76/54/49/765449d41bc3e0805162535b4cf49468.jpg",
            "https://i.pinimg.com/originals/da/00/9f/da009f08de2b151d181fee5b143a49d2.jpg",
            "https://i.pinimg.com/originals/96/ff/3f/96ff3f6ab5ea15c55c9c4e24c011c74e.jpg",
            "https://i.pinimg.com/originals/ba/08/fd/ba08fd57e7e537daa1f5aff749c714d3.jpg",
            "https://i.pinimg.com/originals/d4/82/61/d4826124782cd59b26e1cc89849e64f9.jpg",
            "https://i.pinimg.com/originals/4d/dd/6b/4ddd6b3dab3261432d0c180ef32f3644.jpg",
            "https://i.pinimg.com/originals/91/b3/6d/91b36d83630f8342553f0e4a05b4fbc0.jpg",
            "https://i.pinimg.com/originals/4d/bb/12/4dbb12477bdd8d3e168b19ec764e9a6a.jpg",
            "https://i.pinimg.com/originals/49/ac/f1/49acf1c68abe056972bbb1234961d801.jpg",
            "https://i.pinimg.com/originals/35/80/2f/35802faf73133614f98b8dbfd53cfe08.jpg",
            "https://i.pinimg.com/originals/43/b7/4c/43b74caca9f88cfbdc6d12632f36169f.jpg",
            "https://i.pinimg.com/originals/a6/0b/9d/a60b9d10cd8e444c75a1137235bfb668.jpg",
            "https://i.pinimg.com/originals/6e/38/60/6e3860fe225986396a6ba05161dcaeab.jpg"];
}
else
{
  // Links for all photos
  img_arr = [];
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