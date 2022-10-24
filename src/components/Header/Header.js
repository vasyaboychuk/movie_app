import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReactSwitch from 'react-switch';

import {ThemeContext} from "../../App";
import css from './Header.module.css';
import {movieActions} from "../../redux";


function Header(props) {

    const dispatch = useDispatch();
    const [query, setQuery] = useState();
    const {register, handleSubmit, reset} = useForm();
    const navigate = useNavigate();
    const {toggle,theme} = useContext(ThemeContext);

    const search = () => {
        dispatch(movieActions.getBySearch({query}));
        reset();
    }

    return (

        <div className={css.main} data-theme={theme}>
            <div className={css.search}>


                <form onSubmit={handleSubmit(search)}>

                    <input type={"text"} placeholder={'search movie'} {...register('search movie')}
                           onChange={(e) => setQuery(e.target.value)}/>
                    <Button variant="contained" size={"small"}>search</Button>
                </form>
                <Button size={'small'} variant="contained" color={'error'} onClick={()=>{navigate('/favorite')}}>My movies</Button>
            </div>
            <div className={css.name}>
                <h2 onClick={()=>navigate('/movies')}>BEST MOVIES</h2>
            </div>
            <div className={css.info}>
                <div className={css.user}>
                    <AccountCircleIcon fontSize={"large"}/>
                    <h5>username</h5>
                </div>
                <div className={css.themeSwitcher}>
                    <span>{theme==='light'?'Light Mode':'Dark Mode'}</span>
                    <ReactSwitch height={20}  checked={theme==='dark'} onChange={toggle}/>
                </div>
            </div>


        </div>
    );
}

export {Header};