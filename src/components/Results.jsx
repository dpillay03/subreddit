import React from 'react';

export default class Results extends React.Component {
    results(){
        return this.props.topics.map((results, i) => {
            return <a href={results.data.url} target="blank" key={i}><li>{results.data.title}</li></a>
        })
    }

    render() {
        return (
            <div>
                <p>Results: {this.props.topics.length}</p>
                <ul>{this.results()}</ul>
            </div>
        )
    }
}