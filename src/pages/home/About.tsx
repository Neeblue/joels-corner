import React from 'react';
import { useEffect, useState } from 'react';
import Collapsible from "react-collapsible";
import jsonData from '../../about.json';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useContext } from 'react';

interface AboutItem {
    header: string;
    subheader?: string;
    description: string;
    hidden?: boolean;
  }
  
  interface AboutSection {
    [key: string]: AboutItem[];
  }

export default function About() {
    const theme = useContext(ThemeContext);

    //Set active section and item for collapsibles
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [activeItem, setActiveItem] = useState<AboutItem | null>(null);
    
    //Get about data from json file
    const [about, setAbout] = useState<AboutSection>({});
    useEffect(() => {
        setAbout(jsonData);
    }, []);

    const toggleSection = (section: string) => {
        if (activeSection === section) {
            setActiveSection(null);
        } else {
            setActiveSection(section);
        }
    };

    const toggleItem = (item: AboutItem) => {
        if (activeItem === item) {
            setActiveItem(null);
        } else {
            setActiveItem(item);
        }
    };

    return (
        <div className='text-center mx-auto font-bol max-w-[90vw] sm:max-w-[50vw]'>
            {Object.entries(about).map(([section, items]) => (
                <div key={section}>
                    <Collapsible
                        key={section}
                        trigger={
                            <div
                                className={`text-4xl font-bold ${theme.theme}`}
                                onClick={() => toggleSection(section)}
                            >
                                {section}
                                <div className={`text-[0.75rem] ${theme.theme}`}>
                                    {activeSection === section ? "(click to contract)" : "(click to expand)"}
                                </div>
                            </div>
                        }
                        open={activeSection === section}
                        >
                        {items.map((item, index) => (
                            !item.hidden &&
                            <div className={`text-left ${theme.theme}`} key={index}>
                                <Collapsible
                                    trigger={
                                        <div
                                            className={`text-2xl font-bold ${theme.theme}`}
                                            onClick={() => toggleItem(item)}
                                        >
                                            {item.header}
                                            {
                                                item.header !== "" &&
                                                <div className={`mb-2 text-[0.75rem] ${theme.theme}`}>
                                                    {activeItem === item ? "(click to contract)" : "(click to expand)"}
                                                </div>
                                            }
                                        </div>
                                    }
                                    open={activeItem === item}
                                    >
                                    <div className={`font-bold mb-1 ${theme.theme}`}>{item.subheader}</div>
                                    <div className={`ml-4 mb-4 ${theme.theme}`} dangerouslySetInnerHTML={{__html: item.description}}></div>
                                </Collapsible>
                            </div>
                        ))}
                    </Collapsible>
                    {
                        section !== Object.keys(about)[Object.keys(about).length - 1] ? <hr /> : null
                    }
                </div>
            ))}
            {/* <br /> */}
        </div>
    );
}