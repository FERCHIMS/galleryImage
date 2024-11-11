import BannerCont from "./BannerCont"
import Text from "../text/Text"
import AnimComponent from "../anim-component/AnimComponent"
import Image from "next/image"

const BannerHome = () => {
    return (

        <BannerCont className="relative ">
            <div className="overflow-hidden grid grid-cols-1 gap-2 lg:grid-cols-2 w-fit p-3 items-top">
                <Text
                    esto="opacity-100 "
                    otro="opacity-[10%] "
                    className="transition-all  h-fit overflow-hidden duration-[1200ms]"
                >
                    <AnimComponent
                        esto="translate-y-[0vh]"
                        otro="translate-y-[5vh]"
                        className="transition-all h-full w-fit duration-[1200ms] ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
                    >
                        <h2 className="text-[4rem] text-white tracking-widest font-black leading-[0.9]">TEXTO DE PRUEBA</h2>
                    </AnimComponent>
                </Text>
                <Text

                    esto="opacity-100 "
                    otro="opacity-[0%] "
                    className="w-fit transition-all delay-[1000ms] duration-[1200ms]"
                >
                    <p className="text-white font-light w-[50%] tracking-widest leading-[1]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatem officiis neque eum amet, explicabo vitae reiciendis corporis aspernatur maxime nisi sequi doloribus pariatur nam debitis est non quam sit!</p>
                </Text>
            </div>
            <AnimComponent
                    esto="opacity-0"
                    otro="opacity-100"
                    className="transition-all delay-700  h-full w-fit duration-[1200ms]"
                    rootMargin="0.1%"
                    /* threshold= {0.5} */
                > 
            <div className=" z-[60] absolute inset-0 w-full h-full  bg-black">

            </div>
            </AnimComponent> 
        </BannerCont >

    )
}

export default BannerHome