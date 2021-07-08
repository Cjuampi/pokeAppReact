import React from 'react';
import './Cards.css'
const Card = (props) =>{
    /* console.log(props.infoPk) */
    console.log('** ejecuto componente cards**')
    return(
        <div className="box">
            <p>{props.name}</p>  
            <img src={props.img} alt='pokemon'/>
        </div>
    );
}

export default Card;