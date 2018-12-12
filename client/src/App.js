import React, { Component } from 'react';
import './App.scss'

function searchingFor(term){
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) || x.types[0].toLowerCase().includes(term.toLowerCase()) ||  !term;
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      term: '',
      isHidden: true
    }
  }

  searchHandler = (event) => {
    this.setState({
      term: event.target.value,
      isHidden: !event.target.value,
    });
  }


  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }
  render() {
    const {term, users, isHidden} = this.state
    return (
    <div className="App">
      <div className="wrapper">
        <form className="form-header">
          <h1 className="search-headline">Pokedex Search</h1>
          <label className="search-label">Search for Pokemon by breed or type</label>
          <input 
            placeholder="i.e. Pikachu or water" 
            className="input-style" 
            type="text" 
            onChange={this.searchHandler} 
            value={term}
          />
        </form> 
        {!isHidden &&
        <div className="pokemon-display">
          {users.filter(searchingFor(term)).map(user =>
            <div className="pokemon-card" key={user.name}>
              <h1 className="pokemon-name">{user.name}</h1>
              <p className="pokemon-type">{user.types[0]} {user.types[1]}</p>
            </div>
          )}
        </div>
        }
      </div>
    </div>
    );
  }
}

export default App;
