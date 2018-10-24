const ADD_PLAYER = 'ADD_PLAYER';

const addName = name => {
    return {
        type: ADD_PLAYER,
        payload: name
    }
}

module.exports = {
    ADD_PLAYER,
    addName
};