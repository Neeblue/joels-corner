import BlogCard from "@/components/BlogCard";
import jsonData from '@/blog.json';
import { useEffect, useState } from "react";


type Section = {
    content: string;
    pictureUrl: string;
    pictureCaption: string;
};

type Blog = {
    title: string;
    description: string;
    sections: Section[];
    keyword: string;
    cover: string;
    hidden: boolean;
    tags: string[];
};

export default function Blog() {
    const blogs: Blog[] = jsonData.filter(blog => blog.hidden === false);

    return (
        <>
            <div className='blogs-page text-center'>
                <h1 className='header text-3xl font-bold text-secondary'>Joel's Blog</h1>
                <div className='sub-header text-primary mb-8 mx-2'>(Take a gander at some DIY projects and blog posts)</div>
                <div className="blogs flex flex-col flex-wrap justify-center items-center sm:items-start gap-8 mb-12 sm:flex-row">
                    {blogs.map((blog, index) => (
                        <div key={index}>
                            <BlogCard blog={blog} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
