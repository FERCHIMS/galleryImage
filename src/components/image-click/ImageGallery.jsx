'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion as m, AnimatePresence } from 'framer-motion';
import AnimComponent from '../anim-component/AnimComponent';
import BotonesModal from '../botones/BotonesModal';
import NextPrevButton from '../botones/NextPrevButton';
import GridComp from '../grid-comp/GridComp';

const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  /* useEffect(() => {
    if (selectedIndex !== null) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedIndex]);
 */
  return (
    <div className="w-full">
      <div className={`transition-all w-full flex justify-center flex-wrap duration-[1200ms] ${selectedIndex ? "scale-[96%] translate-y-[0.5rem]" : "scale-100 translate-y-0"} `}>

        <GridComp className=''>
          {images.map((image, index) => (
            <AnimComponent
              esto="opacity-100 filter blur-0 contrast-100 invert-0"
              otro="opacity-[45%] filter blur-[2px] contrast-200 invert-[20%] "
              className="  transition-all duration-[1200ms]  "
              rootMargin="-50px"
              threshold="0.5"
              key={index}
            >
              <Image
                width={700}
                height={700}
                /* key={index} */
                src={image.src}
                alt="foto alt"
                quality={50}
                className={`rounded-[7rem] p-[4px] object-contain cursor-pointer transition-all duration-[1200ms] z-[60] ${selectedIndex ? "opacity-40 blur-[1em]" : "opacity-100 blur-none"} `}
                onClick={() => openModal(index)}
              />
            </AnimComponent>
          ))}
        </GridComp>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <div className='w-full flex justify-center'>

            <m.div

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0, ease: 'easeInOut'}}
              className={`fixed w-full inset-0 z-20 flex items-center justify-center transition-all duration-[1200ms] opacity-100 ${selectedIndex ? " backdrop-grayscale	" : ""} `}
            >
              <div className="relative flex justify-center items-center w-full h-full p-4">
                <AnimComponent
                  esto="opacity-100"
                  otro="opacity-0"
                  className="transition-all duration-[1000ms]"
                  rootMargin="-100px"
                  threshold="0.5"

                >
                  <Image
                    quality={100}
                    layout="fill"
                    objectFit="contain"
                    src={images[selectedIndex].src}
                    alt="fotinga"
                    className="relative z-[60] p-2 transition-all duration-[1200ms]"

                  />
                  {/* <div className={`w-full z-[50] top-0 left-0 absolute h-full bg-green-300 transition-all duration-[1200ms]  ${selectedIndex ? "bg-opacity-40 translate-y-0" : "bg-opacity-0 translate-y-[20vh]"} `}>

                  </div> */}
                </AnimComponent>
                <BotonesModal className='z-[60] ' closeModal={closeModal} selectedImage={images[selectedIndex].src} />

                <NextPrevButton
                  nextImage={nextImage}
                  prevImage={prevImage}
                />

              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;