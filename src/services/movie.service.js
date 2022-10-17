import {axiosService} from "./axios.service";
import {urls} from "../configs";


const movieService={
    getAll: (page) => axiosService.get(`${urls.movies}?page=${page}`),



}
export {
    movieService
};
