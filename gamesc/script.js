window.addEventListener('load', function () {
    setTimeout(function(){
        var modal = document.querySelector('#modal-load').style.opacity = 0;
    var zone = document.querySelector('#zone');
        zone.style.display = 'block';
        setTimeout(function(){
            zone.style.marginTop = 10 + "vh";
        },200);
    }, 1700);
    window.onkeyup = function (e) {
        if (e.keyCode == 37 || e.keyCode == 65) {
            var id = setInterval(frame);

            function frame() {
                pos_x--;
                var pl = document.getElementById("pl");
                pl.style.left = pos_x + "px";
                if (pos_x % 50 == 0) {
                    clearInterval(id);
                }
                if (pos_x == -1) {
                    pos_x = 0;
                }
                spawn();
            }
        } else if (e.keyCode == 38 || e.keyCode == 87) {
            var id = setInterval(frame);

            function frame() {
                pos_y--;
                var pl = document.getElementById("pl");
                pl.style.top = pos_y + "px";
                if (pos_y % 50 == 0) {
                    clearInterval(id);

                }
                if (pos_y == -1) {
                    pos_y = 0;
                }
                spawn();
            }

        } else if (e.keyCode == 39 || e.keyCode == 68) {
            var id = setInterval(frame);

            function frame() {
                pos_x++;
                var pl = document.getElementById("pl");
                pl.style.left = pos_x + "px";
                if (pos_x % 50 == 0) {
                    clearInterval(id);
                }
                if (pos_x == 451) {
                    pos_x = 450;
                }
                spawn();
            }


        } else if (e.keyCode == 40 || e.keyCode == 83) {
            var id = setInterval(frame);

            function frame() {
                pos_y++;
                var pl = document.getElementById("pl");
                pl.style.top = pos_y + "px";
                if (pos_y % 50 == 0) {
                    clearInterval(id);
                }
                if (pos_y == 451) {
                    pos_y = 450;
                }
                spawn();
            }

        }
    }
})
var pos_x = 0;
var pos_y = 0;
var pos_1 = 0;
var pos_2 = 0;
var score = 0;

function random() {
    var bon = document.getElementById("bon");

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    pos_1 = randomInteger(1, 9) * 50;
    pos_2 = randomInteger(1, 9) * 50;
    bon.style.left = pos_1 + "px";
    bon.style.top = pos_2 + "px";
}

function spawn() {
    if (pos_1 == pos_x && pos_2 == pos_y - 50) {
        random();
        var pl = document.getElementById("pl");
        var sc = document.getElementById("score");
        var r = Math.floor(Math.random() * (256));
        var g = Math.floor(Math.random() * (256));
        var b = Math.floor(Math.random() * (256));
        var c = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        pl.style.background = c;
        score++;
        sc.innerHTML = score;
    }
}
