import { ADD_PLAYER } from '../actions/actions';

const initialState = {
    players: [],
    weapons: [],
    rooms: [],
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PLAYER:
            return {...state, players: [...state.players, action.payload]};
        default:
            return state;
    }
};

export default rootReducer;