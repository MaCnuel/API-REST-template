//API for movies

const renderFilms = films => {
    for (const film of films){
        document.querySelector('main.films').innerHTML+=`
        <div class="film">
            <h3>${film.title}</h3>
            <img src="https://image.tmdb.org/t/p/w185${film.poster_path}"
        </div>
        `
    }
}


const getPopularFilms = () => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=079c21f9801a3caa498a95d9d9dfe4ca&language=es-ES')
    .then(res=>res.json())//json property parses the result 
    .then(res=>{
        const films = res.results;
        console.log(films);
        renderFilms(films);
    })
    .catch(error=>console.error(error));
}