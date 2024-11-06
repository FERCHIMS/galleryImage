'use client'
import { useState, useRef, useEffect } from "react"

const AnimComponent = ({rootMargin, threshold, children, esto, otro, className=""}) => {
    const [isInView, setIsInView] = useState(false);
    const cardRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entries]) => {
                setIsInView(entries.isIntersecting)
            },
            {
                rootMargin: rootMargin,
                threshold: threshold
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
    <div ref={cardRef} className={`${className} ${isInView ? esto : otro} `}>
        {children}
    </div>
  )
}

export default AnimComponent