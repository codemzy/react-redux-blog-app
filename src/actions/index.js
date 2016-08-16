import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=myfakekey123';

export function fetchPosts() {
    let request = axios.get(`${ROOT_URL}/posts${KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}