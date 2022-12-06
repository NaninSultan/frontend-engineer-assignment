import React, { FunctionComponent } from "react";
import Tabs from "../Tabs";
import Card from "./Card";
import "./Results.css";
import { RootState } from "../../store";
import { Details } from "../../@types";
import { useTopTen, useSearch } from "../../lib";
import { useSelector, useDispatch } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

const Results: FunctionComponent = () => {

    const resulstsList = useSelector((state: RootState) => state.resulstsList.cards);
    const loader = useSelector((state: RootState) => state.resulstsList.loader)

    useTopTen()
    useSearch()

    if (loader) {
        return (
            <div className='spinner'>
                <TailSpin color="#6495ed" height={80} width={80} />
            </div>
        )
    }

    return (
        <div className="results-container">
            <Tabs />
            <div className="results">
                {resulstsList?.map((card: Details, index: number) => {
                    return (
                        <Card key={index} id={card.id} title={card?.original_title} image={card.poster_path} name={card?.name} />
                    )
                })}
            </div>
        </div>
    )
}

export default Results;