import React from "react";
import PropTypes from "prop-types";



export const PlanetCard = (props) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">rotation period: {props.rotation_period}</p>
                    <p className="card-text">diameter: {props.diameter}</p>
                    <p className="card-text">climate: {props.climate}</p>
                    <p className="card-text">gravity: {props.gravity}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};
PlanetCard.propTypes = {
    title:PropTypes.string,
    rotation_period:PropTypes.string,
    diameter:PropTypes.string,
    climate:PropTypes.string,
    gravity:PropTypes.string
};
