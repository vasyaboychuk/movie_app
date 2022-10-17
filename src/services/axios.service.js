import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const _accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzJhOGMzNDEyNmJiZGNhNmI5ZjllOGFhOGZhY2E1ZiIsInN1YiI6IjYzNGQ2NDIwMzg5ZGExMDA3OWU1ZTNiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5xwPrvnXa8qMsazAcQvrTWC_euL6Z9HwdiwJLsdhQe8';

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${_accessToken}`
    return config
});

export {
    axiosService
}