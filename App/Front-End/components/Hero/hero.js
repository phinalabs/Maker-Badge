import React from 'react'
import SocialIcons from '../socials'

export default function Hero() {
    return (
        <div className="bg-white dark:bg-black overflow-hidden content-center flex items-center h-5/6">
            <div className='container mx-auto px-4 py-16 md:py-20 '>
                <div className='gap-2 md:gap-0 md:grid lg:grid md:grid-cols-12'>
                    <div className="col-span-6">
                        <div className="bg-white dark:bg-black">
                            <div className="mx-auto max-w-7xl px-4 ">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-5xl tracking-tight font-extrabold dark:text-white  md:text-6xl">
                                        <span className="block xl:inline">Maker </span>
                                        <span className="block text-indigo-600 xl:inline">Badge</span>
                                    </h1>
                                    <div className='mt-4 md:text-2xl dark:text-white'>
                                        <span>Make </span>
                                        <span>Code </span>
                                        <span>Hack</span>
                                    </div>
                                    <p className="mt-3 text-base  dark:text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Coming soon</p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Docs </a>
                                        </div>
                                        <div className="mt-3 sm:mt-0 sm:ml-3">
                                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> About</a>
                                        </div>
                                    </div>
                                    Follow the project: <SocialIcons></SocialIcons>
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

