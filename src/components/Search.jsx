import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInput: '' 
        }
        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(e) {
        let input = e.target.value;
        this.setState({userInput: input})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.search(e.target.search.value)
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input id="searchform"
                    type="text" 
                    name="search"
                    
                    onChange={this.updateInput} 
                    placeholder="What's do you want to know?" /> 
                <button>Go!</button>
            </form>
        )
    }
}
