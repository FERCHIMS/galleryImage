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

]

const Header = () => {
    const pathNname = usePathname()
    return (
        <div className="w-full h-16 bg-[#20201E] flex border-b border-[#3c3c3c] justify-center items-center gap-3">
            {links.map((link) => (
                <div key={link.title}>
                    <li>
                        <Link className={`transition-all duration-700 text-[#525151] font-regular ${pathNname === link.href ? "font-bold" : ""} `} href={link.href} >{link.title} </Link>
                    </li>
                </div>
            ))}
        </div>
    )
}

export default Header