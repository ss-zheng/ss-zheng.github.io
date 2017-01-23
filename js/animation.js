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

$(document).ready(function() {
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });
});