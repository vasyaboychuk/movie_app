import {axiosService} from "./axios.service";
import {urls} from "../configs";


const movieService={
    getAllByPage: (page) => axiosService.get(`${urls.movies}?page=${page}`),
    getById: (id) => axiosService.get(`${urls.movieById}/${id}`),
    searchMovie:(query)=>axiosService.get(`${urls.searchMovie}?query=${query}`)

}
export {
    movieService
};