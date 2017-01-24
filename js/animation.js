function move() {
    moveElement("bar1", 90);
    moveElement("bar2", 90);
    moveElement("bar3", 90);
    moveElement("bar4", 70);
    moveElement("bar5", 70);
    moveElement("bar6", 60);
}


function moveElement(theid, percent) {
     var elem = document.getElementById(theid); 
    var width = 1;
    var id = setInterval(function () {
        if (width >= percent) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }, 10);
}

var flag = 0;
$(document).ready(function() {
    var wSize = $(window).height();
    $('.header_pic').css({
        'height': wSize
    });
    
    $(window).scroll(function(){
        var scrollvalue= $(this).scrollTop();

        $('.name').css({
           'transform' : 'translate(0px, '+ scrollvalue /2 +'%)'
        });

        
        
        if ((scrollvalue > $('#first').offset().top) && (flag == 0)) {
            flag += 1;
            move();
        }

        if (scrollvalue > $('#skills').offset().top - 400) {
                $('.specify h3').each(function(i){
                    setTimeout(function(){
                    $('.specify h3').eq(i).addClass('fadein');
                }, 150 * (i + 1))
            });
        }
        if (scrollvalue > $('#cc3k').offset().top - 400) {
            $('#cc3k').addClass('fadein');
        }

        if (scrollvalue > $('#meetup').offset().top - 400) {
            $('#meetup').addClass('fadein');
        }

        if (scrollvalue > $('#personal_web').offset().top - 400) {
            $('#personal_web').addClass('fadein');
        }
    });




    $('a').click(function(e) {
    e.preventDefault();
    var linkHref= $(this).attr('href');
    var headerHeight= $('header').outerHeight();
         $('html, body').animate({
             scrollTop: $(linkHref).offset().top - headerHeight
         }, 500);
    });
});