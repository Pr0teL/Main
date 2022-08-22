var searchForm = document.querySelector('#search-form');
var movie = document.querySelector('#movies');
function apiSearch(e) {
    e.preventDefault();
    var searchText = document.querySelector('.form-control').value;
    var server =  'https://api.themoviedb.org/3/search/movie?api_key=cc28640eecd7b8c460054f901c5c74d5&language=ru&query=' + searchText;
    requestApi('GET', server);
}

searchForm.addEventListener('submit', apiSearch);

function requestApi(method, url) {
    var request = new XMLHttpRequest();
    request.open(method, url)
    request.send();
    request.addEventListener('readystatechange', function() {
      if (request.readyState !== 4) {
          movie.innerHTML = 'Загрузка...'
          return;
      }
      if (request.status !== 200) {
          movie.innerHTML = 'Упс, что то пошло не так...';
          console.log('error' + request.status);
          return;
        }
        var output = JSON.parse(request.responseText);
        var inner = '';
        console.log(output);
        output.results.forEach(function(item){
            var poster = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + item.poster_path;
            var nameItem = item.name || item.title;
            var releaseDate = item.release_date;
            inner += '<div class ="col-3"><img width="inherit" height="300px" src="'+ poster +'" alt=""><br>' + nameItem + '<br><dd>'+ releaseDate +'</dd><br></div>';
        })
        movie.innerHTML = inner;
    });
}