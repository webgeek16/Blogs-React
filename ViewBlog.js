import React, { useState, useEffect} from 'react';

const ViewBlog = ({blog, setBlogs, blogs}) => {
    useEffect(() => {
        console.log("inside View blogs")
      console.log(blog);
    },[blog])
    return(<>
            <div key={blog.id}>
                <p className="blog-title" >{blog.title}</p>
                <p className="blog-text">{blog.text}</p>
                   
            </div>
        </>
    ) 
};

export default ViewBlog