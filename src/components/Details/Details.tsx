import React, { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import './Details.css'
import { useDispatch } from 'react-redux';
import { showSearch } from '../../features/search/searchSlice';
import useDetails from "../../lib/useDetails";
import { useSelector } from 'react-redux'
import { RootState } from "../../store";
import { TailSpin } from 'react-loader-spinner';


const DetailsPage: FunctionComponent = () => {

    const { id } = useParams<{ id?: string }>()
    const { details } = useDetails(id)
    const loader = useSelector((state: RootState) => state.resulstsList.loader)
    const imgURL = process.env.REACT_APP_IMG_URL

    console.log(details)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (loader) {
        return (
            <div className='spinner'>
                <TailSpin color="#6495ed" height={80} width={80} />
            </div>
        )
    }

    return (
        <div className="details-container">
            <div className="button-container">
                <div onClick={() => { navigate('/'), dispatch(showSearch(true)) }} className="back-button">
                    <FontAwesomeIcon icon={faChevronLeft} className='search-icon' />
                    Back
                </div>
            </div>
            {details?.video && <video className='details-video' autoPlay loop muted>
                <source src='' type='video/mp4' />
            </video>}
            {!details?.video && <img src={`${imgURL}${details?.backdrop_path}`} className="details-image" />}
            <div className="details-info">
                <h2>{details?.original_title}{details?.name}</h2>
                <p>{details?.overview}</p>
            </div>
        </div>
    )
}

export default DetailsPage;