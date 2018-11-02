import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <section>
                <h1 className="title">ClueHelper</h1>
                <Board></Board>
            </section>
        )
    }
}

export default connect(mapStateToProps)(App);