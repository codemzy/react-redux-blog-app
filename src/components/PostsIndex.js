import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// actions
import { fetchPosts } from '../actions/index.js';


class PostsIndex extends React.Component {
    
    componentWillMount() {
        this.props.dispatch(fetchPosts());
    }
    
    _renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={"posts/" + post.id}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                 {this._renderPosts()}
                </ul>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        posts: state.posts.all
    };
})(PostsIndex);