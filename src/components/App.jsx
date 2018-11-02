import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addName, changeName } from '../actions/actions';

import Board from './Board';
import './App.scss';

const mapStateToProps = state => {
    return { 
        newValue: state.playerName
    }
};

class App extends Component {

    render() {
        return (
            <div>
                <h1 className="title">ClueHelper</h1>
                <input onChange={this.props.changeName} type="text" value={this.props.newValue}/>
                <button onClick={() => this.props.addPlayer(this.props.newValue)}>Add Player</button>
                <h2>{this.props.newValue}</h2>
                <Board></Board>
            </div>
        )
    }
}

export default connect(mapStateToProps)(App);