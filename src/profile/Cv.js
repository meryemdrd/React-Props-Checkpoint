import React from 'react';
import PropTypes from "prop-types";

const Cv =(props)=>{
    
    const handleClick =e=>{
        e.preventDefault();
        alert(`${props.fullName}`);
    }

    return (
        <div>
          <h1 style={{color: 'red',}}>I am {props.fullName}</h1>
          <h3>{props.bio}</h3>
          <h5>I am a {props.profession}</h5>
          <div>
              <button style={{ backgroundColor:'red',}} onClick={handleClick}>
                  Join us   
              </button>
            

          </div>
        
          <br></br>
        <div> this my country  </div> {props.children}
        </div>
    )
  
}

Cv.defaultProps ={
   alert:'vide' };
Cv.propTypes={
  fullName : PropTypes.string };
export default Cv;

