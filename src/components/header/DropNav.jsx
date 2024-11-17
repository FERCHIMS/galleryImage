'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion";

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

const DropNav = () => {
    const [isDrop, setIsDrop] = useState(false);

    const handleDrop = () => {
        setIsDrop(!isDrop);
    }

    const removeDrop = () => {
        setIsDrop(false)
    }

    useEffect(() => {
        if (isDrop) {
            document.body.classList.add("overflow-hidden");
        }else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        }

    }, [isDrop])

    /* useEffect(() => {
        if (isDrop) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
    
       
        return () => {
          document.body.classList.remove('overflow-hidden');
        };
      }, [isDrop]);
 */
    return (
        <div className={`block lg:hidden fixed w-full h-screen z-50  overflow-hidden delay-300 ${isDrop ? "pointer-events-auto overflow-y-auto" : "pointer-events-none"} `} >
            <div onClick={handleDrop} className="bg-pink-300 pointer-events-auto  w-[50px] h-[50px] flex justify-center items-center ">
                <div className="z-50 bg-pink-300 w-[50px] h-[50px] flex justify-center items-center">
                    <h1 className="text-white  text-[2rem]">X</h1>
                </div>
            </div>

            <AnimatePresence>
                <div className={`z-30 absolute transition-transform h-screen inset-0 duration-[1000ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]  ${isDrop ? "translate-y-[-0%] pointer-events-auto" : "translate-y-[100%] pointer-events-none"} `}>
                    <div

                        className="flex flex-col justify-normal items-center min-h-screen h-fit bg-black">
                        {links.map((link) => (
                            <li onClick={removeDrop} key={link.title} className="flex">
                                <Link className="text-[3rem] text-white font-black delay-200 transition-all duration-[1200ms]" href={link.href} >
                                <motion.div
                                initial={ { opacity: 0 }}
                                animate={isDrop ? { opacity: 1 } : { opacity: 0 } }
                                exit={{ opacity: 0 }}
                                transition={{ duration: isDrop ? 0.8 : 0.3, ease: 'easeInOut'}}
                                /* className="w-full " */
                                >
                                    <div className="w-[500px] h-[500px] bg-orange-300">{link.title} </div>
                                </motion.div>
                                </Link>
                                
                            </li>
                        ))}
                        
                        
                    </div>
                </div>
            </AnimatePresence>

        </div>
    )
}

export default DropNav