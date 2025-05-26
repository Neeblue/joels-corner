import jsonData from '@/blog.json';
import { useParams } from "react-router-dom";
import { useState } from 'react';

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
    const [imgLoaded, setImgLoaded] = useState<{ [key: number]: boolean }>({});

    return (
        <div className="sections text-primary p-2 mb-4 sm:max-w-screen-md mx-auto flex flex-col gap-6">
            {blog && blog.sections.map((section, index) => (
                <div key={index} className="content">
                    {section.pictureUrl && (
                        <div className="relative w-full flex items-center justify-center">
                            {!imgLoaded[index] && (
                                <div className="absolute inset-0 flex items-center justify-center bg-neutral animate-pulse rounded-lg" style={{ width: '100%', height: '100%', minHeight: 200 }} />
                            )}
                            <img
                                className={`transition-opacity duration-300 ${imgLoaded[index] ? 'opacity-100' : 'opacity-0'} px-1 sm:px-12`}
                                src={section.pictureUrl}
                                alt={`${blog.title} image`}
                                loading="lazy"
                                onLoad={() => setImgLoaded(l => ({ ...l, [index]: true }))}
                                style={{ minHeight: 200 }}
                            />
                        </div>
                    )}
                    <p className='text-center mb-4 text-secondary'>{section.pictureCaption}</p>
                    <p>{section.content}</p>
                </div>
            ))}
        </div>
    )
}
