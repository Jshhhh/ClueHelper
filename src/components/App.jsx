import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addName } from '../actions/actions';

const mapStateToProps = state => {
    return { newValue: state.value }
};

const mapDispatchToProps = dispatch => {
    return {
        changeValue: (e) => {
            dispatch(addName(e.target.value));
        }
    }
}

class App extends Component {
    render() {
       return (
        <div>
            <h1>cl-UI</h1>
            <input onChange={this.props.changeValue} type="text" value={this.props.newValue}/>
            <h2>{this.props.newValue}</h2>
        </div>
       )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);