import React from 'react';
import { connect } from 'react-redux';

// actions
import { fetchPosts } from '../actions/index.js';


class PostsIndex extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(fetchPosts());
    }
    
    render() {
        return (
            <div>List of blog posts</div>
        );
    }
}

export default connect()(PostsIndex);