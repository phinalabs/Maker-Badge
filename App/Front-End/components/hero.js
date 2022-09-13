import React from 'react';


export default function Hero({title, description}) {
    return (
        <div className="bg-white dark:bg-black overflow-hidden content-center flex items-center h-5/6">
            <div className='container mx-auto px-4 py-16 md:py-20 '>
                <div className='gap-2 md:gap-0 md:grid lg:grid md:grid-cols-12'>
                    <div className="col-span-6">
                        <div className="bg-white dark:bg-black">
                            <div className="mx-auto max-w-7xl px-4 dark:text-white">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-5xl tracking-tight font-extrabold md:text-6xl">
                                        <span className="block xl:inline">{title}</span>
                                    </h1>
                                    <div className='mt-4 md:text-2xl '>
                                        <span>Make </span>
                                        <span>Code </span>
                                        <span>Hack</span>
                                    </div>
                                    <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">

                    </div>
                </div>
            </div>
        </div>
    )
}

