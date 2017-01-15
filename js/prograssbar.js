function move() {
    move1();
    move2();
    move3();
    move4();
    move5();
    move6();
}


function move1() {
     var elem = document.getElementById("bar1"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

function move2() {
     var elem = document.getElementById("bar2"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
function move3() {
     var elem = document.getElementById("bar3"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
function move4() {
     var elem = document.getElementById("bar4"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
function move5() {
     var elem = document.getElementById("bar5"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
function move6() {
     var elem = document.getElementById("bar6"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}