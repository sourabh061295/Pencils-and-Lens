
var img_list = ["../data/images/order_image.jpg","../data/images/sketch.png","../data/images/photo.png","../data/images/portrait.png","../data/images/sample.jpg"];
var idx = 0;

function changeimg() {
    idx = idx < img_list.length ? idx: 0;
    $('#imagedisplay').fadeOut('slow', function() {
        $(this).css("background-image", "url("+img_list[idx]+")");  
        $(this).fadeIn('slow');
    });
    idx++;
}

setInterval(changeimg, 2000);