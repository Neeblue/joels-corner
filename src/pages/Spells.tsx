import React, { useEffect, useState } from 'react';

const spellTypes: string[] = [
    "None", "Charm", "Conjuration", "Spell", "Transfiguration", "Healing Spell",
    "Dark Charm", "Jinx", "Curse", "Magical Transportation", "Hex", "Counter Spell",
    "Dark Arts", "Counter Jinx", "Counter Charm", "Untransfiguration",
    "Binding Magical Contract", "Vanishment"
];

const api = async (spellType: string) => {
    // Remove any spaces found in the spell type
    const formattedSpellType = spellType.replace(/\s/g, '');

    const url = `https://wizard-world-api.herokuapp.com/Spells?Type=${formattedSpellType}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default function Spells() {
    const [data, setData] = useState(null);
    const [selectedSpellType, setSelectedSpellType] = useState('');

    useEffect(() => {
        if (selectedSpellType) {
            api(selectedSpellType)
                .then(data => setData(data))
                .catch(error => console.error(error));
        }
    }, [selectedSpellType]);

    const handleSpellTypeClick = (spellType: string) => {
        setSelectedSpellType(spellType);
    }

    return (
        <div>
            <div>
                {spellTypes.map(spellType => (
                    <button style={{ marginRight: "0.5rem" }} key={spellType} onClick={() => handleSpellTypeClick(spellType)}>
                        {spellType}
                    </button>
                ))}
            </div>
            <div>
                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
        </div>
    );
}

