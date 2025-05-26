import { useEffect, useState } from 'react';
import Spell from '@components/Spell';

export default function Spells() {
    const spellTypes: string[] = [
        "None", "Charm", "Conjuration", "Spell", "Transfiguration", "Healing Spell",
        "Dark Charm", "Jinx", "Curse", "Magical Transportation", "Hex", "Counter Spell",
        "Dark Arts", "Counter Jinx", "Counter Charm", "Untransfiguration",
        "Binding Magical Contract", "Vanishment"
    ];

    const [data, setData] = useState<[] | null>(null);
    const [selectedSpellType, setSelectedSpellType] = useState<string>('');
    const [isloading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (selectedSpellType) {
            setIsLoading(true);
            const formattedSpellType = selectedSpellType.replace(/\s/g, '');
            fetch(`https://wizard-world-api.herokuapp.com/Spells?Type=${formattedSpellType}`)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setIsLoading(false);
                })
                .catch(error => console.log(error));
        }
    }, [selectedSpellType]);

    const handleSpellTypeClick = (spellType: string) => {
        setSelectedSpellType(spellType);
    }

    return (
        <div className='mb-8'>
            <div className='flex flex-wrap justify-center items-center gap-2 mb-4' role="group" aria-label="Spell types">
                {spellTypes.map(spellType => (
                    <button
                        className='btn text-neutral bg-secondary'
                        key={spellType}
                        onClick={() => handleSpellTypeClick(spellType)}
                        aria-pressed={selectedSpellType === spellType}
                        tabIndex={0}
                    >
                        {spellType}
                    </button>
                ))}
            </div>
            <div className='flex justify-center'>
                {isloading ? (
                    <span className="loading loading-spinner text-primary size-9 flex justify-center" role="status" aria-live="polite" aria-label="Loading spells"></span>
                ) : (
                    <div className='flex flex-wrap justify-center items-center gap-4'>
                        {data && data.map((spell: any) => (
                            <Spell key={spell.name} spell={spell} />
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}