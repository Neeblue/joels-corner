import React from "react";

export default function Spell({ spell }: { spell: any }) {
    return (
        <div>
            <div key={spell.id} className="m-4 p-2 color-black items-start align-middle inline-block" style={{
                // display: "inline-block",
                // verticalAlign: "middle",
                backgroundImage: "url(/images/spells/parchment.webp)",
                backgroundSize: "100% 100%",
                boxShadow: `0 0 10px ${spell.light}, 0 0 20px ${spell.light}, 0 0 30px ${spell.light}, 0 0 40px ${spell.light}`
            }}>
                <div className="m-auto mb-2 text-center " style={{ padding: "0.5rem", maxWidth: "25rem" }}>
                    <h3 style={{
                        // textAlign: "center",
                        fontSize: "1.5rem",
                    }}>
                        {spell.name}
                    </h3>
                    <div style={{ fontSize: "1.2rem" }}>Effect: {spell.effect}</div>
                    {spell.incantation && <div style={{ fontSize: "1.2rem" }}>Incantation: {spell.incantation}</div>}
                    {spell.light !== "None" && <div style={{ fontSize: "1.2rem" }}>Wand light colour: {spell.light}</div>}
                </div>
            </div>
        </div>
    )
}