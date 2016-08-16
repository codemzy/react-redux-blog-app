import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// actions
import { fetchPosts } from '../actions/index.js';


class PostsIndex extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(fetchPosts());
    }
    
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                List of blog posts
            </div>
        );
    }
}

export default connect()(PostsIndex);