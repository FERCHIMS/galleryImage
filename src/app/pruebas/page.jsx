import Image from "next/image"
import Text from "@/components/text/Text"
import AnimComponent from "@/components/anim-component/AnimComponent"
import HorizontGallery from "@/components/hori-galery/HorizontGallery"



const Pruebas = () => {
  return (
    <div className="w-full h-full bg-neutral-900 ">
      {/* <div className="w-full h-screen bg-pink-400 ">
        <Image className="w-full h-full object-cover" src="https://iili.io/2TIQwAl.png" width={1000} height={1000} alt="foto" />
      </div>

      <HorizontGallery /> */}
      //IMAGENES PARA QUE CARGUEN EN SU ESPACIO
      <div className="flex w-full gap-5 justify-center flex-wrap bg-neutral-900">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="relative w-[500px]" style={{aspectRatio: "1/0.5"}}>
            <Image className="w-[20%]"  src="https://iili.io/2TIrVp9.jpg" objectFit="cover" layout="fill"  alt="foto" />
          </div>
        ))}


      </div>
      {/* <Image
        src="https://iili.io/2TIrVp9.jpg"
        width={500}
        height={500}
        alt="imagen"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />  */}
    </div>
  )
}

export default Pruebas