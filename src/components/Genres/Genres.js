import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux/slices/genre.slice";
import css from './Genres.module.css';

const Genres=()=> {



    const {genres} = useSelector(state=>state.genreReducer);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genresActions.getAll());
    },[])

    return (
        <div className={css.genres}>
            {/*{genres.genres?.map(genre=><button key={genre.id}>{genre.name}</button>)}*/}
            <select>
                { genres.genres?.map(genre=><option >{genre.name}</option>)}

            </select>
        </div>
    )
}

export {Genres};