'use client'
import Image from "next/image"
import { useTransform, useScroll, motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import Lenis from "lenis"
import AnimComponent from "../anim-component/AnimComponent"

const images = [
    {
        title: "foto1",
        src: "https://iili.io/djh8UZv.png"
    },
    {
        title: "foto2",
        src: "https://iili.io/dOf2QAg.png"
    },
    /* {
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
    }, */
]

const HorizontGallery = () => {
    const targetRef = useRef(null);
    const scrollWrapper = useRef(null);
    const scrollContent = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${images.length * 110}%`]);

    useEffect(() => {
        if (!scrollWrapper.current || !scrollContent.current) return;
        
        const lenis = new Lenis({
            wrapper: scrollWrapper.current,
            content: scrollContent.current,
            orientation: 'horizontal',
            gestureOrientation: 'horizontal',
            lerp: 0.1,
        });

        function raf(time) {
            lenis.raf(time * 10000);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    

    
    
    

    return (
        <AnimComponent
            className="transition-all delay-300 duration-[1200ms]"
            esto="opacity-100"
            otro="opacity-0"
            rootMargin="0px"
        >
            <div ref={targetRef} className="relative w-full h-[400vh] bg-neutral-900">
                <div
                    ref={scrollWrapper}
                    style={{
                        backgroundImage: `url("https://iili.io/2uJb1Qn.jpg")`,
                        backgroundRepeat: "no-repeat",
                        /* backgroundSize: "cover", */
                    }}
                    className="sticky flex bg-center bg-cover sm:bg-contain  top-0 w-full h-[100vh] overflow-hidden"
                >
                    <motion.div
                        ref={scrollContent}
                        style={{ x }}
                        className={`flex gap-[10%] h-screen`}
                    >
                        {images.map((image) => (
                            <Image
                                key={image.title}
                                className="w-full h-full object-cover"
                                src={image.src}
                                width={700}
                                height={700}
                                alt="fotos galeria"
                            />
                        ))}
                    </motion.div>
                </div>
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