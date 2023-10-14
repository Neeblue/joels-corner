import './About.css';
import jsonData from '../about.json';
import Collapsible from "react-collapsible";
import { useEffect, useState } from 'react';

export default function About() {
    //Set active section and item for collapsibles
    const [activeSection, setActiveSection] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    
    //Get about data from json file
    const [about, setAbout] = useState([]);
    useEffect(() => {
        setAbout(jsonData);
    }, []);

    const toggleSection = (section) => {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    };

    const toggleItem = (item) => {
        if (activeItem === item) {
            setActiveItem(null);
        } else {
            setActiveItem(item);
        }
    };

    return (
        <div className='about-container'>
            {Object.entries(about).map(([section, items]) => (
                <div key={section}>
                    <Collapsible
                        key={section}
                        trigger={
                            <div
                                className='section'
                                onClick={() => toggleSection(section)}
                            >
                                {section}
                                <div className='expand-text'>(click to expand)</div>
                            </div>
                        }
                        open={activeSection === section}
                        >
                        {items.map((item, index) => (
                            !item.hidden &&
                            <div className='item' key={index}>
                                <Collapsible
                                    trigger={
                                        <div
                                            className='header'
                                            onClick={() => toggleItem(item)}
                                        >
                                            {item.header}
                                            {
                                                item.header !== "" &&
                                                <div className='expand-text'>(click to expand)</div>
                                            }
                                        </div>
                                    }
                                    open={activeItem === item}
                                    >
                                    <div className="subheader">{item.subheader}</div>
                                    <div className="description" dangerouslySetInnerHTML={{__html: item.description}}></div>
                                </Collapsible>
                            </div>
                        ))}
                    </Collapsible>
                    {
                        section !== Object.keys(about)[Object.keys(about).length - 1] ? <hr /> : null
                    }
                </div>
            ))}
            <br />
        </div>
    );
}