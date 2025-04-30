import logo from '@/images/logo.png'
import Image from 'next/image'

import { FaLocationDot, FaPhone, FaHouse, FaHandshake, FaUserGroup, FaPenToSquare } from "react-icons/fa6";

export const Header = () => {
    return (
        <header className="text-white shadow-lg">
            <div className="h-16 bg-[#7C877B] p-4 flex items-center justify-between px-10 font-semibold">
                <div className="flex items-center gap-10 text-zinc-200 text-lg">
                    <div className='flex items-center gap-2 cursor-pointer hover:text-white transition-all duration-100'>
                        <FaHouse size={20} className='text-zinc-100'/>
                        <p className='border-r-2 border-r-zinc-400 pr-10'>Inicio</p>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:text-white transition-all duration-100'> 
                        <FaHandshake size={22} className='text-zinc-100'/>
                        <p>Servicios</p>
                    </div>
                </div>
                <div className="flex items-center gap-10 text-zinc-200 text-lg">
                    <div className='flex items-center gap-2 cursor-pointer hover:text-white transition-all duration-100'>
                        <FaUserGroup size={20} className='text-zinc-100'/>
                        <p className='border-r-2 border-r-zinc-400 pr-10'>Sobre nosotros</p>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:text-white transition-all duration-100'>
                        <FaPenToSquare size={18} className='text-zinc-100'/>
                        <p>Contactanos</p>
                    </div>
                </div>
            </div>
            <div className="h-28 border-b-2 border-b-green-700/80 bg-[#eaeaea] flex items-center justify-between px-10 font-semibold">
                <div className='flex items-start gap-2'>
                    <FaLocationDot size={25} className='text-[#41413F] mt-1'/>
                    <div className="flex flex-col items-start text-[#41413F]">
                        <p>Av. Del Campo 1290</p>
                        <p className='text-zinc-500 text-sm'>(C1427AOP) Capital Federal</p>
                    </div>
                </div>
                <div className="flex items-center gap-10 text-[#41413F] text-lg">
                    <div className='flex items-center gap-3'>
                        <FaPhone size={18} className='text-[#41413F]'/>
                        <p>Tel. 4552-1746</p>
                    </div>
                </div>
            </div>

            <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                <Image
                    src={logo}
                    alt="Logo"
                    className="w-64 h-40"
                    priority
                />
            </div>
        </header>
    )
}