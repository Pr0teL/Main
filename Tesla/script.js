var bg_pos = $('.scr_1').css('background-position');
var pos = 1;
$(document).ready(function () {
    $('.l_slide').on('click', function () {
        if (pos == 1) {
            $('.scr_1').css('background-position', '0% 57%');
            pos--;
            $('.title h1').text('Model S')
        };

    });
    $('.l_slide').on('click', function () {
        if (pos == 2) {
            $('.scr_1').css('background-position', '50% 57%');
            pos--;
            $('.title h1').text('Model 3')
        };

    });
    $('.r_slide').on('click', function () {
        if (pos == 1) {
            $('.scr_1').css('background-position', '100% 57%');
            pos++;
            $('.title h1').text('Model X')
        };
    });
    $('.r_slide').on('click', function () {
        if (pos == 0) {
            $('.scr_1').css('background-position', '50% 57%');
            pos++;
            $('.title h1').text('Model 3')
        };
    });
});