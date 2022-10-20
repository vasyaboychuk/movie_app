import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux/slices/genre.slice";
import css from './Genres.module.css';

const Genres=()=> {



    const {genres,genre} = useSelector(state=>state.genreReducer);

    const dispatch = useDispatch();




    const handleCurrentGenre=(e)=>{
       dispatch(genresActions.setGenre(e.target.value))

    }


    useEffect(()=>{
        dispatch(genresActions.getAll());
    },[])

    return (
        <div className={css.genres}>
            {/*{genres.genres?.map(genre=><button key={genre.id}>{genre.name}</button>)}*/}
            {/*<select>*/}
                { genres.genres?.map(genre=><button value={genre.name} onClick={(e)=>handleCurrentGenre(e)} >{genre.name}</button>)}

            {/*</select>*/}
        </div>
    )
}

export {Genres};