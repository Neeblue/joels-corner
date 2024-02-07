import React, { useEffect, useState } from 'react';
import NotesCard from '../components/NotesCard';

interface Note {
    title: string;
    description: string;
    label: string;
}

export default function Notes() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [selectedLabel, setSelectedLabel] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    /// Real data
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://post-message-neeblue.azurewebsites.net/api/notes?code=${import.meta.env.VITE_APP_AZURE_FUNCTION_API}`)
            .then(response => response.json())
            .then(data => {
                setNotes(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, []);

    const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLabel(event.target.value);
    };

    const filteredNotes = selectedLabel ? notes.filter(note => note.label === selectedLabel) : notes;

    return (
        <div>
            <h1 className='text-center text-primary'>Notes to myself</h1>
            <div className='text-center text-primary mb-8'>These notes are pulled from an Azure database using an Azure Function endpoint. The free tier of Azure Functions has a long cold start, so results may take a while to display.</div>
            <div className='flex flex-wrap gap-4 justify-center mb-4'>
                <input type="radio" aria-label="All" className="btn" value='' checked={selectedLabel === ''} onChange={handleLabelChange} />
                <input type="radio" aria-label="Todos" className="btn" value='Todo' checked={selectedLabel === 'Todo'} onChange={handleLabelChange} />
                <input type="radio" aria-label="Questions" className="btn" value='Question' checked={selectedLabel === 'Question'} onChange={handleLabelChange} />
                <input type="radio" aria-label="Issues" className="btn" value='Issue' checked={selectedLabel === 'Issue'} onChange={handleLabelChange} />
                <input type="radio" aria-label="Texts" className="btn" value='Text' checked={selectedLabel === 'Text'} onChange={handleLabelChange} />
            </div>
            <div className='flex flex-wrap wrap gap-4 justify-center mb-8'>
                {isLoading ? (
                    <span className="loading loading-spinner text-primary size-9"></span>
                ) : (
                    filteredNotes.map((note, index) => (
                        <div key={index}>
                            <NotesCard title={note.title} description={note.description} label={note.label} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
