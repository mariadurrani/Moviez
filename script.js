const apiKey = "6b2d670159350152a1510ed3b36ef754"
const url = `https://api.themoviedb.org/3/movie/popular?api_key=6b2d670159350152a1510ed3b36ef754`
const imgUrl = `https://image.tmdb.org/t/p/w500`;
const movielistItem = document.getElementById(`movielist-item`);

getMovies(url);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data) {
    movielistItem.innerHTML = '';

    data.forEach(movielist => {
        const { title, poster_path, vote_average, overview } = movielist;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movielist');
        movieEl.innerHTML = `      
        <img class="movielist-item-img" src="${imgUrl + poster_path}" alt="${title}">
        
        <div class="movie-info">
        <span class="movielist-item-title">${title}</span>
        <span class="movie-rating">${vote_average}</span>
        
        </div>

        <p class="overview">
        ${overview}
        </p>
        `





        movielistItem.appendChild(movieEl);
    })
}

let btn = document.querySelector("#btn");
let sideBar = document.querySelector(".sidebar");

btn.onclick = function () {
    sideBar.classList.toggle("active");
}
