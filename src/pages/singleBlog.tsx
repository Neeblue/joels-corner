import jsonData from '@/blog.json';
import { useParams } from "react-router-dom";

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

export default function SingleBlog() {
    const { keyword } = useParams<{ keyword: string }>();
    const blog: Blog | undefined = jsonData.find((blog) => blog.keyword === keyword);

    return (
        <div className="sections text-primary p-4 mb-4 sm:max-w-screen-md mx-auto">
            {blog && blog.sections.map((section, index) => (
                <div key={index} className="content">
                    <img className='px-12 my-4' src={section.pictureUrl}></img>
                    <p>{section.content}</p>
                </div>
            ))}
        </div>
    )
}