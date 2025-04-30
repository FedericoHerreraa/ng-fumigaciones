
import backgroundImage from '@/images/fumigacion.webp'

export const Landing = () => {
    return (
        <div className="h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 z-10">
                <div className='bg-zinc-200 px-10 py-4 rounded-xs'>
                    <h1 className='text-3xl font-serif'>NG - Desinfecciones</h1>
                </div>
            </div>
        </div>
    )
}