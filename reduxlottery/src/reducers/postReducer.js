import { FETCH_POSTS } from '../actions/types';

const initialState = {
    items: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
        console.log('reducer');
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
};

export default postReducer;