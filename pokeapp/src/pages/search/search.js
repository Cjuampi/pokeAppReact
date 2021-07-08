import React, { useState, useEffect} from 'react'
import Card from '../../components/Cards/Cards'
import axios from 'axios';
import debounce from "debounce";

const Search =() =>{
    const [nombrePk,setPokemon] = useState('')
    const [resultPk,setResulPk] = useState([]);
  

/*     const handleSubmit = async (event) =>{
        event.preventDefault();
        setPokemon(event.target.elements.namepokemon.value)        
    } */

    const handleChange = (e) => {
        setPokemon(e.target.value)
    }

    const existElement = (pokemon) =>{
            return resultPk.findIndex((element) => {
                if(element.name === pokemon){return true }else{return false}
            })

    }

    const fDebouce = debounce(handleChange,1500)

    const handleApiPk = async () => {
            try{
                let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePk}`)
                if(result.data){
                    /* console.log('existe?:',existElement(nombrePk)) */
                    if(existElement(nombrePk) === -1 ){
                        setResulPk([...resultPk,result.data])
                    } else{
                        setResulPk([...resultPk])
                    } 
                }
            }catch(e){
                console.error(e) 
                /* console.log('Catch resulPK',resultPk) */
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

    
        return(
            <div className='formPokemon'>
                {/* <form onSubmit={handleSubmit}> */}
                    <label>Pokemon : </label>
                    <input type='text' name='namepokemon' onChange={fDebouce} />
                    {/* <button type='submit'>buscar</button> */}
                {/* </form> */}
                {/* {Object.keys(resultPk).length!==0?<Card infoPk={resultPk} />:""} */}
               {/* { Object.keys(resultPk).length!==0?<Card infoPk={resultPk} />:""} */}
               <div> {drawCard()} </div>
            </div>
        );
    
}
export default Search;
