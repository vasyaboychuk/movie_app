import {useDispatch} from "react-redux";

import {FavouriteMoviesList} from "../../components";
import {movieActions} from "../../redux";
import css from './FavouriteMoviesPage.module.css';


function FavouriteMoviesPage() {

    const movies = JSON.parse(localStorage.getItem('favourite'));
    const dispatch = useDispatch();
    dispatch(movieActions.setFavouriteMovies(movies));

    return (
        <div className={css.wrap}>
            <FavouriteMoviesList/>
        </div>
    )
}

export {FavouriteMoviesPage};