import React, { FunctionComponent, useEffect } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import './Details.css'
import { useDispatch } from 'react-redux';
import { showSearch } from '../../features/search/searchSlice';

const Details: FunctionComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className="details-container">
            <div className="button-container">
                <div onClick={() => { navigate('/'), dispatch(showSearch(true)) }} className="back-button">
                    <FontAwesomeIcon icon={faChevronLeft} className='search-icon' />
                    Back
                </div>
            </div>
            {/* <video className='details-video' autoPlay loop muted>
                <source src='' type='video/mp4' />
            </video> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3fLK-LZ3Kw_ZlDyonlvaEj4yjCgNpmdY1sA&usqp=CAU" className="details-image" />
            <div className="details-info">
                <h2>Title</h2>
                <p>Description eihpoeoif 1i fi1ioihfpo1fh porfh roefhoperp qeof pqero hor phur ehpor hgpuoh rgoh repogh rogh or ghoer hgoe hgoweh gwhg hwpogj hweprjg hwrjg hwer hgopowerh gojoewrh gwerhgoewr o rhgow hrgowhe rgohwer oghčwer gwer ghwr ghčwer ghwg hgr</p>
            </div>
        </div>
    )
}

export default Details;