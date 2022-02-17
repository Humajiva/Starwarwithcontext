import React from "react";
import PropTypes from "prop-types";
import { Link ,useParams } from "react-router-dom";




export const PlanetCard = (props) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.planet.title}</h5>
                    <p className="card-text">rotation period: {props.planet.rotation_period}</p>
                    <p className="card-text">diameter: {props.planet.diameter}</p>
                    <p className="card-text">climate: {props.planet.climate}</p>
                    <p className="card-text">gravity: {props.planet.gravity}</p>
                    <Link to ={{pathname: "/characterdetail/"+props.planet.name, state:props.planet}}>
                    <span href="#" className="btn btn-primary">Go somewhere</span>
                    </Link>
                </div>
        </div>
    );
};
PlanetCard.propTypes = {
    planet:PropTypes.object,
    //rotation_period:PropTypes.string,
   // diameter:PropTypes.string,
    //climate:PropTypes.string,
   // gravity:PropTypes.string
};
