import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux";


const usePagination = () => {
    const dispatch = useDispatch();

    const {totalPage} = useSelector(state => state.movieReducer);

    const handeCurrentPage = (page) => {
        dispatch(movieActions.setCurrentPage(page))
    }

    return [handeCurrentPage, totalPage]
}

export {usePagination};