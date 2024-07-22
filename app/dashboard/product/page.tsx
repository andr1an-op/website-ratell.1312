'use client'

import Link from "next/link"
import Image from "next/image"
import kaos1 from "@/public/ratell.black.png"
import kaos2 from "@/public/ratell.white.png"
import ukuran from "@/public/ukuran.jpg"
import { useEffect, useState } from "react"
import { StaticImageData } from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react";

// Interface untuk image data
interface ImageData {
    src: StaticImageData;
  }
  
  // Image data array
  const images: ImageData[] = [
    {
      src: kaos1,
    },
    {
      src: kaos2,
    },
    {
      src: ukuran,
    },
  ];
  
  export default function ImageSlider(): JSX.Element {
    // Suntuk useState
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    // untuk hover
    const [isHovered, setIsHovered] = useState<boolean>(false);
    //untuk pesan ke whatsapp
    const telp = process.env.NEXT_PUBLIC_TELP
    const pesan =`halo saya ingin membeli kaos
    warna:
    size:
    jumlah:
    `
    const link = `https://wa.me/${telp}?text=${pesan}.`
  
    // Function untuk menampilkan tampilan sebelumnya
    const prevSlide = (): void => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    // Function to show the next slide
    const nextSlide = (): void => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // useEffect hook to handle automatic slide transition
    useEffect(() => {
      // Start interval for automatic slide change if not hovered
      if (!isHovered) {
        const interval = setInterval(() => {
          nextSlide();
        }, 15000);
  
        // Cleanup the interval on component unmount
        return () => {
          clearInterval(interval);
        };
      }
    }, [isHovered]);
  
    // Handle mouse over event
    const handleMouseOver = (): void => {
      setIsHovered(true);
    };
  
    // Handle mouse leave event
    const handleMouseLeave = (): void => {
      setIsHovered(false);
    };
  
    return (
      <div className="relative w-full mx-auto mt-4">
        <div
          className="relative h-[460px] mx-12 group hover:-translate-y-2"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="contain"
            className="rounded-xl transition-all ease-in-out"
          />
        </div>
        <button
          className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-gray-200 mx-1 -mt-[10px] -translate-y-1/2 bg-white text-white p-2 group"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-black group-hover:text-gray-700" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-gray-200 mx-1 -mt-[10px] -translate-y-1/2 bg-white text-white p-2 group"
          onClick={nextSlide}
        >
          <ChevronRight className="text-black group-hover:text-gray-700" />
        </button>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-10 mx-1 ${
                index === currentIndex
                  ? "bg-gray-800 rounded-xl"
                  : "bg-gray-300 rounded-xl"
              } transition-all duration-500 ease-in-out`}
            ></div>
          ))}
        </div>
        <div>
            <div className="flex justify-center">
            <a className="px-11 justify-center">
                deskripsi:
                kaos 24s, di atas XL +5ribu, lengan panjang +10ribu.Po 80ribu.
                Harga: Rp 150.000
            </a>
            </div>
        </div>
        <div className="flex justify-center mt-4">
                <Link href={link} target="_blank">
                    <button  className="text-black hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-9 py-5 text-center dark:bg-gray-300 dark:hover:bg-gray-800">Klik disini untuk pesan</button>
                </Link>
      </div>
     </div>
    );
  }