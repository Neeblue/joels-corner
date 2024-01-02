import { useEffect, useState } from 'react';
import Spell from '../components/Spell';

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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem"
            }}>
                {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
                {data && data.map((spell: any) => (
                    <Spell key={spell.name} spell={spell} />
                ))}
            </div>
            <br /><br />
        </div>
    );
}

