import React ,{useEffect , useState}from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom"


export const Detail = (props) => {
    let data = props.location.state
    let {type} = useParams ();
    console.log (type , data);
    return (
        
        <div className="card mb-3" style={{maxwidth:"540px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={data.img} className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
               {type ==="data"?(<><h5 className="card-title">{data.name}</h5> 
               <p className="card-text">height:{data.height}</p>
               <p className="card-text">mass:{data.mass}</p>
               <p className="card-text">eye color:{data.eye_color}</p></>):(<>
                <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">rotation period: {data.rotation_period}</p>
                    <p className="card-text">diameter: {data.diameter}</p>
                    <p className="card-text">climate: {data.climate}</p>
                    <p className="card-text">gravity: {data.gravity}</p>
               </>)}
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>

    );
};
    Detail.propTypes = {
       location:PropTypes.object,
    }
        //rotation_period:PropTypes.string,
       // diameter:PropTypes.string,
        //climate:PropTypes.string,
       // gravity:PropTypes.string
    