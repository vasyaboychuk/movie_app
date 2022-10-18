import {useNavigate} from "react-router-dom";

function SingleMovieDetails({currentMovie}) {
    const {original_language,original_title,overview,release_date} = currentMovie;

    const navigate = useNavigate();
    return (
        <div>
           <div>Language: {original_language}</div>
           <div>Name: {original_title}</div>
           <div>About: {overview}</div>
           <div>Release: {release_date}</div>
            <button onClick={()=>navigate(-1)}>back</button>
           
        </div>
    )
}

export {SingleMovieDetails};