import React from "react";
import PropTypes from "prop-types";
import { Link ,useParams } from "react-router-dom";



export const CharacterCard = (props) => {
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.person.title}</h5>
                    <p className="card-text">height: {props.person.height}</p>
                    <p className="card-text">mass: {props.person.mass}</p>
                    <p className="card-text">eye color: {props.person.eye_color}</p>
                    <Link to ={{pathname: "/characterdetail/character/" +props.person.name, state:props.person}}>
                    <span className="btn btn-primary" href="#" role="button">
                         Go Somewhere </span>
                    </Link>
                </div>
        </div>
    );
};
CharacterCard.propTypes = {
    person:PropTypes.object,
   // height:PropTypes.string,
   // eye_color:PropTypes.string

};
