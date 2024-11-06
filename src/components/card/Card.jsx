'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from "react"

const Card = () => {
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting)
            },
            {
                rootMargin: "-100px",
                threshold: 0.5
            }
        )
        if (cardRef.current) {
            observer.observe(cardRef.current)
        }
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

    return (
        <div ref={cardRef} className={`relative w-[500px] h-[600px] overflow-hidden bg-green-300 transition-all duration-[1200ms] ${isInView ? "opacity-100" : "opacity-0"} `}>
            <div className="w-full h-fit overflow-hidden p-2 bg-purple-400">
                <Image className="w-full p-2 object-contain" src="https://iili.io/dLCAQvS.jpg" width={500} height={500} alt="esta foto" />
            </div>

            <div className="absolute w-full items-start z-10 top-[0%] left-[0%] p-10 gap-3  flex flex-col">
                <div ref={cardRef} className="overflow-hidden h-fit">
                    <h2 className={`font-bold overflow-hidden leading-[1.1rem] text-white text-[1.4rem] transition-all duration-[1200ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] ${isInView ? "opacity-100 translate-y-[0vh]" : "opacity-0 translate-y-[3vh]"} `}>ESTE TITULO</h2>
                </div>
                <div ref={cardRef} className="overflow-hidden h-fit">
                    <p className={`font-regular text-white transition-all duration-[1200ms] leading-[1.1rem] delay-200 ease-[cubic-bezier(0.76, 0, 0.24, 1)] ${isInView ? "opacity-100 translate-y-[0vh]" : "opacity-0 translate-y-[3vh]"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci</p>
                </div>
            </div>
            <div className="absolute z-[1] filter blur-[4rem] w-full h-[20%] inset-0  bg-black">

            </div>
        </div>
    )
}

export default Card