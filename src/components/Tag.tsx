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

    return (
        <div className="tag" style={style}>
            {props.name}
        </div>
    )
}