import React, { useState, useEffect} from 'react';

const Blog = ({blogs, handleBlogClick}) => {
    useEffect(() => {
        console.log("inside blogs component")
        console.log(blogs.length)
    },[blogs])
    return(<>
    
        {blogs && blogs.map((blog) => {
            return(
                <article className="blog-content" key={blog.id}>
                    <a className="blog-title" onClick={() => handleBlogClick(blog)}>{blog.title}</a>
                </article>
            )
        })}
        </>
    ) 
};

export default Blog