
import { RiWhatsappFill } from "react-icons/ri";

export const WhatsappQuickAccess = () => {
    const phone = '5491123497999'
    const message = 'Hola buenas, tengo una consulta...'
    
    return (
        <div className="fixed bottom-5 right-5 z-50 cursor-pointer">
            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`} target="_blank">
                <div className="bg-white rounded-full p-1 shadow-lg">
                    <RiWhatsappFill className="text-6xl text-green-500" />
                </div>
            </a>
        </div>
    )
}