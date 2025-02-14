'use client'

import React, { useState } from "react"
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";

import NavLinks from "./NavLinks";

const Nav = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <div>
            <button className="absolute left-6 top-6 mobile" onClick={() => setIsMobileNavOpen(true)}>
                <CiMenuBurger size={20} />
            </button>
            {/* mobile nav */}
            <div
                onClick={() => setIsMobileNavOpen(false)}
                className={`${isMobileNavOpen ? '' : '-translate-x-full'} fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-full dark:bg-gray-800`}
            >
                <div className="flex justify-end">
                    <span className="sr-only">Close menu</span>
                    <button onClick={() => setIsMobileNavOpen(false)}>
                        <VscChromeClose size={16} />
                    </button>
                </div>
                <NavLinks />
            </div>

        </div>

    )
}

export default Nav


