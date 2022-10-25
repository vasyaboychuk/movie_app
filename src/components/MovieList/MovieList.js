import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

import {ThemeContext} from "../../App";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import css from './MovieList.module.css'


function MovieList() {

    const dispatch = useDispatch();
    const {theme} = useContext(ThemeContext);
    let [toTopButton,setToTopButton] = useState(false);

    const {movies, currentPage,loading} = useSelector(state => state.movieReducer);
    const {genre} = useSelector(state => state.genreReducer);

   const scrollUp=()=>{
       window.scrollTo({top:0,behavior:"smooth"})
   }
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY > 100) {
                setToTopButton(true)
            }else {
                setToTopButton(false)
            }
        })
    },[])


    useEffect(() => {
        dispatch(movieActions.getAllByPage({currentPage, genre}))

    }, [currentPage,genre]);

    return (
        <div className={css.container}>
            {loading&&<h1>Loading... <HourglassBottomIcon/></h1>}
            <div className={css.wrap} data-theme={theme}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                {toTopButton&&(<KeyboardDoubleArrowUpIcon  className={css.scrollButton} color={'warning'} fontSize={'large'} onClick={scrollUp}

                />)}
            </div>
        </div>

    )
}

export {MovieList};