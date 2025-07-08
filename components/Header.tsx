'use client'

// import logo from '@/images/logo.png'
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
import { useMobileView } from "@/context/MobileViewContext";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export const Header = () => {
    const pathname = usePathname()
    const router = useRouter()
    const isMobile = useMobileView();

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

            <div className={`relative bg-gradient-to-br from-slate-50 to-gray-100 border-b border-green-200/50 ${isMobile ? 'h-auto py-4' : 'h-32'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                {isMobile ? (
                    <div className="relative z-10 space-y-3 px-4">
                        <div className='flex items-center gap-3 p-3 bg-white/50 rounded-xl shadow-sm'>
                            <div className="p-2 bg-green-600 rounded-full shadow-md">
                                <FaLocationDot size={16} className='text-white' />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-sm text-gray-700">Av. Del Campo 1290</p>
                                <p className='text-gray-500 text-xs font-medium'>(C1427AOP) Capital Federal</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl shadow-sm">
                            <div className="p-2 bg-green-600 rounded-full shadow-md">
                                <FaPhone size={14} className='text-white' />
                            </div>
                            <div className="flex-1">
                                <p className="font-semibold text-sm text-gray-700">4552-1746</p>
                                <p className="text-xs text-gray-500 font-medium">Línea directa</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="relative z-10 h-full flex items-center justify-between px-8 lg:px-16">
                        <div className='group flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg'>
                            <div className="p-3 bg-green-600 rounded-full shadow-lg group-hover:bg-green-700 transition-colors duration-300">
                                <FaLocationDot size={20} className='text-white' />
                            </div>
                            <div className="flex flex-col items-start text-gray-700">
                                <p className="font-semibold text-lg">Av. Del Campo 1290</p>
                                <p className='text-gray-500 text-sm font-medium'>(C1427AOP) Capital Federal</p>
                            </div>
                        </div>

                        <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 hover:shadow-lg">
                            <div className="p-3 bg-green-600 rounded-full shadow-lg group-hover:bg-green-700 transition-colors duration-300">
                                <FaPhone size={18} className='text-white' />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold text-lg text-gray-700">+54 9 11 2349-7999</p>
                                <p className="text-sm text-gray-500 font-medium">Línea directa</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
                <div className="relative group">
                    <div className="absolute inset-0 bg-white rounded-full blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-white px-6 py-4 rounded-full shadow-2xl ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-300 group-hover:scale-105">
                        <Image
                            src='/images/logo.png'
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
        <div className="relative z-10 h-full flex items-center justify-between px-4">
            <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                    <Image
                        src='/images/logo.png'
                        alt="Logo"
                        className="w-12 h-8 object-contain"
                        priority
                    />
                </div>
            </div>

            <div>
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 shadow-lg">
                            <FaBars size={20} className="text-white" />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="top"
                        className="h-auto w-full animate-in slide-in-from-top duration-300 bg-gradient-to-br from-[#2c5530] to-[#4a6b4d] border-b-4 border-green-400"
                    >
                        <div className="flex flex-col gap-4 py-6 px-4">
                            <div className="flex justify-center mb-4 pb-4 border-b border-white/20">
                                <div className="bg-white p-3 rounded-2xl shadow-xl">
                                    <Image
                                        src='/images/logo.png'
                                        alt="Logo"
                                        className="w-20 h-14 object-contain"
                                        priority
                                    />
                                </div>
                            </div>

                            <Link
                                href={'/'}
                                className={`group flex items-center gap-4 px-5 py-4 rounded-xl font-medium text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg border ${pathname === '/' ? 'bg-white/20 text-white shadow-md border-white/30' : 'text-green-100 border-white/10 hover:border-white/20'}`}
                            >
                                <FaHouse size={18} className="transition-transform duration-300 group-hover:scale-110" />
                                <span>Inicio</span>
                            </Link>

                            <button
                                onClick={handleClick}
                                className={`group flex items-center gap-4 px-5 py-4 rounded-xl font-medium text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg border ${pathname === '/services' ? 'bg-white/20 text-white shadow-md border-white/30' : 'text-green-100 border-white/10 hover:border-white/20'}`}
                            >
                                <FaHandshake size={20} className="transition-transform duration-300 group-hover:scale-110" />
                                <span>Servicios</span>
                            </button>

                            <Link
                                href={'/about-us'}
                                className={`group flex items-center gap-4 px-5 py-4 rounded-xl font-medium text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg border ${pathname === '/about-us' ? 'bg-white/20 text-white shadow-md border-white/30' : 'text-green-100 border-white/10 hover:border-white/20'}`}
                            >
                                <FaUserGroup size={18} className="transition-transform duration-300 group-hover:scale-110" />
                                <span>Sobre nosotros</span>
                            </Link>

                            <Link
                                href={'/contact-us'}
                                className={`group flex items-center gap-4 px-5 py-4 rounded-xl font-medium text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg border ${pathname === '/contact-us' ? 'bg-white/20 text-white shadow-md border-white/30' : 'text-green-100 border-white/10 hover:border-white/20'}`}
                            >
                                <FaPenToSquare size={16} className="transition-transform duration-300 group-hover:scale-110" />
                                <span>Contáctanos</span>
                            </Link>

                            <div className="mt-4 pt-4 border-t border-white/20">
                                <div className="bg-white/10 rounded-xl p-4 text-center">
                                    <p className="text-green-100 text-sm mb-2">¿Necesitas ayuda urgente?</p>
                                    <div className="flex items-center justify-center gap-2 text-white font-semibold">
                                        <FaPhone size={16} />
                                        <span>4552-1746</span>
                                    </div>
                                </div>
                            </div>
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
                    <FaHouse size={16} />
                    <span>Inicio</span>
                </Link>
                <button
                    onClick={handleClick}
                    className={`group cursor-pointer flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border border-[#4a6b4d] ${pathname === '/services' ? 'bg-white/20 text-white shadow-md' : 'text-green-100 border-white/10'}`}
                >
                    <FaHandshake size={18} />
                    <span>Servicios</span>
                </button>
            </nav>


            <nav className="flex items-center gap-3">
                <Link
                    href={'/about-us'}
                    className={`group cursor-pointer flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border border-[#4a6b4d] ${pathname === '/about-us' ? 'bg-white/20 text-white shadow-md' : 'text-green-100 border-white/10'}`}
                >
                    <FaUserGroup size={16} />
                    <span>Sobre nosotros</span>
                </Link>
                <Link
                    href={'/contact-us'}
                    className={`group cursor-pointer flex items-center gap-2 px-5 py-2 rounded-xl font-medium text-sm lg:text-base transition-all duration-300 ease-in-out hover:bg-white/15 hover:shadow-lg hover:scale-105 border border-[#4a6b4d] ${pathname === '/contact-us' ? 'bg-white/20 text-white shadow-md' : 'text-green-100 border-white/10'}`}
                >
                    <FaPenToSquare size={14} />
                    <span>Contáctanos</span>
                </Link>
            </nav>
        </div>
    )
}