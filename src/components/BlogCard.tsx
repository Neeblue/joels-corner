import Tag from "./Tag";

type Section = {
    header: string;
    content: string;
    pictureUrl: string;
};

type Blog = {
    title: string;
    sections: Section[];
    keyword: string;
    cover: string;
    hidden: boolean;
    tags: string[];
};

export default function BlogCard({ blog }: { blog: Blog }) {
    return (
        <>
            <div className="header text-primary">{blog.title}</div>
            {blog.tags.map((tag: string) => (
                tag && <Tag key={tag} name={tag} />
            )
            )}
        </>
    )
}