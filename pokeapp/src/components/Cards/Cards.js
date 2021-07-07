import React from 'react';
import './Cards.css'
const Card = (props) =>{
    /* console.log(props.infoPk) */
    console.log('** ejecuto componente cards**')
    return(
        <div className="box">
            <p>{props.infoPk.name}</p>  
            <img src={props.infoPk.sprites.front_default} alt='pokemon'/>
        </div>
    );
}

export default Card;