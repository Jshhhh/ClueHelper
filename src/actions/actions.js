const ADD_NAME = 'ADD_NAME';

const addName = name => {
    return dispatch => {
        setTimeout(() => dispatch(asyncAddName(name)), 2000);
    }
};

const asyncAddName = name => {
    return {
        type: ADD_NAME,
        payload: name
    }
}

module.exports = {
    ADD_NAME,
    addName
};