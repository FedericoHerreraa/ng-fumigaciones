
import backgroundImage from '@/images/fumigacion2.jpeg'

export const Landing = () => {
    return (
        <div className="h-[calc(100vh-176px)] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 z-10">
                <div className='bg-gradient-to-r from-[#73b170] to-[#73b170]/70 px-10 py-4 rounded-lg'>
                    <h1 className='text-5xl text-white font-serif'>NG Desinfecciones</h1>
                </div>
            </div>
        </div>
    )
}