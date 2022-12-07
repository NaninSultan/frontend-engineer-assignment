import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'
import { useDispatch } from 'react-redux';
import { showSearch } from '../../../features/search/searchSlice'
import Questionmark from '../../../Questionmark.png'


type CardProps = {
    id?: number,
    title?: string,
    image?: string,
    name?: string

}

const Card: FunctionComponent<CardProps> = ({ id, title, image, name }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const imgURL = process.env.REACT_APP_IMG_URL

    return (
        <div onClick={() => {navigate(`/details/${id}`), dispatch(showSearch(false))}} className="card-container">
            <img src={image === null ? Questionmark : `${imgURL}${image}`} className="card-image" />
            <h3>
                {title}{name}
            </h3>
        </div>
    )
}

export default Card;