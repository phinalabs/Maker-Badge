import React from 'react';
import Layout from '../components/layout';
import Hero from "/components/hero"
import DarkModeButtons from '../components/darkModeButton';


function HomePage() {

    return (
            <div className='dark:bg-black bg-white h-screen'>
                <Hero></Hero>
                <DarkModeButtons />
            </div>
    )
}

export default HomePage
