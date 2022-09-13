import React from 'react';
import HomeHero from "/components/HomeHero";
import DarkModeButtons from '../components/darkModeButton';


function HomePage() {

    return (
            <div className='dark:bg-black bg-white h-screen'>
                <HomeHero></HomeHero>
                <DarkModeButtons />
            </div>
    )
}

export default HomePage
