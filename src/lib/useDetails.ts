import axios from "axios";
import { useEffect, useState } from "react";
import { Details } from "../@types";
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from "../store";
import { setLoader } from "../features/resultsList/resultsListSlice";

const API_KEY = process.env.REACT_APP_API_KEY
const apiURL = process.env.REACT_APP_API_URL

const useDetails = (id?: string) => {

    const searchState = useSelector((state: RootState) => state.search)
    const dispatch = useDispatch()
    const [details, setDetails] = useState<Details>()

    useEffect(() => {

        const fetcher = async () => {
            dispatch(setLoader(true));

            try {
                const {
                    data
                } = await axios.get<Details>(
                    `${apiURL}/${searchState.toggle}/${id}?api_key=${API_KEY}=${searchState.search}`
                );
                setDetails(data);
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setLoader(false));
            }
        };
        fetcher();

    }, [searchState.toggle]);

    return { details };
};

export default useDetails;