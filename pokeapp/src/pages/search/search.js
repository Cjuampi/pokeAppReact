import React, { useState, useEffect} from 'react'
import Card from '../../components/Cards/Cards'
import axios from 'axios';

const Search =() =>{
    const [nombrePk,setPokemon] = useState('')
    const [resultPk,setResulPk] = useState([]);

    const handleSubmit = async (event) =>{
        event.preventDefault();
        setPokemon(event.target.elements.namepokemon.value)        
    }

    const handleApiPk = async () => {
        try{
            let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePk}`)
/*             console.log('resulAxio',result.data) */
            if(result.data){
                setResulPk([...resultPk,result.data])
                console.log('resulPK',resultPk)
            }/* else{setResulPk([...]) } */
        }catch(e){
            console.error(e) 
            /* setResulPk([...resultPk]) */
            console.log('resulPK',resultPk)
        }
        
    }

    const drawCard = () => {
        console.log(".......Entro en el drawCard .......")
        return resultPk.map((elem, index)=> {
            console.log('name:',elem.name,' img:', elem.sprites.front_default)
            return <Card key={index} name={elem.name} img={elem.sprites.front_default} />
        })
    }

    useEffect (()=>{
        console.log('--- ejecuto useEffect handleApiPk ---')
        if (nombrePk) {
            handleApiPk()
        }
    },[nombrePk])

 /*    useEffect(()=>{
        console.log('--- ejecuto useEffect  Cards ---')
        drawCard()
    },[resultPk]) */
    
        return(
            <div className='formPokemon'>
                <form onSubmit={handleSubmit}>
                    <label>Pokemon : </label>
                    <input type='text' name='namepokemon'/>
                    <button type='submit'>buscar</button>
                </form>
                {/* {Object.keys(resultPk).length!==0?<Card infoPk={resultPk} />:""} */}
               {/* { Object.keys(resultPk).length!==0?<Card infoPk={resultPk} />:""} */}
               <div> {drawCard()} </div>
            </div>
        );
    
}
export default Search;
