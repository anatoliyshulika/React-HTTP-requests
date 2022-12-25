import { ToastContainer } from 'react-toastify';
import { Component } from 'react';
import PokemonForm from './PokemonForm';

class App extends Component {
  state = {
    pokemon: null,
    loading: false,
    pokemonName: '',
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }))
      .finally(() => this.setState({ loading: false }));
  }

  handleFormSubmit = pokemonName => {
    this.setState({
      pokemonName,
    });
  };

  render() {
    const { pokemon, loading } = this.state;
    return (
      <div>
        {loading && <h1>Loading...</h1>}
        {pokemon && <div> Tut budet hrenomon {pokemon.name}</div>}
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    );
  }
}

export default App;
