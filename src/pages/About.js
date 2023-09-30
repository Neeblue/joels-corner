import './About.css';
import jsonData from '../about.json';
import Collapsible from "react-collapsible";
import { useEffect, useState } from 'react';

export default function About() {
    const [about, setAbout] = useState([]);
    const [activeSection, setActiveSection] = useState(null);

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

    return (
        <div className='container'>
            {Object.entries(about).map(([section, items]) => (
                <div className='box' key={section}>
                    <Collapsible
                        key={section}
                        trigger={
                            <div
                                className='section'
                                onClick={() => toggleSection(section)}
                                style={{ cursor: 'pointer' }}
                            >
                                {section}
                            </div>
                        }
                        open={activeSection === section}
                    >
                        {items.map((item, index) => (
                            <div key={index}>
                                <h2 className='header'>{item.Header}</h2>
                                <h3 className='subheader'>{item.Subheader}</h3>
                                <div className='description'>{item.Description}</div>
                            </div>
                        ))}
                    </Collapsible>
                    <hr />
                </div>
            ))}
            <br />
        </div>
    );
}