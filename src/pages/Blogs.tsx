import BlogCard from "@/components/BlogCard";
import jsonData from '@/blog.json';
import { useEffect, useState } from "react";


type Section = {
    header: string;
    content: string;
    pictureUrl: string;
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
                {/* <h1 className='header text-3xl font-bold text-primary'>Blogs</h1> */}
                {/* <div className='sub-header text-primary mb-8 mx-2'>(Click on a blog title or image to read about that topic)</div> */}
                <div className="projects justify-center flex flex-row flex-wrap items-center gap-8 my-8">
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