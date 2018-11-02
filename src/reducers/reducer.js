// import { ADD_PLAYER, CHANGE_NAME } from '../actions/actions';


//add a board grid
//win condition boolean
const initialState = {
    playerName: '',
    players: ['Colonel Mustard', 'Prof Plum', 'Miss Scarlet', 'Mr. Green', 'Mrs. Peacock', 'Mrs. White'],
    weapons: ['Knife','Revolver','Wrench','Candlestick','Lead Piping','Rope'],
    rooms: ['Kitchen','Ballroom','Conservatory','Dining Room','Lounge','Hall','Study','Billiard Room', 'Library'],
};


const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {...state, playerName: action.payload};
        case ADD_PLAYER:
            return {...state, players: [...state.players, action.payload]};
        default:
            return state;
    }
};

export default rootReducer;