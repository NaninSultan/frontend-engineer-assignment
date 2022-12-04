import React, { FunctionComponent } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import './Details.css'

const Details: FunctionComponent = () => {

    const navigate = useNavigate()

    return (
        <div className="details-container">
            <div onClick={() => navigate('/')} className="back-button">
                <FontAwesomeIcon icon={faChevronLeft} className='search-icon' />
                Back
            </div>
            {/* <video className='details-video' autoPlay loop muted>
                <source src='' type='video/mp4' />
            </video> */}
            <img className="details-image" />
            <div className="details-info">
                <h2>Title</h2>
                <p>Description eihpoeoif 1i fi1ioihfpo1fh porfh roefhoperp qeof pqero hor phur ehpor hgpuoh rgoh repogh rogh or ghoer hgoe hgoweh gwhg hwpogj hweprjg hwrjg hwer hgopowerh gojoewrh gwerhgoewr o rhgow hrgowhe rgohwer oghčwer gwer ghwr ghčwer ghwg hgr</p>
            </div>
        </div>
    )
}

export default Details;