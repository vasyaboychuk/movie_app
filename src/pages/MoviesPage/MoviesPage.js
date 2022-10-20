import {Pagination} from "@mui/material";

import css from "./MoviesPage.module.css"
import {Genres, MovieList} from "../../components";
import {usePagination} from "../../hooks";

function MoviesPage() {
    const [handeCurrentPage, totalPage] = usePagination();

    return (
        <div className={css.container}>
            <Genres/>
            <MovieList/>

            <div className={css.pagination}>
                <Pagination color={"primary"} count={totalPage} onChange={(e, page) => handeCurrentPage(page)}/>
            </div>

        </div>
    );
}

export {MoviesPage};