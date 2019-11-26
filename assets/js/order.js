
var img_list = ["../data/images/sketch.png","../data/images/photo.png","../data/images/portrait.png","../data/images/sample.jpg"];
var idx = 0;

function changeimg() {
    $('#imagedisplay').fadeOut('slow', function() {
        $(this).css("background-image", "url("+img_list[idx]+")");  
        $(this).fadeIn('slow');
    });
    idx = ((idx+1) % img_list.length);
}

setInterval(changeimg, 2000);