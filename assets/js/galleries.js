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
            "https://i.pinimg.com/originals/6e/38/60/6e3860fe225986396a6ba05161dcaeab.jpg",
            "https://i.pinimg.com/originals/3e/79/80/3e7980fc457c923ad575616f891dc693.jpg"];
}
else
{
  // Links for all photos
  img_arr = ["https://i.pinimg.com/originals/08/93/6e/08936ecb14ad4f8664f060e954c2f4a2.jpg",
            "https://i.pinimg.com/originals/c4/37/43/c437430054dc9f56f20a9d5b2219bc9b.jpg",
            "https://i.pinimg.com/originals/5e/1c/e9/5e1ce9adece469c4a46facd504b8d4d4.jpg",
            "https://i.pinimg.com/originals/f8/eb/d3/f8ebd3c43c96cb77cfcf9f1699fd5fce.jpg",
            "https://i.pinimg.com/originals/2f/4a/fd/2f4afd169ea5e44d294270f5b31d85c2.jpg",
            "https://i.pinimg.com/originals/7e/8b/97/7e8b97eb830ea668945cfc491e02d242.jpg",
            "https://i.pinimg.com/originals/d8/02/a6/d802a629fd64e4f77de8bceeb1f89d44.jpg",
            "https://i.pinimg.com/originals/a1/ee/c7/a1eec7369d355b7f01e725fb09d7e528.jpg",
            "https://i.pinimg.com/originals/43/0d/9f/430d9f6c5004222acf59a46a22ba5157.jpg",
            "https://i.pinimg.com/originals/db/9d/6c/db9d6cbb71b84f86978dd0e9ae459a28.jpg",
            "https://i.pinimg.com/originals/ce/3c/60/ce3c60b5c985e8f939f2c788b305cd3e.jpg",
            "https://i.pinimg.com/originals/da/a9/54/daa954af3184645fe2bd638839f6286f.jpg",
            "https://i.pinimg.com/originals/dd/1e/19/dd1e199bf92302f8838974c7ec7e4d30.jpg",
            "https://i.pinimg.com/originals/83/f3/e7/83f3e7bf29760da1ca4963a7a2fe8de2.jpg",
            "https://i.pinimg.com/originals/a1/d3/96/a1d396b46bdbe2f641b4024209bf6276.jpg",
            "https://i.pinimg.com/originals/a9/21/0f/a9210f8461ebad982b6814b85d8fb4f6.jpg",
            "https://i.pinimg.com/originals/35/88/f6/3588f6474103ea61db24fa1564c4e2a9.jpg",
            "https://i.pinimg.com/originals/cc/a0/4a/cca04aa4a9f761bbf68f719609f9b227.jpg",
            "https://i.pinimg.com/originals/69/76/e1/6976e1765e4fda26cd6720a9d870e3fe.jpg",
            "https://i.pinimg.com/originals/11/c5/f6/11c5f6abb536c89654ab04460207eec5.jpg",
            "https://i.pinimg.com/originals/03/42/62/0342622a9c7f9f8c651b902905c4810c.jpg",
            "https://i.pinimg.com/originals/27/66/49/2766499df74e095940bdb25b76fa0b2f.jpg",
            "https://i.pinimg.com/originals/ee/35/5b/ee355b0fef53b615f923e49725cad02f.jpg",
            "https://i.pinimg.com/originals/d4/76/4d/d4764dad304c5a9281ddff01b869b695.jpg",
            "https://i.pinimg.com/originals/f5/74/53/f5745396326ecfac470f625ada50559a.jpg",
            "https://i.pinimg.com/originals/6b/2e/a8/6b2ea8690cf376f9301a1148f88934e6.jpg",
            "https://i.pinimg.com/originals/65/e7/0e/65e70e7d6fe044aa7df96414e233b5ab.jpg",
            "https://i.pinimg.com/originals/67/f5/bd/67f5bd396338e61a65735fbdd15f8b25.jpg",
            "https://i.pinimg.com/originals/69/1e/c9/691ec9d8d70701d8f3fd04f1b5ef3465.jpg",
            "https://i.pinimg.com/originals/e2/7c/37/e27c378ba78694c35fdaad74d8a43c84.jpg",
            "https://i.pinimg.com/originals/8f/4d/31/8f4d31cd5ac5eee3135b0837befd29b2.jpg",
            "https://i.pinimg.com/originals/8f/7c/b2/8f7cb201f6cdee79e7856f96060586db.jpg",
            "https://i.pinimg.com/originals/d7/23/c0/d723c05dd5ba8911c6fb124b0c162c2f.jpg",
            "https://i.pinimg.com/originals/33/4b/c2/334bc2f9671d5b9a2fa1444bfe1dcfa2.jpg",
            "https://i.pinimg.com/originals/d5/85/7a/d5857a2d3d206f5ba9a6611d1664e319.jpg",
            "https://i.pinimg.com/originals/0c/2c/8a/0c2c8aaf8774bdb76e69803a8df1b594.jpg",
            "https://i.pinimg.com/originals/22/57/3a/22573ab3b4398b3d2ec70fcd81d39640.jpg",
            "https://i.pinimg.com/originals/dd/0a/b4/dd0ab47f49444624ab92216eae7fefe5.jpg",
            "https://i.pinimg.com/originals/e9/c7/4d/e9c74da128730a2484edd3b6117b87e9.jpg",
            "https://i.pinimg.com/originals/91/69/c9/9169c990b2e0aa0bc9756bbb551779fb.jpg",
            "https://i.pinimg.com/originals/f0/c3/83/f0c38300f9b19f581f2aff209b5127b9.jpg",
            "https://i.pinimg.com/originals/bc/47/09/bc4709585ee45cf63375008d1e005797.jpg",
            "https://i.pinimg.com/originals/45/b8/8d/45b88de5d7777970d429e44eba279aaa.jpg",
            "https://i.pinimg.com/originals/8a/34/6f/8a346fbb72ded28804776fd00a63bbe3.jpg",
            "https://i.pinimg.com/originals/4d/bb/65/4dbb65e95c0550b62f2cb5948622b21c.jpg",
            "https://i.pinimg.com/originals/93/fb/d4/93fbd43e3b91b6266fd95a0b24011882.jpg",
            "https://i.pinimg.com/originals/84/6b/00/846b00470c762486d6067cb789cfa23f.jpg",
            "https://i.pinimg.com/originals/9e/25/17/9e2517123eeeccd6ea3ecd2fb4b991cd.jpg",
            "https://i.pinimg.com/originals/5f/25/37/5f2537626ada6689c64427b921c11c55.jpg",
            "https://i.pinimg.com/originals/0d/90/5c/0d905cc73aa1b649ae7e2555d59a1cab.jpg",
            "https://i.pinimg.com/originals/32/d6/00/32d600f42220e6d0199e2a3031d183cf.jpg",
            "https://i.pinimg.com/originals/8e/15/2d/8e152de4119f76280218df07ab322705.jpg",
            "https://i.pinimg.com/originals/54/3e/0f/543e0f8ed712125b68f8dd978d0bab68.jpg",
            "https://i.pinimg.com/originals/f1/9c/d6/f19cd6c1ac9667a6a0ea78740f18a4f9.jpg",
            "https://i.pinimg.com/originals/8c/d5/15/8cd515017797ed467b8d12b513a4a8e9.jpg",
            "https://i.pinimg.com/originals/4f/e7/6b/4fe76b8968691c82ffa571241265437c.jpg",
            "https://i.pinimg.com/originals/5b/dc/d2/5bdcd221f93cc891fa6b0bada8320b75.jpg",
            "https://i.pinimg.com/originals/01/7f/fd/017ffd2649298e5855ed09a14775606c.jpg",
            "https://i.pinimg.com/originals/7c/db/a9/7cdba99908d59dae92d349e82d4a2144.jpg",
            "https://i.pinimg.com/originals/3b/94/4b/3b944be56da885f075f5060e02a87dc5.jpg",
            "https://i.pinimg.com/originals/9a/78/d8/9a78d8fa5e59bfe6f1f7d46be2fba884.jpg",
            "https://i.pinimg.com/originals/ba/d2/cb/bad2cbb559bad6705ec289a5d0e41b67.jpg",
            "https://i.pinimg.com/originals/3e/03/2b/3e032bff1fe2dfb7ccbefa734f7651ff.jpg",
            "https://i.pinimg.com/originals/79/35/12/793512fd8c5cee79f3ee59967e8b4913.jpg",
            "https://i.pinimg.com/originals/fb/f1/c3/fbf1c3796e358b3ff373a66f259d9c13.jpg",
            "https://i.pinimg.com/originals/69/ae/cc/69aeccd8789131ee1310cb4db2801235.jpg"];
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