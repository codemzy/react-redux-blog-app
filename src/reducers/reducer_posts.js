
import {FETCH_POSTS, FETCH_POST} from '../actions/index.js';

const INITIAL_STATE = { all: [], post: false };

export default function(state = INITIAL_STATE, action) {
    if (action.type === FETCH_POSTS) {
        return { ...state, all: action.payload.data };
    }
    if (action.type === FETCH_POST) {
        return { ...state, post: action.payload.data };
    }
    return state;
}