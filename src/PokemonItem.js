import React, { PureComponent } from 'react'

const PokemonItem = (props) => {

    if (!props.currentPokemon['types']) {
        return null
    }
    let imgSrc = 'https://pokeres.bastionbot.org/images/pokemon/' + props.currentPokemon['id'] + '.png'

    let type = "";
    if (props.currentPokemon.types[0] &&
        props.currentPokemon.types[1]) {
            type = <li>Type: {props.currentPokemon.types[0].type.name.charAt(0).toUpperCase() + props.currentPokemon.types[0].type.name.slice(1)},  
            {" " + props.currentPokemon.types[1].type.name.charAt(0).toUpperCase() + props.currentPokemon.types[1].type.name.slice(1)}</li>
        }
        else{
            type = <li>Type: {props.currentPokemon.types[0].type.name.charAt(0).toUpperCase() + props.currentPokemon.types[0].type.name.slice(1)}</li>
        }

    return(
        <div id="pokeItem"> 

            <h1>{props.currentPokemon.name.charAt(0).toUpperCase() + props.currentPokemon.name.slice(1)}</h1>
            {<img src={imgSrc} id='pokemon-img' />}
            {type}
        </div>
    )
}

export default PokemonItem