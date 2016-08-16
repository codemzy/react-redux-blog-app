import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

// actions
import { createPost } from '../actions/index.js';


class PostsNew extends React.Component {
    
    render() {
        const { handleSubmit, fields: {title, categories, content} } = this.props;
        return (
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a new post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">{title.touched ? title.error : '' }</div>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control"{...content} />
                </div>
                <button type="submit" className="btn btn-primary">Add Post</button>
            </form>
        );
    }
}

function validate(values) {
    const ERRORS = {};
    if (!values.title) {
        ERRORS.title = 'Enter a blog title';
    }
    return ERRORS;
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost: createPost})(PostsNew);