import {axiosService} from "./axios.service";
import {urls} from "../configs";


const movieService={
    getAllByPage: (page, genre) => axiosService.get(`${urls.movies}${page ? "?page=" + page : ""}${genre ? "&with_genres=" + genre : ""}`),
    getById: (id) => axiosService.get(`${urls.movieById}/${id}`),
    searchMovie: (query) => axiosService.get(`${urls.searchMovie}?query=${query}`),
    getTrailerById:(id)=>axiosService.get(`${urls.movieById}/${id}/videos`)

}
export {
    movieService
};