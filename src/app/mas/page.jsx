import getPhotos from "@/components/llamadas/Llamadas"
import Image from "next/image"

const Mas = async () => {
    const photos = await getPhotos()
    return (
        
        <div className="w-full">
        <div className="w-full">
            <h2 className="text-[4rem] sm:text-[6rem] text-white font-black">
                ESTE ES EL NUMERO: {photos.length}
            </h2>
            <div className="w-full bg-pink-400 px-5 gap-3 flex flex-shrink-0 flex-wrap justify-center">
                {photos.map((photo) => (
                    <div key={photo.title} className=" relative responsive-style"  /* style={{flex:"1 1 60%", aspectRatio:"1/2"}} */>
                        <Image className="object-cover " src={photo.src} layout="fill" objectFit="cover" alt="foto" />
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Mas

{/* <div className="w-full">
            <div className="w-full">
                <h2 className="text-[6rem] text-white font-black">
                    ESTE ES EL NUMERO: {photos.length}
                </h2>
                <div className="w-full bg-pink-400 gap-3 flex flex-shrink-0 flex-wrap justify-center">
                    {photos.map((photo) => (
                        <div key={photo.title} className="w-[20%] relative " style={{aspectRatio:"1/1"}}>
                            <Image className="w-fit object-cover" src={photo.src} layout="fill" objectFit="cover" alt="foto" />
                        </div>
                    ))}
                </div>
            </div>
        </div> */}