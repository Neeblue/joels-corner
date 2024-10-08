import { Link } from "react-router-dom";
import Tag from "./Tag";

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

export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <>
            <div className='project w-[21rem] max-w-[90vw] text-primary'>
                <h2 className='title font-bold'>
                    <Link to={`/projects/${blog.keyword}`}>{blog.title}</Link>
                </h2>
                {blog.tags.map((tag: string) => (
                    tag && <Tag key={tag} name={tag} />
                )
                )}
                <p className='description'>{blog.description}</p>
            </div>
        </>
    )
}