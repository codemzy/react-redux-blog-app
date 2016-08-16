import React from 'react';
import { connect } from 'react-redux';

// actions
import { fetchPost } from '../actions/index.js';

class PostsShow extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchPost(this.props.params.id));
    }
    
    render() {
        return (
            <div>Show post {this.props.params.id}</div>
        );
    }
}

export default connect()(PostsShow);