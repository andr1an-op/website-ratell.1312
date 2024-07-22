'use client'

import Link from "next/link"
import Image from "next/image"
import kaos1 from "@/public/ratell.black.png"
import kaos2 from "@/public/ratell.white.png"
import ukuran from "@/public/ukuran.jpg"

export default function Page() {
    const telp = process.env.NEXT_PUBLIC_TELP
    const pesan =`halo saya ingin membeli kaos
    warna:
    size:
    jumlah:
    `
    const link = `https://wa.me/${telp}?text=${pesan}.`
    return (
    <div className="inline-grid display-flex gap-2 ">
    <div className=" px-3 w-90 bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700">
        <a href="#">
            <Image 
            className="rounded-xl"
                src={kaos1}
                alt="ratell"
                width={0}
                height={0}
            />
        </a>
       
        <div className="px-3 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">T-Shirt 1312 </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    Burn The Cops - Black 
                </div>
            </div>
            <div className="flex items-center justify-between space-x-1"> Harga :
                <span className=" text-base font-bold text-gray-900 ">150.000</span>
                
            </div>
            
        </div>
    </div >
     <div className=" px-3 w-90 bg-white border border-gray-800 rounded-lg shadow dark:bg-gray-200 dark:border-gray-700">
     <a href="#">
         <Image 
         className="rounded-xl"
             src={kaos2}
             alt="ratell"
             width={0}
             height={0}
         />
     </a>
     <div className="px-3 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">T-Shirt 1312 </h5>
            </a>
        <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    Burn The Cops - White
                </div>
         </div>
            <div className="flex items-center justify-between"> Harga :
                <span className=" font-bold text-gray-900 text-base ">150.000</span>
            </div>
        </div>
     </div>
        <div>
        <Image 
         className="rounded-xl"
             src={ukuran}
             alt="ratell"
             width={0}
             height={0}
         />
        </div>
             <div className="px-8 justify-center">
                <Link href={link} target="_blank">
                    <button  className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-5 text-center dark:bg-gray-800 dark:hover:bg-gray-500">Klik disini untuk pesan</button>
                </Link>
            </div>
     </div>
     
    
    )
  }