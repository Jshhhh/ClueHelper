import React, { Component } from 'react';
import { connect } from 'react-redux';

import Board from './Board';
import './App.scss';

const App = () => {
    return (
        <section>
            <h1 className="title">ClueHelper</h1>
            <Board></Board>
        </section>
    );
}

export default connect()(App);