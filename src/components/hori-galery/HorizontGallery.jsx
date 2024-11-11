'use client'
import Image from "next/image"
import { useTransform, useScroll, motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Lenis from "lenis"
import AnimComponent from "../anim-component/AnimComponent"

const images = [
    {
        title: "foto1",
        src: "https://iili.io/2TIrG7S.jpg"
    },
    {
        title: "foto2",
        src: "https://iili.io/2TIrMk7.jpg"
    },
    {
        title: "foto3",
        src: "https://iili.io/2TIrVp9.jpg"
    },
    {
        title: "foto4",
        src: "https://iili.io/2TIQXSf.png"
    },
    {
        title: "foto5",
        src: "https://iili.io/2TIQj94.png"
    },
    {
        title: "foto6",
        src: "https://iili.io/2TIQwAl.png"
    },
    {
        title: "foto7",
        src: "https://iili.io/2TIQNN2.png"
    },
]

const HorizontGallery = () => {
    /* const scrollWrapper = useRef(null);
    const scrollContent = useRef(null); */
    

    /* useEffect(() => {
        const lenis = new Lenis({
            wrapper: scrollWrapper.current,
            content: scrollContent.current,
            orientation: 'horizontal',
            gestureOrientation: 'horizontal',

        })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
        return () => {
            lenis.destroy()
        }
    }, []) */
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])


    return (
        <AnimComponent
        ref={targetRef}
        className="relative h-[900vh] bg-neutral-900"

        >
        
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{x}} className="flex gap-4">
                    {images.map((image) => (

                        <Image key={image.title} className="" src={image.src} width={500} height={500} alt="fotos galeria" />

                    ))}
                </motion.div>
            </div>
        
        </AnimComponent>
    )
}

export default HorizontGallery


/* {images.map((image) => (
    <div key={image.title} className="flex-shrink-0 px-1 bg-orange-300 w-3/4 max-h-[50vh] aspect-video">
        <Image className="w-full h-full object-cover" src={image.src} width={500} height={500} alt="fotos galeria" />
    </div>
))} */