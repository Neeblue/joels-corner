import React from 'react';

export default function Tag(props: { name: string }) {
    const style = {
        backgroundColor: 'dimgrey',
        color: 'white',
        padding: '0.2rem 0.4rem',
        borderRadius: '15px',
        display: 'inline-block',
        margin: '0.3rem',
        fontSize: '0.7em',
    };

    const theme = "color-white py-[0.2rem] px-[0.4rem] m-[0.3] font-[0.7rem] ";
    const theme2 = "inline-block br-[15] bg-[dimgrey]"

    return (
        <div className="tag" style={style}>
            {props.name}
        </div>
    )
}