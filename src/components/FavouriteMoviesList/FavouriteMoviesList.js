import {FavouriteMovies} from "../FavouriteMovies/FavouriteMovies";

function FavouriteMoviesList(props) {
    const movies = JSON.parse(localStorage.getItem('favourite'));

    console.log(movies);
    return (
        <div>
            {movies.map(movie=><FavouriteMovies key={movie.id} movie={movie}/>)}
        </div>
    )
}

export {FavouriteMoviesList};