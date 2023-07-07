var apiKey = "6b2d670159350152a1510ed3b36ef754"
var url = `https://api.themoviedb.org/3/movie/popular?api_key=6b2d670159350152a1510ed3b36ef754`
console.log (url)

fetch(url)
.then(response => response.json())
        .then(data => {})
