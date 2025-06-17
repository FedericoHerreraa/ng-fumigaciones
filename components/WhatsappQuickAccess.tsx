
import Image from "next/image";
import whatsappIcon from '@/images/whatsapp-icon.png'

export const WhatsappQuickAccess = () => {
    const phone = '5491123497999'
    const message = 'Hola buenas, tengo una consulta...'

    return (
        <div className="fixed md:bottom-5 md:right-5 bottom-2 right-2 z-50 cursor-pointer hover:scale-110 transition-all duration-300">
            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`} target="_blank">
                <Image
                    src={whatsappIcon}
                    alt="Whatsapp"
                    className="w-12 h-12"
                />
            </a>
        </div>
    )
}