import React from 'react';
import Info from './home/Info';
import About from './home/About';
import Projects from './home/Projects';
import Future from './home/Future';
import Resume from './home/Resume';
import Closing from './home/Closing';
import Header from './home/Header';

export default function Home() {

    return (
        <div className='flex flex-col gap-4 m-4'>
            <Header />
            <Info />
            {/* Info complete */}
            <About />
            {/* About complete */}
            <Projects /> 
            {/* Projects complete */}
            <Future />
            <Resume />
            <Closing />
        </div>
    );
}