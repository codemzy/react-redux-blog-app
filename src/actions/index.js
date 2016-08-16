import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const KEY = '?key=myfakekey123';

export function fetchPosts() {
    let request = axios.get(`${ROOT_URL}/posts${KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(props) {
    let request = axios.post(`${ROOT_URL}/posts${KEY}`, props);
    return {
        type: CREATE_POST,
        payload: request
    };
}