import {axiosService} from "./axios.service";
import {urls} from "../configs";

const genreService = {
    getAll: () => axiosService.get(urls.genres),
    getWithSearch:(idGenre)=>axiosService.get(`${urls.movies}?with_genres=${idGenre}`)
};


export {
    genreService
}