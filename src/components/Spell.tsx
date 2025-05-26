export default function Spell({ spell }: {
    spell: {
        light: string,
        name: string,
        effect: string,
        incantation: string,
        id: string
    }
}) {
    return (
        <div>
            <div key={spell.id} style={{
                display: "inline-block",
                backgroundImage: "url(/images/spells/parchment.jpg)",
                backgroundSize: "100% 100%",
                verticalAlign: "middle",
                margin: "1rem",
                padding: "0.5rem",
                color: "black",
                alignItems: "flex-start",
                boxShadow: `0 0 10px ${spell.light}, 0 0 20px ${spell.light}, 0 0 30px ${spell.light}, 0 0 40px ${spell.light}`
            }} aria-label={`Spell card for ${spell.name}`}>
                <div className="p-2 max-w-[25rem]">
                    <h2 className="m-auto mb-2 text-center text-6 text-black">
                        {spell.name}
                    </h2>
                    <div className="text-[1.2rem] text-black">Effect: {spell.effect}</div>
                    {spell.incantation && <div className="text-[1.2rem] text-black">Incantation: {spell.incantation}</div>}
                    {spell.light !== "None" && <div className="text-[1.2rem] text-black">Wand light colour: {spell.light}</div>}
                </div>
            </div>
        </div>
    )
}