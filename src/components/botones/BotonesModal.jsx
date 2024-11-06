import Link from "next/link"



const BotonesModal = ({ closeModal, selectedImage, className="" }) => {
    return (
        <div className={`flex z-50 ml-[5vw] justify-start absolute inset-0 pt-5 pl-5 gap-2 ${className} `}>
            <button
                onClick={closeModal}
                className="  w-fit h-fit pb-1 hover:bg-white hover:bg-opacity-30 rounded-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-12 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </button>
            <Link className=' h-fit -translate-y-1.5  ' href={selectedImage} target='blank' >
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-14 hover:bg-white hover:bg-opacity-30 rounded-full p-2" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </Link>
        </div>
    )
}

export default BotonesModal