import React, { Component } from 'react';

function searchingFor(term){
    return function(x){
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }
  

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
          term: ''
        }
      }

    
    render(){
        const {term} = this.state
        return(
            <form>
                <input type="text" onChange={this.props.triggerSearch} value={term}/>
            </form>
        )
    }
}

export default Search;