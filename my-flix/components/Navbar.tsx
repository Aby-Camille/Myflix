import NavbarItem from "./NavbarItem";
import { FaChevronDown } from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav className="w-full sticky z-20">
            <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90">
                <img className="h-4 lg:h-14" src="/images/logo.png" alt="netflix logo"/>
                <div className="flex-row nl-8 gap-7 hidden lg:flex">
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
            </div>
        </nav>
    )
}