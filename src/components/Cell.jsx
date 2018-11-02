import React from 'react';

class Cell extends React.Component {
    constructor() {
        super()
        this.state = {
            options: ['',<p style={{color: 'red'}}>X</p>, <p style={{color: 'green'}}>O</p>],
            current: 0,
        }
    }

    handleClick = () => {
        let increment = this.state.current === 2 ? 0 : this.state.current + 1;
        this.setState({current: increment});
    }
    render() {
        return <td onClick={this.handleClick}>{this.state.options[this.state.current]}</td>
    }
};

export default Cell;