$(document).ready(function(){
    var url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    var usd = 0;
    $.ajax({
        url: url,
        cache: false,
        success: function(html) {
            var output = JSON.parse(html);
            console.log(output.Valute.USD.Value);
            usd = output.Valute.USD.Value;
            usd = usd.toFixed(0);
        }
    });
    $('#in').on('keyup', function(){
        var out = '$ ' + $('#in').val() / usd;
        $('#output').text(out);
    });
});