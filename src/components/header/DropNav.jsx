'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react"

const links = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Pruebas",
        href: "/pruebas"
    },
    {
        title: "Mas",
        href: "/mas"
    }
]

const DropNav = () => {
    const [isDrop, setIsDrop] = useState(false);

    const handleDrop = () => {
        setIsDrop(!isDrop);
    }

    const removeDrop = () => {
        setIsDrop(false)
    }

    return (
        <div className="block lg:hidden fixed w-full z-50 ">
            <div onClick={handleDrop} className="bg-pink-300  w-[50px] h-[50px] flex justify-center items-center ">
                <div className="z-50 bg-pink-300 w-fit h-fit">
                    <h1 className="text-white  text-[2rem]">X</h1>
                </div>
            </div>
            {isDrop && (
                <div className={`z-30 absolute transition-all inset-0 duration-700 ${isDrop ? "h-screen bg-green-300" : "h-0 bg-orange-300"} `}>
                    <div className="flex flex-col justify-normal items-center">
                        {links.map((link) => (
                            <li onClick={removeDrop} key={link.title} className="flex">
                                <Link  className="text-[6rem]" href={link.href} >{link.title} </Link>
                            </li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropNav