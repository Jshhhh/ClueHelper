const ADD_PLAYER = 'ADD_PLAYER';
const CHANGE_NAME = 'CHANGE_NAME';

const changeName = name => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}

const addName = name => {
    return {
        type: ADD_PLAYER,
        payload: name
    }
}

module.exports = {
    changeName,
    CHANGE_NAME,
    ADD_PLAYER,
    addName
};