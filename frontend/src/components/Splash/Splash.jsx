/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../logo.png";

const navigation = [
]

export default function Splash() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="isolate bg-white dark:bg-slate-900">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#990000" />
                            <stop offset={1} stopColor="#FFC72C" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="px-6 pt-6 lg:px-8">
                <div>
                    <nav className="flex h-9 items-center justify-between" aria-label="Global">
                        <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-16" src={ logo } alt="" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:text-gray-900">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                            <a
                                href="/Auth"
                                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 dark:ring-slate-300 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-white"
                            >
                                Log in
                            </a>
                        </div>
                    </nav>
                    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                            <div className="flex h-9 items-center justify-between">
                                <div className="flex">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <span className="sr-only">Your Company</span>
                                        <img
                                            className="h-8"
                                            src={ logo }
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="flex">
                                    <button
                                        type="button"
                                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="/Auth"
                                            className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10 dark:text-white"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </div>
            </div>
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div>
                                <h1 className="dark:text-white text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    Home is where the food's at
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    Find all of USC's exquisite tastes from across the world.
                                </p>
                                <div className="mt-8 flex gap-x-4 sm:justify-center">
                                    <a
                                        href="/Auth"
                                        className="inline-block rounded-lg bg-red-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-red-800 hover:bg-amber-500 hover:ring-amber-500 transition"
                                    >
                                        Get started
                                        <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                                    </a>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                                <svg
                                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                    viewBox="0 0 1155 678"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                        fillOpacity=".3"
                                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                            x1="1155.49"
                                            x2="-78.208"
                                            y1=".177"
                                            y2="474.645"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#990000" />
                                            <stop offset={1} stopColor="#FFC72C" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
