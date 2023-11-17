import React, { useEffect, useState } from 'react';

const spellTypes: string[] = [
    "None", "Charm", "Conjuration", "Spell", "Transfiguration", "HealingSpell",
    "DarkCharm", "Jinx", "Curse", "MagicalTransportation", "Hex", "CounterSpell",
    "Dark Arts", "CounterJinx", "Counter Charm", "Untransfiguration",
    "BindingMagicalContract", "Vanishment"
];

const api = async (spellType: string) => {
    if (!spellTypes.includes(spellType)) {
        throw new Error('Invalid spell type');
    }

    const url = `https://wizard-world-api.herokuapp.com/Spells?Type=${spellType}`;
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
                    <button key={spellType} onClick={() => handleSpellTypeClick(spellType)}>
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

