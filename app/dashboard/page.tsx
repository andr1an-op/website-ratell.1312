import Image from "next/image"
import gang from '@/public/gang.jpg'
import kaos from '@/public/baju.jpg'
import yoi from '@/public/logo1.jpg'
import panggih from '@/public/tato-ratel.jpg'
import ratelsalib from '@/public/ratelsalib.jpg'
import stiker from '@/public/stiker.png'

export default function Page() {
    return (
<div className="bg-white dark:bg-gray-200 rounded-xl">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-black capitalize lg:text-4xl ">Gallery</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
                <Image 
                className="object-cover w-full h-56 rounded-lg lg:w-64" 
                src={panggih}
                alt="hehehe"
                
                />

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="https://www.instagram.com/p/C87mckPyfmk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="text-xl font-semibold text-gray-800 hover:underline">
                       @ppinandita and his tattoo
                    </a>
                    
                    <span className="text-sm text-gray-700">On: 12 Juli 2024</span>
                </div>
            </div>

            <div className="lg:flex">
            <Image 
                className="object-cover w-full h-56 rounded-lg lg:w-64" 
                src={ratelsalib}
                alt=""
                
                />
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a className="text-xl font-semibold text-gray-800">
                       next design?
                    </a>

                    <span className="text-sm text-gray-700 ">On: 3 Juli 2024</span>
                </div>
            </div>

            <div className="lg:flex">
            <Image 
                className="object-cover w-full h-56 rounded-lg lg:w-64" 
                src={stiker}
                alt=""
                
                />
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a className="text-xl font-semibold text-gray-800">
                     Our Newest Design
                    </a>

                    <span className="text-sm text-gray-700">On: 15 Maret 2024</span>
                </div>
            </div>

            <div className="lg:flex">
            <Image 
                className="object-cover w-full h-56 rounded-lg lg:w-64" 
                src={yoi}
                alt=""
                
                />
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a className="text-xl font-semibold text-gray-800">
                    Logo pertama ratell.1312
                    </a>

                    <span className="text-sm text-gray-700 ">On: 4 Oktober 2023</span>
                </div>
            </div>

            <div className="lg:flex">
            <Image 
                className="object-cover w-full h-56 rounded-lg lg:w-64" 
                src={kaos}
                alt=""
                
                />
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a className="text-xl font-semibold text-gray-800">
                    Hate pol PP in action
                    </a>

                    <span className="text-sm text-gray-700">On: 25 April 2024</span>
                </div>
            </div>

            <div className="lg:flex">
            <Image 
                className="object-cover w-full h-56 rounded-lg lg:w-64" 
                src={gang}
                alt=""
                
                />
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline">
                     Ratell.1312 Crew
                    </a>
                    
                    <span className="text-sm text-gray-700">On: 29 Mei 2024</span>
                </div>
            </div>
        </div>
    </div>
</div>


    )
  }