import React from 'react';

class PostsShow extends React.Component {
    render() {
        return (
            <div>Show post {this.props.params.id}</div>
        );
    }
}

export default PostsShow;