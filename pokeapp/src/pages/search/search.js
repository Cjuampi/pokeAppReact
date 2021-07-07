import React, { useState, useEffect} from 'react'
import Card from '../../components/Cards/Cards'
import axios from 'axios';

const Search =() =>{
    const [nombrePk,setPokemon] = useState('')
    const [resultPk,setResulPk] = useState({});
    //const [draw,setDraw] = useState(false);


    const handleSubmit = async (event) =>{
        event.preventDefault();
        setPokemon(event.target.elements.namepokemon.value)        
    }

    const handleApiPk = async () => {
        try{
            let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePk}`)
            console.log('resul',result)
            if(result.data){setResulPk(result.data)
            console.log('resul',result)}else{setResulPk({}) }
        }catch(e){
            console.error(e) 
            setResulPk({})
        }
        
    }
    useEffect (()=>{
        console.log('--- ejecuto useEffect ---')
        if (nombrePk) {
            handleApiPk()
        }
    },[nombrePk])
    
        return(
            <div className='formPokemon'>
                <form onSubmit={handleSubmit}>
                    <label>Pokemon : </label>
                    <input type='text' name='namepokemon'/>
                    <button type='submit'>buscar</button>
                </form>
                {/* {Object.keys(resultPk).length!==0?<Card infoPk={resultPk} />:""} */}
               { Object.keys(resultPk).length!==0?<Card infoPk={resultPk} />:""}
            </div>
        );
    
}
export default Search;
