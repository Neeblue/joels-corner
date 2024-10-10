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