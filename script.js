const apiKey = "6b2d670159350152a1510ed3b36ef754"
const url = `https://api.themoviedb.org/3/movie/popular?api_key=6b2d670159350152a1510ed3b36ef754`
const imgUrl = `https://image.tmdb.org/t/p/w500`;
const movielistItem = document.getElementById(`movielist-item`);

const genres = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]


const tagsEl = document.getElementById(`tags`);

setGenre();
function setGenre() {
    tagsEl.innerHTML = '';
    genres.forEach(genre => {
        const t = document.createElement('ul')
        t.classList.add('tag')
        t.id=genre.id;
        t.innerText = genre.name;
        tagsEl.appendChild(t);
    })
}


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
