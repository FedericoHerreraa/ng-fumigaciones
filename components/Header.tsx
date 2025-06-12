'use client'

import logo from '@/images/logo.png'
import Image from 'next/image'
import Link from 'next/link';
import {
    FaLocationDot,
    FaPhone,
    FaHouse,
    FaHandshake,
    FaUserGroup,
    FaPenToSquare,
    FaBars
} from "react-icons/fa6";
import { usePathname, useRouter } from 'next/navigation';
import { scrollToSection } from '@/utils/functions';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export const Header = () => {
    const pathname = usePathname()
    const router = useRouter()
    const isMobile = window.innerWidth < 768;

    const handleClick = () => {
        if (pathname !== '/') {
            router.push('/')
            setTimeout(() => {
                scrollToSection('services')
            }, 300)
        } else scrollToSection('services')
    }

    return (
        <header className="relative text-white shadow-2xl">
            <div className="relative h-20 bg-[#4a6b4d] backdrop-blur-sm">
                {isMobile
                    ? <MobileMenu pathname={pathname} handleClick={handleClick} />
                    : <DesktopMenu pathname={pathname} handleClick={handleClick} />
                }
            </div>

            <div className="relative h-32 bg-gradient-to-br from-slate-50 to-gray-100 border-b border-green-200/50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-between md:px-8 px-3 lg:px-16">
                    <div className='group flex items-start md:gap-4 gap-2 md:p-4 rounded-xl hover:md:bg-white/60 transition-all duration-300 hover:md:shadow-lg'>
                        <div className="p-3 bg-green-600 rounded-full shadow-lg group-hover:bg-green-700 transition-colors duration-300">
                            <FaLocationDot size={20} className='text-white' />
                        </div>
                        <div className="flex flex-col items-start text-gray-700">
                            <p className="font-semibold md:text-lg">Av. Del Campo 1290</p>
                            <p className='text-gray-500 md:text-sm text-xs font-medium'>(C1427AOP) Capital Federal</p>
                        </div>
                    </div>

                    <div className="group flex items-center md:gap-4 gap-2 md:p-4 rounded-xl hover:md:bg-white/60 transition-all duration-300 hover:md:shadow-lg">
                        <div className="p-3 bg-green-600 rounded-full shadow-lg group-hover:bg-green-700 transition-colors duration-300">
                            <FaPhone size={18} className='text-white' />
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold md:text-lg text-gray-700">4552-1746</p>
                            <p className="md:text-sm text-xs text-gray-500 font-medium">Línea directa</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                <div className="relative group">
                    <div className="absolute inset-0 bg-white rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white px-6 py-4 rounded-full shadow-2xl ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-300 group-hover:scale-105">
                        <Image
                            src={logo}
                            alt="Logo"
                            className="w-52 h-32 object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}


const MobileMenu = ({ pathname, handleClick }: { pathname: string, handleClick: () => void }) => {
    return (
        <div className="relative z-10 h-full flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                    <FaHouse size={20} className="text-white" />
                </div>
                <span className="text-white font-semibold text-lg">Fumigaciones</span>
            </div>

            <div>
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20">
                            <FaBars size={20} className="text-white" />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="top"
                        className="h-auto w-full animate-in slide-in-from-top duration-300 bg-gradient-to-br from-[#2c5530] to-[#4a6b4d] border-b-4 border-green-400"
                    >
                        <div className="flex flex-col gap-4 py-8 px-6 my-10">
                            <Link
                                href={'/'}
                                className={`group flex items-center gap-4 px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border ${pathname === '/' ? 'bg-white/20 text-white shadow-md border-white/30' : 'text-green-100 border-white/10 hover:border-white/20'}`}
                            >
                                <FaHouse size={20} className="transition-transform duration-300 group-hover:scale-110" />
                                <span>Inicio</span>
                            </Link>

                            <button
                                onClick={handleClick}
                                className={`group flex items-center gap-4 px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border ${pathname === '/services' ? 'bg-white/20 text-white shadow-md border-white/30' : 'text-green-100 border-white/10 hover:border-white/20'}`}
                            >
                                <FaHandshake size={22} className="transition-transform duration-300 group-hover:scale-110" />
                                <span>Servicios</span>
                            </button>

                            <Link
                                href={'/about-us'}
                                className={`group flex items-center gap-4 px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border ${pathname === '/about-us' ? 'bg-white/20 text-white shadow-md border-white/30' : 'text-green-100 border-white/10 hover:border-white/20'}`}
                            >
                                <FaUserGroup size={20} className="transition-transform duration-300 group-hover:scale-110" />
                                <span>Sobre nosotros</span>
                            </Link>

                            <Link
                                href={'/contact-us'}
                                className={`group flex items-center gap-4 px-6 py-4 rounded-xl font-medium text-lg transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border ${pathname === '/contact-us' ? 'bg-white/20 text-white shadow-md border-white/30' : 'text-green-100 border-white/10 hover:border-white/20'}`}
                            >
                                <FaPenToSquare size={18} className="transition-transform duration-300 group-hover:scale-110" />
                                <span>Contáctanos</span>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

const DesktopMenu = ({ pathname, handleClick }: { pathname: string, handleClick: () => void }) => {
    return (
        <div className="relative z-10 h-full flex items-center justify-between px-8 lg:px-16">
            <nav className="flex items-center gap-3">
                <Link
                    href={'/'}
                    className={`group cursor-pointer flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border border-[#4a6b4d] ${pathname === '/' ? 'bg-white/20 text-white shadow-md' : 'text-green-100 border-white/10'}`}
                >
                    <FaHouse size={16} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>Inicio</span>
                </Link>
                <button
                    onClick={handleClick}
                    className={`group cursor-pointer flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border border-[#4a6b4d] ${pathname === '/services' ? 'bg-white/20 text-white shadow-md' : 'text-green-100 border-white/10'}`}
                >
                    <FaHandshake size={18} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>Servicios</span>
                </button>
            </nav>


            <nav className="flex items-center gap-3">
                <Link
                    href={'/about-us'}
                    className={`group cursor-pointer flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border border-[#4a6b4d] ${pathname === '/about-us' ? 'bg-white/20 text-white shadow-md' : 'text-green-100 border-white/10'}`}
                >
                    <FaUserGroup size={16} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>Sobre nosotros</span>
                </Link>
                <Link
                    href={'/contact-us'}
                    className={`group cursor-pointer flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border border-[#4a6b4d] ${pathname === '/contact-us' ? 'bg-white/20 text-white shadow-md' : 'text-green-100 border-white/10'}`}
                >
                    <FaPenToSquare size={14} className="transition-transform duration-300 group-hover:scale-110" />
                    <span>Contáctanos</span>
                </Link>
            </nav>
        </div>
    )
}