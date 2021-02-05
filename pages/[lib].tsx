import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

interface ILibScreen{
    param: string;
}

export default function LibScreen({ param }: ILibScreen){
    return(
        <div className="flex justify-center items-center flex-col">
            <motion.img layoutId={`${param}-id`} className="w-120 h-33" src={`img/${param}.svg`}/>
        
            <Link href="/"><a className="px-10 py-4 bg-gray-900 text-white rounded hover:bg-gray-200 transition">Voltar</a></Link>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async({ params }) => {
    return({
        props: {
            param: params.lib
        }
    });
}