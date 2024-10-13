import { Link } from "react-router-dom";
import Tag from "./Tag";

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
    return (
        <>
            <div className='project w-[21rem] max-w-[90vw] text-primary flex flex-col gap-1'>
                <Link to={`/blogs/${blog.keyword}`}>
                    <img className='project-image rounded-2xl mb-2' src={blog.cover} alt={blog.title} />
                    <h2 className='title font-bold'>
                        {blog.title}
                    </h2>
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