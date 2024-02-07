import React from 'react';

interface NotesCardProps {
    title: string;
    description: string;
    label: string;
}

const NotesCard: React.FC<NotesCardProps> = ({ title, description, label }) => {
    return (
        <div className="card w-[90vw] sm:w-96 bg-base-100 shadow-xl border border-secondary">
            <div className="card-body">
                <h2 className="card-title text-primary">{title}</h2>
                <p className='text-secondary'>{description}</p>
                <div className="card-actions justify-end">
                    <div className="tag bg-secondary text-neutral py-[0.2rem] px-[0.4rem] rounded-full inline-block text-[0.7rem]">{label}</div>
                </div>
            </div>
        </div>
    );
};

export default NotesCard;
