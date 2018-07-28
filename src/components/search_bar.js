import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }
    render() {
        return (
            <div className= "search-bar">
                <input 
                value= {this.state.term}
                onChange= {ev => this.onInputChange(ev.target.value)}
                placeholder= "Search..."
                />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onVideoSearch(term);
    }
} 

export default SearchBar;