//API for movies

const getFilmDetailedHTML = film =>{
    return `
    <div class="film" onclick="getFilmDetailed(${film.id})">
        <h3>${film.title}</h3>
        <img src="https://image.tmdb.org/t/p/w300${film.poster_path}" alt="imagen de la película">
        <p>${film.overview}</p>
    </div>
    `;
}

const getFilmDetailed = film_id =>{
    document.querySelector('main.films').innerHTML = "" //First we clean up the main section.
    axios.get(`https://api.themoviedb.org/3/movie/${film_id}?api_key=079c21f9801a3caa498a95d9d9dfe4ca&language=es-ES`)
        .then(res=>{
            const film = res.data;
            document.querySelector('main.films').innerHTML +=  getFilmDetailedHTML(film);
        })
        .catch(console.error);
}

const getFilmHTML = film =>{ //InnerHTML to be added for each movie
    return `
    <div class="film" onclick="getFilmDetailed(${film.id})">
        <h3>${film.title}</h3>
        <img src="https://image.tmdb.org/t/p/w185${film.poster_path}" alt="">
    </div>
    `;
}

function renderFilms(films) {  //adding each movie to the DOM
    document.querySelector('main.films').innerHTML = "" //First we clean up the main section.
    for (const film of films) {
        document.querySelector('main.films').innerHTML += getFilmHTML(film);
    }
}





const getPopularFilms = () => { //we will get the popular films using fetch
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=079c21f9801a3caa498a95d9d9dfe4ca&language=es-ES')
    .then(res=>res.json())//json property parses the result 
    .then(res=>{
        const films = res.results;
        renderFilms(films);
    })
    .catch(error=>console.error(error));
}

const getUpcomingFilms = async () => {
    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=079c21f9801a3caa498a95d9d9dfe4ca&language=es-ES');
    const films = res.data.results;
    renderFilms(films);

    } catch (error) {
        console.error(error);
    }
    

}