import React, {useContext} from "react";
import PropTypes from "prop-types";
import { Link ,useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharacterCard = (props) => {
    const {store,actions} = useContext(Context)
    return (
        <div className="card" style={{width:"18rem"}}>
            <img src={props.person.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.person.name}</h5>
                    <p className="card-text">height: {props.person.height}</p>
                    <p className="card-text">mass: {props.person.mass}</p>
                    <p className="card-text">eye color: {props.person.eye_color}</p>
                    <Link to ={{pathname: "/detail/character/" +props.person.name, state:props.person}}>
                    <span className="btn btn-primary me-2" href="#" role="button">
                         Details </span>
                    </Link>
                    <button className="btn btn-primary" onClick={() => actions.toggleFavorites(props.person.name)}><i className="fas fa-heart"></i></button>
                </div>
        </div>
    );
};
CharacterCard.propTypes = {
    person:PropTypes.object,
   // height:PropTypes.string,
   // eye_color:PropTypes.string

};
