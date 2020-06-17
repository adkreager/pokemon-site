import React, { PureComponent } from 'react'


// const PokemonList = (props) => {
//     return (
//         <div>
//             <h1>Names</h1>
//             <hr />
//             {props.allPokemon.map((poke, index) =>
//                 //let url = "https://pokeres.bastionbot.org/images/pokemon/151.png"
//                 <li>{poke}</li>
//                 <img src='https://pokeres.bastionbot.org/images/pokemon/' + index + '.png' alt = 'POKEMON' />
//         </div>
//             }
//         )}

const PokemonList = (props) =>{
    return(
        <div>
            <h1>Names</h1>
            <hr />
            {props.allPokemon.map((poke) =>
                <li>{poke}</li>)}
        </div>
    )
    
}
export default PokemonList