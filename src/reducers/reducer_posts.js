
import {FETCH_POSTS} from '../actions/index.js';

const INITIAL_STATE = { all: [], post: false };

export default function(state = INITIAL_STATE, action) {
    if (action.type === FETCH_POSTS) {
        return { ...state, all: action.payload.data };
    }
    return state;
}