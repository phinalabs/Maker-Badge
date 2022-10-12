import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    ShieldCheckIcon,
    XIcon,
} from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
    {
        name: 'About',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '/about',
        icon: ChartBarIcon,
    },
    {
        name: 'Docs',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '/docs',
        icon: CursorClickIcon,
    },
    { name: 'Events', description: "Your customers' data will be safe and secure.", href: '/events', icon: ShieldCheckIcon },

]

const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    return (
        <Popover className="relative bg-white dark:bg-black sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/">
                            <span className="sr-only">MakerBadge</span>
                            <Image
                            src="/images/phinalab.png"
                            alt="logo"
                            className="h-8 w-auto sm:h-10"
                            width={120}
                            height={40}
                             />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:text-indigo-600 "
                            >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                <span className="ml-3 text-base font-medium dark:text-white dark:hover:text-indigo-600">{item.name}</span>
                            </a>
                        ))}
                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a
                            href="/scanbadge"
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Scan Badge
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-black divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link href="/">
                                        <image 
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                        alt="Maker Badge"
                                        />
                                    </Link>

                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {menuItems.map((item) => (
                                        <link href={item.href} key={item.name}>
                                            <a
                                                href={item.href}
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                            >
                                                <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium dark:text-white">{item.name}</span>
                                            </a>
                                        </link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}