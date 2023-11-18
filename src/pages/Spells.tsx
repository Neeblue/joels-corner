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
            <div style={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
            }}>
                {spellTypes.map(spellType => (
                    <button style={{
                        marginRight: "0.5rem",
                        font: "bold",
                        fontSize: "1.25rem",
                        backgroundColor: "black",
                        color: "white",
                        padding: "0.5rem",
                    }} key={spellType} onClick={() => handleSpellTypeClick(spellType)}>
                        {spellType}
                    </button>
                ))}
            </div>
            <div style={{
                // justifyContent: "space-between", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem"
            }}>
                {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
                {data && data.map((spell: any) => (
                    <div key={spell.id} style={{
                        display: "inline-block",
                        backgroundImage: "url(/images/spells/parchment.webp)",
                        backgroundSize: "100% 100%",
                        verticalAlign: "middle",
                        margin: "1rem",
                        padding: "0.5rem",
                        color: "black",
                        alignItems: "flex-start",
                        boxShadow: `0 0 10px ${spell.light}, 0 0 20px ${spell.light}, 0 0 30px ${spell.light}, 0 0 40px ${spell.light}`
                    }}>
                        <div style={{ padding: "0.5rem", maxWidth: "25rem" }}>
                            <h3 style={{
                                margin: "auto",
                                marginBottom: "0.5rem",
                                textAlign: "center",
                                fontSize: "1.5rem",
                            }}>
                                {spell.name}
                            </h3>
                            <div style={{ fontSize: "1.2rem" }}>Effect: {spell.effect}</div>
                            {spell.incantation && <div style={{ fontSize: "1.2rem" }}>Incantation: {spell.incantation}</div>}
                            {spell.light !== "None" && <div style={{ fontSize: "1.2rem" }}>Wand light colour: {spell.light}</div>}
                        </div>
                    </div>
                ))}
            </div>
            <br /><br />
        </div>
    );
}

