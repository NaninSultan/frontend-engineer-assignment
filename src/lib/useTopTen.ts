import axios from "axios";
import { useEffect } from "react";
import { Details } from "../@types";
import { RootState } from "../store";
import { useSelector, useDispatch } from 'react-redux'
import { setCards, setLoader } from "../features/resultsList/resultsListSlice";

const useTopTen = () => {

  const dispatch = useDispatch()

  const searchState = useSelector((state: RootState) => state.search)
  const resultsState = useSelector((state:RootState) => state.resulstsList)

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
              `https://api.themoviedb.org/3/${searchState.toggle}/top_rated?api_key=c8fda8dc1535e023305ff061bf3e4b99`
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
  }, [searchState]);

  return { resultsState };
};

export default useTopTen;