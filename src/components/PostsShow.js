import React from 'react';
import { connect } from 'react-redux';

// actions
import { fetchPost } from '../actions/index.js';

class PostsShow extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchPost(this.props.params.id));
    }
    
    render() {
        let { post } = this.props;
        if (!post) {
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        post: state.posts.post
    };
})(PostsShow);