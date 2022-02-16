import React from "react";
import PropTypes from "prop-types";



export const CharacterCard = (props) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">height: {props.height}</p>
                    <p className="card-text">mass: {props.mass}</p>
                    <p className="card-text">eye color: {props.eye_color}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
};
CharacterCard.propTypes = {
    title:PropTypes.string,
    height:PropTypes.string,
    mass:PropTypes.string,
    eye_color:PropTypes.string

};
