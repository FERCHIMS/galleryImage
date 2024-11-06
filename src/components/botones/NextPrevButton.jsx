

const NextPrevButton = ({ prevImage, nextImage }) => {
    return (
        <div className='z-[60] '>
            <button
                onClick={prevImage}
                className="absolute left-5 p-3 ml-[5vw]"
            >
                <svg className="stroke-[#777777a4] hover:stroke-white transition-all duration-[200ms]" width="20" height="55" viewBox="0 0 20 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 1L3 26.9126L18 54" strokeWidth="4" />
                </svg>

            </button>
            <button
                onClick={nextImage}
                className="absolute right-5 p-3 mr-[5vw]"
            >
                <svg className="stroke-[#777777a4] hover:stroke-white transition-all duration-[200ms]" width="20" height="55" viewBox="0 0 20 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 1L17 26.9126L2 54" strokeWidth="4" />
                </svg>

            </button>
        </div>
    )
}

export default NextPrevButton