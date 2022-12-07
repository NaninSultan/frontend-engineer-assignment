import axios from "axios";
import { useEffect } from "react";
import { Details } from "../@types";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../store";
import { setCards, setLoader } from "../features/resultsList/resultsListSlice";
import { useNavigate } from 'react-router-dom'

const API_KEY = process.env.REACT_APP_API_KEY
const apiURL = process.env.REACT_APP_API_URL

const useSearch = () => {

    const searchState = useSelector((state: RootState) => state.search)
    const resultsState = useSelector((state: RootState) => state.resulstsList)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    type Data = {
        page: number;
        results: Details[];
        total_pages: number;
        total_results: number
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {

            if (searchState.search.length > 2) {
                const fetcher = async () => {
                    navigate('/');
                    dispatch(setLoader(true));

                    try {
                        const {
                            data: { results },
                        } = await axios.get<Data>(
                            `${apiURL}/search/${searchState.toggle}?api_key=${API_KEY}=${searchState.search}`
                        );
                        dispatch(setCards(results.slice(0, 10)));
                        console.log(results)
                    } catch (error) {
                        console.log(error);
                    } finally {
                        dispatch(setLoader(false));
                    }
                };
                fetcher();
            }
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
    }, [searchState.toggle, searchState.search]);

    return { resultsState };
};

export default useSearch;