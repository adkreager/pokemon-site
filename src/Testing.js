const { render } = require("@testing-library/react");
import React, {useState, useEffect} from 'react'
const { useState, useEffect } = require("react");

import React, {useState, useEffect} from 'react'
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Getting nested data
render() {
    if (!this.state.pokemonData['abilities']) {
        return null
    }
    
    return (
        <div className='container'>
            <h2>{this.props.name}</h2>
            <Pokemon data={this.state.pokemonData} />
        </div>
    )
    )
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//import React, {useState, useEffect} from 'react
// pass the value of the search bar submit into the function, and fetch the data for the one specific pokemon
function Pokemon(props) {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.data}`)
        .then(result => result.json())
        .then(setPokemon);
    })

    let imgSrc = 'https://pokeres.bastionbot.org/images/pokemon' + pokemon['id'] + '.png'
    if (!pokemon['abilities']) {
        return null
    }

    return (
        <div className="info">
            {<img src={imgSrc} id='pokemon-img'></img>}
            <ul>
                Abilities
                <li>{pokemon['abilities'].map(ability => ability['ability']['name'][0].toUpperCase() +
                    ability['ability']['name'].slice(1) + ' ')}</li>
            </ul>
            <ul>
                Type(s)
                <li>{pokemon['types'].map(types => types['type']['name'][0].toUpperCase() + types['type']['name'].slice(1) + ' ')}</li>
            </ul>
        </div>
    )
})

//export default Pokemon

//////////////////////////////////////////////////////////////////////////////////////////////////
// make first letter of a string uppercase
element.name.charAt(0).toUpperCase() + element.name.slice(1)