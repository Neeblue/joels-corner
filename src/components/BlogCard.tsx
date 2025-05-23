import { Link } from "react-router-dom";
import Tag from "./Tag";
import { useState } from "react";

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

export default function BlogCard({ blog }: { blog: Blog }) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <>
            <div className='project w-[21rem] max-w-[90vw] text-primary flex flex-col gap-1'>
                <Link to={`/blogs/${blog.keyword}`}>
                    <h2 className='title font-bold text-secondary'>
                        {blog.title}
                    </h2>
                    <div className="relative w-full h-[200px] flex items-center justify-center">
                        {!imgLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center bg-neutral animate-pulse rounded-2xl" style={{ width: '100%', height: '100%' }} />
                        )}
                        <img
                            className={`project-image rounded-2xl mb-2 w-full h-[200px] object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                            src={blog.cover}
                            alt={blog.title}
                            loading="lazy"
                            onLoad={() => setImgLoaded(true)}
                        />
                    </div>
                </Link>
                <div className="tag">
                    {blog.tags.map((tag: string) => (
                        tag && <Tag key={tag} name={tag} />
                    ))}
                </div>
                <p className='description'>{blog.description}</p>
            </div >
        </>
    )
}
