'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import logo from '@/public/logo.png'

export default function Page() {
  return (
      <main className="flex min-h-screen flex-col p-6 ">
      <div className="mt-4 flex grow flex-col gap-3 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div>
            <a className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Welcome to Ratell.1312</strong>
              <p>
                Our Official Website
              </p>
            </a>
          </div>
          <div />
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-gray-200 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-900 hover:text-white md:text-base"
          >
            <span>Masuk</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            className='rounded-lg'
            src={logo}
            alt='logo'
            height={0}
            width={0} />
        </div>
      </div>
    </main>
  );
}
