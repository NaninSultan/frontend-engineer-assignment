import React, { FunctionComponent } from "react";
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
import NoData from '../../NoData.png'

const DetailsPage: FunctionComponent = () => {

    const { id } = useParams<{ id?: string }>()
    const { details } = useDetails(id)
    const loader = useSelector((state: RootState) => state.resulstsList.loader)
    const imgURL = process.env.REACT_APP_IMG_URL

    console.log(details?.videos?.results[0]?.key)

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
            {details?.videos?.results[0]?.key &&
                <iframe
                    className='details-video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://Youtube.com/embed/${details?.videos?.results[0]?.key}?autoplay=0`}
                />
            }
            {!details?.videos?.results[0]?.key &&
                <img src={details?.backdrop_path ? `${imgURL}${details?.backdrop_path}` : NoData} className="details-image" />
            }
            <div className="details-info">
                <h2>{details?.original_title}{details?.name}</h2>
                <p>{details?.overview}</p>
            </div>
        </div>
    )
}

export default DetailsPage;