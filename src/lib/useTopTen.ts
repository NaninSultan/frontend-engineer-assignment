import axios from "axios";
import { useEffect } from "react";
import { Details } from "../@types";
import { RootState } from "../store";
import { useSelector, useDispatch } from 'react-redux'
import { setCards, setLoader } from "../features/resultsList/resultsListSlice";

const useTopTen = () => {

  const dispatch = useDispatch()

  const searchState = useSelector((state: RootState) => state.search)
  const resultsState = useSelector((state: RootState) => state.resulstsList)

  const API_KEY = process.env.REACT_APP_API_KEY
  const apiURL = process.env.REACT_APP_API_URL

  type Data = {
    page: number;
    results: Details[];
    total_pages: number;
    total_results: number
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchState.search.length < 3) {
        const fetcher = async () => {
          dispatch(setLoader(true));

          try {
            const {
              data: { results },
            } = await axios.get<Data>(
              `${apiURL}/${searchState.toggle}/top_rated?api_key=${API_KEY}`
            );
            dispatch(setCards(results.slice(0, 10)));
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
  }, [searchState.toggle]);

  return { resultsState };
};

export default useTopTen;