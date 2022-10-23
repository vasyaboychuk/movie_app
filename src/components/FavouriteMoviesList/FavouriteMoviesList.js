import {FavouriteMovies} from "../FavouriteMovies/FavouriteMovies";
import css from './FavouriteMovieList.module.css'

function FavouriteMoviesList(props) {
    const movies = JSON.parse(localStorage.getItem('favourite'));

    console.log(movies);
    return (
        <div className={css.container}>
            <div className={css.info}>
                <h3>Favourite movies</h3>

            </div>
            <div className={css.wrap}>
                {movies.map(movie=><FavouriteMovies key={movie.id} movie={movie}/>)}
            </div>
        </div>

    )
}

export {FavouriteMoviesList};