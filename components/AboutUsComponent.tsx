
import logo from '@/images/logo.png'
import Image from "next/image"

export const AboutUsComponent = () => {
    return (
        <div className="bg-zinc-100 h-40 flex items-center justify-between px-10">
            <div className='flex flex-col items-start'>
                <h1 className="text-3xl font-serif">Nosotros Somos <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-400'>NG Desinfecciones</span></h1>
                <p className="text-zinc-500 mt-2">
                    Expertos en desinfección y control de plagas para hogares y empresas.
                </p>
                <button className="bg-zinc-200 border border-zinc-400 text-black px-3 py-1 mt-3 cursor-pointer rounded-md hover:bg-white transition">
                    Cotizá tu servicio
                </button>
            </div>

            <div className="">
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