import React from 'react';
import Search from './Search';
import Results from './Results';

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            topics: [],
            count: 0
        }
        this.performSearch = this.performSearch.bind(this);
    }

    performSearch(query) {
        console.log('Query: ', query)
        fetch(`https://www.reddit.com/r/${query}.json?`)
        .then(res => {
            console.log('results : ', res);
            return res.json();
        })
        .then(res => {
            this.setState({topics: res.data.children })
        })
        .catch(err => {
            console.log('Error: ', err)
        })
    }
    
    render(){
        return (
            <div>
                <Search search={this.performSearch}/>
                <Results className="searchResults" topics={this.state.topics}/>
            </div>)
    }
}
