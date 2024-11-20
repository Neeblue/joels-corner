import { useEffect, useState } from 'react';
import jsonData from '@/about.json';

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
  const [about] = useState<AboutSection>(jsonData);
  const [activeSection, setActiveSection] = useState<string | null>(Object.keys(jsonData)[0]);

  useEffect(() => {
    // Simulate a click event on the first item after the component has mounted
    setTimeout(() => {
      const firstItem = document.querySelector('.collapse-content .item input[type="radio"]');
      (firstItem as HTMLElement)?.click();
    }, 500);
  }, []);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className='about-container max-w-[95vw] md:max-w-[50vw] m-auto mt-8 mb-8'>
      <div className="join join-vertical w-full">
        {Object.entries(about).map(([section, items], index) => (
          <div className="collapse collapse-arrow join-item border border-base-300 text-primary" key={section}>
            <input
              type="radio"
              name={`my-accordion-${index}`}
              checked={activeSection === section}
              onChange={() => toggleSection(section)}
            />
            <div className="collapse-title text-xl font-medium">
              {section}
            </div>
            <div className={`collapse-content ${activeSection === section ? 'block' : 'hidden'}`}>
              {items.map((item, itemIndex) => (
                !item.hidden && (
                  <div className="item" key={itemIndex}>
                    <div className="collapse collapse-arrow border border-base-300 my-2">
                      <input type="radio" name={`sub-accordion-${index}`} />
                      <div className="collapse-title text-xl font-medium">
                        {item.header}
                      </div>
                      <div className="collapse-content">
                        <div className="subheader ml-2 text-primary">{item.subheader}</div>
                        <div className="description my-2 mx-8 text-primary" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
