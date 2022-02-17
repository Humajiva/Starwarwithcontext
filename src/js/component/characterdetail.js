import React ,{useEffect , useState}from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom"


export const CharacterDetail = (props) => {
    let character = props.location.state
    let {type} = useParams ();
    console.log (type , character);
    return (
        
        <div className="card mb-3" style={{maxwidth:"540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
               {type ==="character"?(<><h5 className="card-title">{character.name}</h5> 
               <p className="card-text">height:{character.height}</p>
               <p className="card-text">mass:{character.mass}</p>
               <p className="card-text">eye color:{character.eye_color}</p></>):(<>
                <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">rotation period: {character.rotation_period}</p>
                    <p className="card-text">diameter: {character.diameter}</p>
                    <p className="card-text">climate: {character.climate}</p>
                    <p className="card-text">gravity: {character.gravity}</p>
               </>)}
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

    );
};
    CharacterDetail.propTypes = {
       location:PropTypes.object,
    }
        //rotation_period:PropTypes.string,
       // diameter:PropTypes.string,
        //climate:PropTypes.string,
       // gravity:PropTypes.string
    