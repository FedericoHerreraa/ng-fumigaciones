
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const ContactUsView = ({
    formState,
    setFormState,
    sendEmail,
    sendWhatsApp,
    isLoading
}: {
    formState: {
        name: string,
        email: string,
        subject: string,
        message: string
    },
    setFormState: (state: {
        name: string,
        email: string,
        subject: string,
        message: string
    }) => void,
    sendEmail: () => void,
    sendWhatsApp: () => void,
    isLoading: boolean
}) => {
    return (
        <div className="w-[80%] my-20 mx-auto">
            <p className="text-zinc-600 italic">Contactanos</p>
            <h1 className="text-5xl">
                <span className="bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent">
                    Dejanos tu pregunta acá
                </span>
            </h1>
            
            <div className="mt-10">
                <section className="bg-zinc-100/80 h-fit w-3/4 rounded-xl p-10">
                    <form className="flex flex-col gap-5">
                        <div className="flex items-center gap-5 w-full">
                            <div className="w-1/2">
                                <label className="text-zinc-600 ml-2">Nombre completo</label>
                                <Input 
                                    placeholder="Nombre" 
                                    required
                                    className="bg-white"
                                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                                    value={formState.name}
                                />
                            </div>
                            <div className="w-1/2">
                                <label className="text-zinc-600 ml-2">Dirección de correo</label>
                                <Input 
                                    placeholder="Email" 
                                    required
                                    className="bg-white"
                                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                                    value={formState.email}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-zinc-600 ml-2">Indique asunto</label>
                            <Input 
                                placeholder="Asunto" 
                                required
                                className="bg-white"
                                onChange={(e) => setFormState({...formState, subject: e.target.value})}
                                value={formState.subject}
                            />
                        </div>
                        <div>
                            <label className="text-zinc-600 ml-2">Escriba su mensaje</label>
                            <Textarea 
                                placeholder="Mensaje" 
                                required
                                className="bg-white"
                                onChange={(e) => setFormState({...formState, message: e.target.value})}
                                value={formState.message}
                            />
                        </div>
                    </form>
                </section>
                <div className="flex flex-col my-10">
                    <p className="text-zinc-400">Nuestro equipo te contestará a la brevedad por el medio elegido.</p>
                    <div className="flex items-center gap-5">
                        <button
                            onClick={sendEmail} 
                            className="bg-[#596b58] border border-[#596b58] text-white px-6 py-2 rounded-md mt-5 hover:bg-[#4a5e4c] transition-all duration-200 cursor-pointer"
                        >
                            {isLoading ? 'Enviando...' : 'Enviar email'}
                        </button>
                        <button
                            onClick={sendWhatsApp} 
                            className="border border-green-500 text-black px-6 py-2 rounded-md mt-5 hover:bg-green-500/10 cursor-pointer transition-all duration-200"
                        >
                            {isLoading ? 'Enviando...' : 'WhatsApp'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}