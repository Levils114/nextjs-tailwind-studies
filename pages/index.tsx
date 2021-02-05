import Layout from "../components/Layout";

import { motion } from 'framer-motion';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-4xl sm:text-6xl lg:7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">Construa sites modernos com agilidade sem precisar sair do HTML</h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-4">
        <Link href="/nextjs">
          <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
            <motion.img layoutId={'nextjs-id'} src="/img/nextjs.svg" alt="nextjs" className="w-full h-full hover:opacity-20 transition"/>
          </div>
        </Link>

        <Link href="/tailwind">
          <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
            <motion.img layoutId={'tailwind-id'} src="/img/tailwind.svg" alt="tailwind" className="w-full h-full hover:opacity-20 transition"/>
          </div>
        </Link>

        <Link href="/framermotion">
          <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
            <motion.img layoutId={'framermotion-id'} src="/img/framermotion.svg" alt="framermotion" className="w-full h-full hover:opacity-20 transition"/>
          </div>
        </Link>
      </div>
    </>
  )
}
