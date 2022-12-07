import React, { FunctionComponent, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store';
import { setToggle } from '../../features/search/searchSlice'
import './Tabs.css';
import { setLoader } from '../../features/resultsList/resultsListSlice';


const Tabs: FunctionComponent = () => {


    const dispatch = useDispatch()
    const toggle = useSelector((state: RootState) => state.search.toggle)

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setLoader(false))
        }, 1000);
        return () => clearTimeout(timer);
    }, [toggle]);

    return (
        <div className='tabs-container'>
            <div onClick={() => { dispatch(setToggle('tv')); dispatch(setLoader(true)) }} className={`tab-left tab ${toggle === 'tv' ? 'active' : ''}`}>
                TV Shows
            </div>
            <div onClick={() => { dispatch(setToggle('movie')); dispatch(setLoader(true)) }} className={`tab-right tab ${toggle === 'movie' ? 'active' : ''}`}>
                Movies
            </div>
        </div>
    )
}

export default Tabs;