import {useSelector} from "react-redux";

import {FavouriteMovies} from "../FavouriteMovies/FavouriteMovies";
import css from './FavouriteMovieList.module.css'

function FavouriteMoviesList() {

    const {favouriteMovies,loading} = useSelector(state => state.movieReducer);

    return (
        <div className={css.container}>
            {loading&&<h1>Loading........</h1>}
            <div className={css.info}>
                <h3>Favourite movies</h3>
            </div>
            <div className={css.wrap}>
                {favouriteMovies.length>0?favouriteMovies.map(movie=><FavouriteMovies key={movie.id} movie={movie}/>):"No movies selected"}
            </div>
        </div>

    )
}

export {FavouriteMoviesList};