import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// actions
import { fetchPost, deletePost } from '../actions/index.js';

class PostsShow extends React.Component {
    constructor(props, context) {
        super(props);
        context.router;
    }
    
    componentWillMount() {
        this.props.dispatch(fetchPost(this.props.params.id));
    }
    
    _onDeleteClick() {
        this.props.dispatch(deletePost(this.props.params.id))
            .then(() => {
                // blog post has been deleted navigate to index
                this.context.router.push('/');
            });
    }
    
    render() {
        let { post } = this.props;
        if (!post) {
            return <div>Loading...</div>;
        }
        
        return (
            <div>
                <Link to="/">Back to homepage</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this._onDeleteClick.bind(this)}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

PostsShow.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default connect((state) => {
    return {
        post: state.posts.post
    };
})(PostsShow);