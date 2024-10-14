import jsonData from '@/blog.json';
import { useParams } from "react-router-dom";

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

export default function SingleBlog() {
    const { keyword } = useParams<{ keyword: string }>();
    const blog: Blog | undefined = jsonData.find((blog) => blog.keyword === keyword);
    
    return (
        <div className="sections text-primary p-2 mb-4 sm:max-w-screen-md mx-auto flex flex-col gap-6">
            {blog && blog.sections.map((section, index) => (
                <div key={index} className="content">
                    {section.pictureUrl && (
                        <img className='px-1 sm:px-12' src={section.pictureUrl} alt={`${blog.title} image`}></img>
                    )}
                    <p className='text-center mb-4 text-secondary'>{section.pictureCaption}</p>
                    <p>{section.content}</p>
                </div>
            ))}
        </div>
    )
}
