import {useState} from "react";
import {useForm} from "react-hook-form";

import css from './Header.module.css';
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";

function Header(props) {

    const dispatch = useDispatch();
    const [query, setQuery] = useState();
    const {register, handleSubmit, reset} = useForm();

    const search = () => {
        dispatch(movieActions.getBySearch({query}));
        reset();
    }
    return (
        <div className={css.main}>
            <div className={css.search}>
                <form onSubmit={handleSubmit(search)}>

                    <input type={"text"} placeholder={'search movie'} {...register('search movie')}
                           onChange={(e) => setQuery(e.target.value)}/>

                    <button>search</button>
                </form>
            </div>
        </div>
    )
}

export {Header};