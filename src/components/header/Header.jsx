'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

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
    },

]

const Header = () => {
    const pathNname = usePathname()
    return (
        <div className="hidden lg:block w-full    border-b border-[#3c3c3c] ">
            <div className="flex justify-center h-16 items-center gap-3 ">
                {links.map((link) => (
                    <div key={link.title}>
                        <li>
                            <Link className={`transition-all duration-700 text-[#525151] font-regular ${pathNname === link.href ? "font-bold" : ""} `} href={link.href} >{link.title} </Link>
                        </li>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Header