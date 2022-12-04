import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import './Card.css'

type CardProps = {
    id?: number,
    title?: string,
    image?: string

}

const Card: FunctionComponent<CardProps> = ({ id, title, image }) => {

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/details/${id}`)} className="card-container">
            <img src="https://m.media-amazon.com/images/I/81ExnOEcqzL._SY550_.jpg" className="card-image" />
            <h3>
                Movie Title
            </h3>
        </div>
    )
}

export default Card;