'use client';

import { BsBell, BsSearch } from "react-icons/bs";
import NavbarItem from "./NavbarItem";
import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Navbar() {

    //scroll to change navbar color opacity
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }    
    }

    

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
    })

    return (
        <nav className="w-full sticky z-20">
            <div className={color ? "px-4 fixed w-full md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90" : "px-4 fixed w-full md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-40"}>
                <img className="h-4 lg:h-14" src="/images/logo.png" alt="netflix logo"/>
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by languages" />
                </div>
                <div className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <FaChevronDown />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                        <Link href="/login">Login</Link>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BsBell />
                    </div>
                </div>
            </div>
        </nav>
    )
}