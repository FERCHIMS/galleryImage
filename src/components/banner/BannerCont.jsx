import Image from "next/image"


const BannerCont = ({children, className=""}) => {
  return (
    <div className={`w-full  relative ${className} `} style={{backgroundImage: `url("https://iili.io/dsS7xJS.webp")`, backgroundSize:"cover", backgroundPosition: 'center', aspectRatio: "1/0.1" }} >
        {children}
        <Image
        className="opacity-[40%]"
        src="https://iili.io/dsV3d9p.png"
        layout="fill"
        objectFit="cover"
        alt="foto"
        />
    </div>
  )
}

export default BannerCont