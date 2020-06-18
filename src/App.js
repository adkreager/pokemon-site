import React from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar'
import Header from './Header'
import './App.css';
import PokemonItem from './PokemonItem'

class App extends React.Component {
  state = {
    currentPokemon: [],
    allPokemon: [],
    food: [],
    collection: [],
  }

  async componentDidMount() {
      let data = fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807')
      .then (result =>  result.json())
      .then (data => this.setState({allPokemon: data.results.map(element => [element.name])}))
  }


  getAllPictures() {
    let container = []
    for (let i = 1; i < 808; i++) {
        let id = i;
        let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + i + '.png'
        let urlData = 'https://pokeapi.co/api/v2/pokemon/' + id 
        container.push(<img id = {id} src={url} onClick={() => this.getPokeURL(urlData)} ></img>)
    }
    return container
  }

  getPokeURL(urlData) {
    window.scrollTo(0,0)
    let data = fetch(urlData)
      .then(result => result.json())
      .then(data => this.setState({ currentPokemon: data })) 
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header props = {this.state}/> 
        </header>         
        <body>
          <PokemonItem currentPokemon = {this.state.currentPokemon} /> 
          <ul id="list">
            {this.getAllPictures()}
          </ul>
        </body>
      </div>
    );
  }
}

export default App;
