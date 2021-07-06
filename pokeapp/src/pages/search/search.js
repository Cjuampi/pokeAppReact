import React, { useState, useEffect} from 'react'
import Card from '../../components/Cards/Cards'
import axios from 'axios';

const Search =() =>{
    const [nombrePk,setPokemon] = useState('')
    const [resultPk,setResulPk] = useState({});
    const [draw,setDraw] = useState(false);

    const handleChangeNamePk = (event)=>{
        setDraw(false)
        setPokemon(event.target.value)
        /* console.log('nombre:',nombrePk) */
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        /* console.log('handleSubmit') */
        
    }
    const handleApiPk = async () => {
        /* console.log('handleApiPk') */
        try{
            let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePk}`)
            setResulPk(result.data)
            console.log(result)
        }catch(e){
            console.error(e)
            setResulPk({})
        }
        
    }
    useEffect (()=>{
        resultPk.name?setDraw(true):setDraw(false)
    },[resultPk])

    

        return(
            <div className='formPokemon'>
                <form onSubmit={handleSubmit}>
                    <label>Pokemon : </label>
                    <input type='text' name='namepokemon' onChange={handleChangeNamePk}/>
                    <button type='submit' onClick={handleApiPk}>buscar</button>
                </form>
                {draw===true?<Card infoPk={resultPk} />:''}
            </div>
        );
    
}
export default Search;