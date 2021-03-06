import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

// actions
import { createPost } from '../actions/index.js';


class PostsNew extends React.Component {
    constructor(props, context) {
        super(props);
        context.router;
    }
    
    _onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // blog post has been created navigate to index
                this.context.router.push('/');
            });
    }
    
    render() {
        const { handleSubmit, fields: {title, categories, content} } = this.props;
        return (
            <form onSubmit={handleSubmit(this._onSubmit.bind(this))}>
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
                <Link to='/' className="btn btn-danger">Cancel</Link>
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

PostsNew.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost: createPost})(PostsNew);