import React from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar'
import Header from './Header'
import './App.css';
import PokemonList from './PokemonList'

class App extends React.Component {
    state = {
      currentPokemon : [],
      allPokemon: [],
      urlPokemon: [],
      food: [],
      collection: [],
    }
  async componentDidMount() {

      let data = fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .then (result =>  result.json())
      .then (data => this.setState({allPokemon: data.results.map(element => [element.name])}))

      data = fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .then (result =>  result.json())
      .then (data => this.setState({urlPokemon: data.results.map(element => [element.url])}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <Header />
            <ul id="list">
              <PokemonList allPokemon = {this.state.allPokemon} urlPokemon = {this.state.urlPokemon} />
              <img src="https://pokeres.bastionbot.org/images/pokemon/151.png" alt="mew" />}

            </ul>
          </div>
        </header>
      </div>
    );
  }
}
export default App;
