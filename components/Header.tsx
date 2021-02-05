import Image from 'next/image';
import Link from 'next/link';

export default function Header(){
    return(
        <header className="flex justify-center md:justify-between items-center py-2 md:py-4">
            <Image src="/img/logo.svg" alt="logo" width={150} height={33}/>
        
            <nav className="hidden md:flex space-x-8">
                <Link href="/nextjs">
                    <a className="tracking-wide hover:text-gray-300 ">NextJS</a>
                </Link>
                <Link href="/tailwind">
                    <a className="tracking-wide hover:text-gray-300 ">TailwindCSS</a>
                </Link>
                <Link href="/framermotion">
                    <a className="tracking-wide hover:text-gray-300 ">Frame Motion</a>
                </Link>
            </nav>
        </header>
    );
}