import React, { FunctionComponent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store';
import { setToggle } from '../../features/search/searchSlice'
import './Tabs.css';


const Tabs: FunctionComponent = () => {


    const dispatch = useDispatch()
    const toggle = useSelector((state: RootState) => state.search.toggle)

    return (
        <div className='tabs-container'>
            <div onClick={() => dispatch(setToggle('tv'))} className={`tab-left tab ${toggle === 'tv' ? 'active' : ''}`}>
                TV Shows
            </div>
            <div onClick={() => dispatch(setToggle('movie'))} className={`tab-right tab ${toggle === 'movie' ? 'active' : ''}`}>
                Movies
            </div>
        </div>
    )
}

export default Tabs;