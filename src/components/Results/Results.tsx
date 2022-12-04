import React, { FunctionComponent } from "react";
import Tabs from "../Tabs";
import Card from "./Card";
import "./Results.css"

const Results: FunctionComponent = () => {
    return (
        <div className="results-container">
            <Tabs />
            <div className="results">
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
                <Card id={1} />
                {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
            </div>
        </div>
    )
}

export default Results;