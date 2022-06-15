import React from 'react'
import SocialIcons from '../socials'

export default function Hero() {
    return (
        <div className="bg-white overflow-hidden ">
            <div className='container mx-auto px-4 py-16 md:py-20'>
                <div className='gap-2 md:gap-0 md:grid lg:grid md:grid-cols-12'>
                <div className="col-span-7">
                    <div className=" z-10 pb-8 bg-white sm:pb-16 md:pb-20 xl:pb-32">
                        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Maker </span>
                                    <span className="block text-indigo-600 xl:inline">Badge</span>
                                </h1>
                                <span className='text-2xl'>Make </span> 
                                <span className='text-2xl'>Code </span> 
                                <span className='text-2xl'>Hack</span>
                                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Coming soon</p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Get started </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Live demo </a>
                                    </div>
                                </div>
                                <SocialIcons></SocialIcons>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="col-span-5">
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

