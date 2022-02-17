import React ,{useEffect , useState}from "react";
import PropTypes from "prop-types";

export const CharacterDetail = (props) => {
    let character = props.location.state
    return (
        
        <div className="card mb-3" style={{maxwidth:"540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
               <h5 className="card-title">{character.name}</h5> 
               <p className="card-text">{character.height}</p>
               <p className="card-text">mass{character.mass}</p>
               <p className="card-text">eye color{character.eye_color}</p>
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
    