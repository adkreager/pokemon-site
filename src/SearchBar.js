import React, { PureComponent } from 'react'

const SearchBar = (props) => {

    function getPokeURL(urlData) {
        window.scrollTo(0,0)
        let data = fetch(urlData)
          .then(result => result.json())
          .then(data => this.setState({ currentPokemon: data })) 
      }    
    
    function search_pokemon() { 
        let input = document.getElementById('searchbar').value
        input = input.toLowerCase(); 
        let x = props.props.allPokemon; 

        for (let i = 0; i < x.length; i++) {  
            if (x[i].includes(input)) { 
                let url = 'https://pokeapi.co/api/v2/pokemon/' + x[i];
                getPokeURL(url);
            } 
        } 
    } 

    return (
        <form >
            <input type='text' id ='searchbar' placeholder="Search..."></input>
            {/* <input type='submit' ></input> */}
            <button type='button' onClick={search_pokemon()}> Search </button>
        </form>
    )
}

export default SearchBar