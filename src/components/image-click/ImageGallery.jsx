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

/*   useEffect(() => {
    if (selectedIndex !== null) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [selectedIndex]); */

  


  return (
    <div className="w-full">
      <div className={`transition-all w-full flex justify-center flex-wrap duration-[1200ms] ${selectedIndex !== null ? "scale-[96%] translate-y-[0.5rem]" : "scale-100 translate-y-0"} `}>

        <GridComp className=''>
          {images.map((image, index) => (
            <AnimComponent
            closeModal={closeModal}
              esto="opacity-100 filter blur-0 contrast-100 invert-0"
              otro="opacity-[45%] filter blur-[2px] contrast-200 invert-[20%] "
              className={`w-full relative transition-all duration-[1200ms] ${selectedIndex !== null ? "opacity-0 grayscale-[150%]  " : "opacity-[100%] grayscale-0 "} `}
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
                className={`rounded-[7rem] p-[4px] object-contain cursor-pointer transition-all duration-[1200ms] z-[60] ${selectedIndex !== null ? "opacity-40 filter blur-[0.2em]  " : "opacity-100 filter blur-none"} `}
                onClick={() => openModal(index)}
              />
            </AnimComponent>
          ))}
        </GridComp>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <div className="w-full flex justify-center">
            <m.div
              /* initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut'}} */
              className={`fixed w-full inset-0 z-20 flex items-center justify-center transition-all duration-[2000ms] ease-[cubic-bezier(0.95,0.05,0.795,0.035)] opacity-100  `}/* ${"backdrop-grayscale"} */
            >
              
              <div onClick={closeModal} className="w-full z-10 absolute inset-0 transition-colors duration-1000">

              </div>
              
              <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut'}}
              className="relative flex justify-center items-center w-full h-full p-4">
                <AnimComponent
                  esto="translate-y-[0vh] scale-100 backdrop-grayscale-100"
                  otro="translate-y-[10vh] scale-[90%] backdrop-grayscale-0"
                  className="transition-all duration-[1000ms] z-20 aspect-auto flex justify-center"
                  
                  
                >
                  <Image
                    quality={100}
                    
                    width={500}
                    height={500}
                    
                    src={images[selectedIndex].src}
                    alt="fotinga"
                    className="relative h-fit w-[100%] z-20 max-w-fit max-h-screen p-2 transition-all duration-[1200ms]"
                    
                  />
                  
                  {/* <div onClick={closeModal} className={`absolute right-[1] blur-[10em] w-[150%] h-[200%] z-[10] bg-black transition-all duration-[1200ms] delay-700 ${selectedIndex !== null ? "opacity-100" : "opacity-0"} `}></div> */}
                </AnimComponent>
                <BotonesModal className='z-[10] w-fit h-fit' closeModal={closeModal} selectedImage={images[selectedIndex].src} />

                <NextPrevButton
                  nextImage={nextImage}
                  prevImage={prevImage}
                />

              </m.div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;