import React, { Component } from 'react';

//Functional Component -- stateless
/*
const Searchbar = () => {
    return <input />
};
*/

//Class Component -- stateful
class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = { term: '' }
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange = { event => this.onInputchange(event.target.value) } />
            </div>
        );
    }

    onInputchange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;


//ES5 of above render()
/*
   render() {
        return <input onChange = {this.onInputChange} />  //onChange is an event
    }
    //Event Handler
    onInputChange(event) {
        console.log(event.target.value)
    }
*/