import React, { useCallback, useState } from 'react';
import NotesCard from '@components/NotesCard';

interface Note {
    id: string;
    title: string;
    description: string;
    label: string;
}

export default function Notes() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [selectedLabel, setSelectedLabel] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleButtonPress = useCallback(() => {
        setIsLoading(true);
        setError(null);
        console.log('Fetching notes...');
        
        fetch(`https://post-message-neeblue.azurewebsites.net/api/notes?code=${import.meta.env.VITE_APP_AZURE_FUNCTION_API}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch notes');
                }
                return response.json();
            })
            .then(data => {
                setNotes(data);
                setIsLoading(false);
                console.log('Notes fetched.');
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false);
                setError('Failed to fetch notes. Please try again.');
            });
    }, []);

    const handleLabelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLabel(event.target.value);
    };

    const filteredNotes = selectedLabel ? notes.filter(note => note.label === selectedLabel) : notes;

    return (
        <div>
            <h1 className='text-center text-primary'>Notes to myself</h1>
            <div className='text-center text-primary mb-8'>
                These notes are pulled from an Azure database using an Azure Function endpoint. 
                The free tier of Azure Functions has a long cold start, so results may take a while to display.
            </div>

            {!isLoading && !notes.length && (
                <div className='text-center mb-4'>
                    <button className='btn btn-primary' onClick={handleButtonPress}>Fetch notes</button>
                </div>
            )}

            {error && <div className='text-center text-red-600'>{error}</div>}

            <div className='flex flex-wrap gap-4 justify-center mb-4'>
                <label>
                    <input 
                        type="radio" 
                        aria-label="All" 
                        className="btn" 
                        value='' 
                        checked={selectedLabel === ''} 
                        onChange={handleLabelChange} 
                    />
                    All
                </label>
                <label>
                    <input 
                        type="radio" 
                        aria-label="Todos" 
                        className="btn" 
                        value='Todo' 
                        checked={selectedLabel === 'Todo'} 
                        onChange={handleLabelChange} 
                    />
                    Todos
                </label>
                <label>
                    <input 
                        type="radio" 
                        aria-label="Questions" 
                        className="btn" 
                        value='Question' 
                        checked={selectedLabel === 'Question'} 
                        onChange={handleLabelChange} 
                    />
                    Questions
                </label>
                <label>
                    <input 
                        type="radio" 
                        aria-label="Issues" 
                        className="btn" 
                        value='Issue' 
                        checked={selectedLabel === 'Issue'} 
                        onChange={handleLabelChange} 
                    />
                    Issues
                </label>
                <label>
                    <input 
                        type="radio" 
                        aria-label="Texts" 
                        className="btn" 
                        value='Text' 
                        checked={selectedLabel === 'Text'} 
                        onChange={handleLabelChange} 
                    />
                    Texts
                </label>
            </div>
            <div className='flex flex-wrap gap-4 justify-center mb-8'>
                {isLoading ? (
                    <span className="loading loading-spinner text-primary size-9"></span>
                ) : (
                    filteredNotes.map((note) => (
                        <div key={note.id}>
                            <NotesCard title={note.title} description={note.description} label={note.label} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}