import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'
import { useDispatch } from 'react-redux';
import { showSearch } from '../../../features/search/searchSlice'


type CardProps = {
    id?: number,
    title?: string,
    image?: string,
    name?: string

}

const Card: FunctionComponent<CardProps> = ({ id, title, image, name }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div onClick={() => {navigate(`/details/${id}`), dispatch(showSearch(false))}} className="card-container">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} className="card-image" />
            <h3>
                {title}{name}
            </h3>
        </div>
    )
}

export default Card;