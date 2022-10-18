import {axiosService} from "./axios.service";
import {urls} from "../configs";


const movieService={
    getAll: () => axiosService.get(urls.movies),
    getById: (id) => axiosService.get(`${urls.movieById}/${id}`),
    searchMovie:(page,value)=>axiosService.get(`${urls.searchMovie}?page=${page}&query=${value}`)



}
export {
    movieService
};
