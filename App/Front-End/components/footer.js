import React from 'react';
import SocialIcons from './Social';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black overflow-hidden content-center flex items-center">
            <div className='container mx-auto p-4'>
                <div className="col-span-6">
                    <div className="bg-white dark:bg-black">
                        <div className="mx-auto max-w-7xl px-4 ">
                            <div className="text-center">
                                <div className="mt-3 text-base dark:text-white">
                                    Maker Badge
                                    <span className='ml-3'>{(new Date().getFullYear())}</span>
                                    <div className='flex justify-center mt-5 gap-2'>
                                        <SocialIcons className="text-center" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

