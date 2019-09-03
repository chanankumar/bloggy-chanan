import React from 'react';
import {connect} from 'react-redux';
import BlogListItem from './BlogListItem';
import selectBlogs from '../selectors/blogs'

export const BlogList = (props) => (
    <div className="list-header">
        {props.blogs.length === 0 ? (<p>No blogs</p>) : (props.blogs.map((blog) => {
            return <BlogListItem key={blog.id} {...blog} />
        }))}
    </div>
)

const mapStateToProps = (state) => ({
    blogs: selectBlogs(state.blogs,state.filters)
});

export default connect(mapStateToProps)(BlogList);