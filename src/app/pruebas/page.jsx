import Image from "next/image"
import Text from "@/components/text/Text"
import AnimComponent from "@/components/anim-component/AnimComponent"
import HorizontGallery from "@/components/hori-galery/HorizontGallery"

const Pruebas = () => {
  return (
    <div className="w-full ">
      <div className="w-full h-screen bg-pink-400 ">
        <Image className="w-full h-full object-cover" src="https://iili.io/2TIQwAl.png" width={1000} height={1000} alt="foto" />
      </div>

      <HorizontGallery />
      <div className="flex flex-col items-center bg-neutral-900">
        <Image src="https://iili.io/2TIrVp9.jpg" width={1000} height={1000} alt="foto" />
        <Image src="https://iili.io/2TIrVp9.jpg" width={1000} height={1000} alt="foto" />
        <Image src="https://iili.io/2TIrVp9.jpg" width={1000} height={1000} alt="foto" />
        <Image src="https://iili.io/2TIrVp9.jpg" width={1000} height={1000} alt="foto" />
        <Image src="https://iili.io/2TIrVp9.jpg" width={1000} height={1000} alt="foto" />
        <Image src="https://iili.io/2TIrVp9.jpg" width={1000} height={1000} alt="foto" />
        <Image src="https://iili.io/2TIrVp9.jpg" width={1000} height={1000} alt="foto" />
      </div>
    </div>
  )
}

export default Pruebas