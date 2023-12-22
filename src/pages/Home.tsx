import React from 'react';
import Info from './home/Info';
import About from './home/About';
import Projects from './home/Projects';
import Future from './home/Future';
import Resume from './home/Resume';
import Closing from './home/Closing';
import Banner from './home/Banner';

export default function Home() {

    return (
        <div className='flex flex-col gap-4'>
            {[
                <Banner />,
                <Info />,
                <About />,
                <Projects />,
                <Future />,
                <Resume />,
                <Closing />
            ].map((component, index) => (
                <React.Fragment key={index}>
                    {component}
                    <hr className="w-[90vw] mx-auto border-black" />
                </React.Fragment>
            ))}
        </div>
    );
}