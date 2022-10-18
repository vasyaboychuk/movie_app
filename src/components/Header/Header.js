import {useState} from "react";
import {useForm} from "react-hook-form";

import css from './Header.module.css';

function Header(props) {

    const[term,setTerm]=useState()
    const {register,handleSubmit,reset} = useForm();

    const search=(e)=>{
        e.preventDefault()
    }
    return (
        <div className={css.main}>
            <div className={css.search}>
                <form onSubmit={handleSubmit(search)}>
                    <input type={"text"} placeholder={'search movie'} {...register('search movie')} onChange={(e)=>setTerm(e.target.value)}/>
                    <button>search</button>
                </form>
            </div>
        </div>
    )
}

export {Header};