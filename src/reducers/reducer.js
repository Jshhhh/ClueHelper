import { ADD_NAME } from '../actions/actions';

const initialState = {
    value: 'ABC'
};

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {...state, value: action.payload};
        default:
            return state;
    }
};

export default rootReducer;