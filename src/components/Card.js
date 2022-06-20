import React from "react";
import map from "../images/map-icon.png";

export default function Card(props) {
    return (
        <div className="card">
            <img className="cardImage" src={props.imageUrl} />
            <div className="cardContent">
                <div className="cardLocation">
                    <img className="mapIcon" src={map}/>
                    <div className="country">{props.location}</div>
                    <a className="mapLink" href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <div className="cardTitle">{props.title}</div>
                <div className="cardDate">{props.startDate} {props.endDate}</div>
                <div className="cardDescription">{props.description}</div>
            </div>
        </div>
    )
}