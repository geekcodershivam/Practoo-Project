import React from 'react';
import './Blogs.css';
import blogsData from '../../Data/blogsData';
import BlogsCard from './BlogsCard';

const Blogs = () => {
    const blogs = blogsData;
    return (
        <section className="blogs-area my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h6 className="text-primary">Our Blog</h6>
                    <h1>From Our Blog News</h1>
                </div>
                <div className="card-deck mt-5">
                    {blogs.map(blog => <BlogsCard blog={blog}></BlogsCard>)}
                </div>
            </div>
        </section>
    );
};

export default Blogs;