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
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help form-control-label">{title.touched ? title.error : '' }</div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help form-control-label">{categories.touched ? categories.error : '' }</div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control"{...content} />
                    <div className="text-help form-control-label">{content.touched ? content.error : '' }</div>
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
    if (!values.categories) {
        ERRORS.categories = 'Enter a categories';
    }
    if (!values.content) {
        ERRORS.content = 'Enter some content';
    }
    return ERRORS;
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost: createPost})(PostsNew);