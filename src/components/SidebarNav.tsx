'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react'
import {
  Bars3Icon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  FilmIcon,
  VideoCameraIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'About us', href: '/about', icon: UsersIcon, current: false },
  { name: 'Holograms', href: '#', icon: FilmIcon, current: false },
  { name: 'VFX', href: '#', icon: VideoCameraIcon, current: false },
  { name: 'Contact Us', href: '#', icon: EnvelopeIcon, current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex justify-end">
          <DialogPanel
            transition
            className="relative ml-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <TransitionChild>
              <div className="absolute right-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
              <div className="flex h-16 shrink-0 items-center">
                {/* <Image
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                /> */}
              </div>
              <nav className="flex flex-1 flex-col">
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                              )}
                            >
                              <item.icon aria-hidden="true" className="mr-4 flex-shrink-0 h-6 w-6 text-gray-400" />
                              {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="lg:pr-12">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-gray-200 bg-white px-4 sm:px-6 lg:px-8">
          <div className="flex-1"></div> {/* This div takes up the remaining space */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="p-2.5 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
      </div>
    </>
  )
}
