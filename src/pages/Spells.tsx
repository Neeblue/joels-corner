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
    const [data, setData] = useState<[] | null>(null);
    const [selectedSpellType, setSelectedSpellType] = useState<string>('');

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
            <div style={{ marginBottom: "1rem" }}>
                {spellTypes.map(spellType => (
                    <button style={{ marginRight: "0.5rem" }} key={spellType} onClick={() => handleSpellTypeClick(spellType)}>
                        {spellType}
                    </button>
                ))}
            </div>
            <div>
                {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
                {data && data.map((spell: any) => (
                    <div key={spell.id} style={{ margin: "1rem" }}>
                        <h3 style={(spell.light !== "Transparent" ? { color: spell.light } : {})}>{spell.name}</h3>
                        <div>Effect: {spell.effect}</div>
                        {spell.incantation && <div>Incantation: {spell.incantation}</div>}
                        {spell.light !== "None" && <div>Wand light colour: {spell.light}</div>}
                    </div>
                ))}
            </div>
            <br /><br />
        </div>
    );
}

