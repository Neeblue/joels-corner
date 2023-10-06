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
        <div className='container'>
            <div className='intro'>Click on a heading to find out more about me!</div>
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
                            </div>
                        }
                        open={activeSection === section}
                        >
                        {items.map((item, index) => (
                            <div className='item' key={index}>
                                <Collapsible
                                    trigger={
                                        <div
                                            className='header'
                                            onClick={() => toggleItem(item)}
                                        >
                                            {item.header}
                                        </div>
                                    }
                                    open={activeItem === item}
                                    >
                                    <div className="description" dangerouslySetInnerHTML={{__html: item.description}}></div>
                                </Collapsible>
                            </div>
                        ))}
                    </Collapsible>
                    <hr />
                </div>
            ))}
            {/* <br /> */}
        </div>
    );
}