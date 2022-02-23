import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";




export const PlanetCard = (props) => {
    const {store,actions} = useContext(Context)
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src={props.planet.img}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.planet.name}</h5>
                    <p className="card-text">rotation period: {props.planet.rotation_period}</p>
                    <p className="card-text">diameter: {props.planet.diameter}</p>
                    <p className="card-text">climate: {props.planet.climate}</p>
                    <p className="card-text">gravity: {props.planet.gravity}</p>
                    <Link to ={{pathname: "/detail/planet/"+props.planet.name, state:props.planet}}>
                    <span href="#" className="btn btn-primary me-2">Details</span>
                    </Link>
                    <button className="btn btn-primary" onClick={() => actions.toggleFavorites(props.planet.name)}><i className="fas fa-heart"></i></button>
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
