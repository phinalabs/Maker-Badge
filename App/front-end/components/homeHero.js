import React from 'react';
import Social from './Social';

export default function HomeHero() {
    return (
        <div className="flex items-center content-center overflow-hidden bg-white dark:bg-black h-5/6">
            <div className='container px-4 py-16 mx-auto md:py-20 '>
                <div className='gap-2 md:gap-0 md:grid lg:grid md:grid-cols-12'>
                    <div className="col-span-6">
                        <div className="bg-white dark:bg-black">
                            <div className="px-4 mx-auto max-w-7xl dark:text-white">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
                                        <span className="block xl:inline">Maker </span>
                                        <span className="block text-indigo-600 xl:inline">Badge</span>
                                    </h1>
                                    <div className='mt-4 md:text-2xl '>
                                        <span>Make </span>
                                        <span>Code </span>
                                        <span>Hack</span>
                                    </div>
                                    <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Coming soon</p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a href="#" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Docs </a>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <a href="/about" className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> About</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-5">
                                        Follow the project: <Social></Social>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <img
                            src="/images/pcb_blue_white_bg.png"
                            alt=""
                            layout="fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}

