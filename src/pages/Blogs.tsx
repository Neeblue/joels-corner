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
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        setBlogs(jsonData.filter(blog => blog.hidden === false));
    }, []);

    // https://www.adhamdannaway.com/blog Blog example that looks nice.
    return (
        <>
            <div className='blogs-page text-center'>
                <h1 className='header text-3xl font-bold text-secondary'>Joel's Blog</h1>
                <div className='sub-header text-primary mb-8 mx-2'>(Take a gander at some DIY projects and blog posts)</div>
                <div className="blogs flex flex-wrap flex-col sm:flex-row justify-center gap-8 mb-12">
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