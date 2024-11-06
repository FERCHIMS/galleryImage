import AnimComponent from "../anim-component/AnimComponent"


const Text = ({ children, esto, otro, className="", rootMargin, threshold }) => {
    return (
        <AnimComponent
            esto= {esto}
            otro= {otro}
            className={className}
            rootMargin={rootMargin}
            threshold={threshold}
        >
            {children}
        </AnimComponent>
    )
}

export default Text