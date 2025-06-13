import logo from '@/images/logo.png'
import Image from "next/image"
import Link from 'next/link'

export const AboutUsComponent = () => {
    return (
        <div className='flex items-center justify-between min-h-[20vh] bg-zinc-100 my-20 shadow-lg px-10 md:py-0 py-10'>
            <div>
                <h1 className="text-3xl font-serif">
                    Nosotros Somos <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-green-500'>NG Desinfecciones</span>
                </h1>
                <p className="text-zinc-500 md:my-3 my-4">
                    Expertos en desinfección y control de plagas para hogares y empresas.
                </p>
                <Link href={'/about-us'} className="bg-zinc-200 border border-green-700/50 text-black px-4 py-2 cursor-pointer rounded-md hover:bg-white transition">
                    Conocenos
                </Link>
            </div>

            <div className="hidden md:block">
                <Image
                    src={logo}
                    alt="Logo"
                    className="w-44 h-28"
                    priority
                />
            </div>
        </div>
    )
}