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
            <div>Click on a heading to find out more about me!</div>
            {Object.entries(about).map(([section, items]) => (
                <div className='box' key={section}>
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
                            <div key={index}>
                                <div className='header'>{item.Header}</div>
                                <div className='subheader'>{item.Subheader}</div>
                                <div className="description" dangerouslySetInnerHTML={{__html: item.Description}}></div>

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