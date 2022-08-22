var locationInfo = document.getElementById('location');
var lat = 55.752,
    lng = 37.615;
var map,
    marker;
DG.then(function () {

    map = DG.map('map', {
        center: [55.752, 37.615],
        zoom: 5
    });

    marker = DG.marker([55.752, 37.615], {
        draggable: true
    }).addTo(map);
    marker.on('drag', function (e) {
        lat = e.target._latlng.lat.toFixed(3);
        lng = e.target._latlng.lng.toFixed(3);
        //        locationInfo.innerHTML = lat + ', ' + lng;
    });
    marker.on('dragend', function () {
        var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng + '&appid=8f146396d11bfed61b47c7bb359dee94';
        $(document).ready(function () {
            $.ajax({
                url: url,
                cache: false,
                success: function (html) {
                    var output = html;
                    var temp_f = output.main.temp;
                    var temp_c = temp_f - 273.15;
                    var loc = output.name;
                    var dis = output.weather[0].main;
                    var hom = output.main.humidity;
                    console.log(temp_c.toFixed(0));
                    console.log(output.name);
                    console.log(output);
                    console.log(output.weather[0].main);
                    $('#temp').text(temp_c.toFixed(0));
                    $('#loc').text(loc);
                    $('#dis').text(dis);
                    $('#proc').text(hom);
                    if (dis == "Clear") {
                        $("#weather").css('backgroundImage', 'url(sun.gif)');

                    } else if (dis == "Snow" || dis == "Drizzle") {
                        $("#weather").css('backgroundImage', 'url(snow.gif)');
                    } else if (dis == "Clouds" || dis == "Mist") {
                        $("#weather").css('backgroundImage', 'url(fog.gif)');
                    } else if (dis == "Rain") {
                        $("#weather").css('backgroundImage', 'url(rain.gif)');
                    }

                }
            });
        });
    });
});

function search_e() {
    var req = $('input').val();
    console.log(req);
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + req + '&appid=8f146396d11bfed61b47c7bb359dee94';
    $(document).ready(function () {
        $.ajax({
            url: url,
            cache: false,
            success: function (html) {
                var output = html;
                var temp_f = output.main.temp;
                var temp_c = temp_f - 273.15;
                var loc = output.name;
                var dis = output.weather[0].main;
                var hom = output.main.humidity;
                var lt = output.coord.lat;
                var ln = output.coord.lon;
                console.log(temp_c.toFixed(0));
                console.log(output.name);
                console.log(output);
                console.log(output.weather[0].main);
                $('#temp').text(temp_c.toFixed(0));
                $('#loc').text(loc);
                $('#dis').text(dis);
                $('#proc').text(hom);
                if (dis == "Clear") {
                    $("#weather").css('backgroundImage', 'url(sun.gif)');

                } else if (dis == "Snow" || dis == "Drizzle") {
                    $("#weather").css('backgroundImage', 'url(snow.gif)');
                } else if (dis == "Clouds" || dis == "Mist") {
                    $("#weather").css('backgroundImage', 'url(fog.gif)');
                } else if (dis == "Rain") {
                    $("#weather").css('backgroundImage', 'url(rain.gif)');
                }
                marker.setLatLng([lt, ln]);
                map.setView([lt, ln]);
                $("#search").val('');

            },
            statusCode: {
	        404: function () {
	          alert( "Город не найден! ┐(￣ヘ￣)┌");
	        }
	      },
            statusCode: {
	        400: function () {
	          alert( "Введите город! ┐(￣ヘ￣)┌");
	        }
	      },
        });
    });
};
$("#btn").on("click", function () {
    search_e();
});
$("#search").keyup(function (event) {
    if (event.keyCode == 13) {
        $("#btn").click();
        $(this).val('');
    }
});
