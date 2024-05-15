import React from "react";
import location_pic from "../images/fill_location.png";

export default function MainContent(props) {
    return (
        <div className="main-container">
            <img className="main-pic" src={props.item.imageUrl} alt="travel"></img>
            <div className="main-details">
                <div className="main-location-details">
                    <img className="main-location-pic" src={location_pic} alt="ping"></img>
                    <h5 className="main-location">{props.item.location}</h5>
                    <a className="main-googleLink" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="main-title">{props.item.title}</h1>
                <p className="main-date">{props.item.date}</p>
                <p className="main-description">{props.item.description}</p>
            </div>
        </div>
    )
}