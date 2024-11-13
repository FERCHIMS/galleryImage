/* import { getPlaiceholder } from "plaiceholder";


export default async function getImage(src) {
    const buffer = await fetch(src) .then(async res => 
        Buffer.from(await res.arrayBuffer())
    )
    const {
        metadata: {height, width} ,
        ...plaiceholder
    } = await getPlaiceholder (buffer, {size:10})

    return {
        ...plaiceholder,
        img: {src, height, width}
    }

} */