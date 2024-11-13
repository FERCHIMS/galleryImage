/* import Image from "next/image"
import getImage from "@/lib/getIamge"

const DynamicImage = async({url, alt}) => {
    const {base64, img} = await getImage(url)
  return (
    <div>
        <Image
        {...img}
        alt={alt || "" }
        blurDataURL={base64}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    </div>
  )
}

export default DynamicImage */