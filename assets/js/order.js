
var img_list = ["https://i.pinimg.com/originals/ec/4e/80/ec4e8080b790e8f5ea6c9738e943de38.jpg",
                "https://i.pinimg.com/originals/e5/98/d6/e598d6062411d6b3db75018730e60781.jpg",
                "https://i.pinimg.com/originals/68/f2/3f/68f23f0df231b5356548d4a14b66c746.jpg",
                "https://i.pinimg.com/originals/2b/61/44/2b6144ca0756fab1518e5c2cfc4055cb.jpg",
                "https://i.pinimg.com/originals/68/f6/5c/68f65c8ffc760ee6ea3c5e3f23f14eea.jpg",
                "https://i.pinimg.com/originals/71/a2/63/71a2634da050395eec159535443fbeaa.jpg",
                "https://i.pinimg.com/originals/92/be/14/92be142e962bba7bc1f047db230d187a.jpg",
                "https://i.pinimg.com/originals/85/33/54/8533546f7f1126e68c30e61ccefb20ae.jpg",
                "https://i.pinimg.com/originals/32/c5/b6/32c5b6c7727303dbd70486c277a5e5b1.jpg",
                "https://i.pinimg.com/originals/b5/53/98/b55398629f9718bbbb2182df3adb7a51.jpg",
                "https://i.pinimg.com/originals/b3/19/d6/b319d6c1d43c04c142db087ce61194a3.jpg"];
var idx = 0;

function changeimg() {
    $('#imagedisplay').fadeOut('slow', function() {
        $(this).css("background-image", "url("+img_list[idx]+")");  
        $(this).fadeIn('slow');
    });
    idx = ((idx+1) % img_list.length);
}

setInterval(changeimg, 2500);