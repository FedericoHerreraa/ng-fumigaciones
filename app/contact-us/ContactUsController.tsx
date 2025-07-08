'use client'

import { ContactUsView } from "./ContactUsView"
import { useState } from "react"
import { toast } from "sonner"

export const ContactUsController = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const cleanForm = () => {
        setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    const validateForm = () => {
        if (formState.name === '' || formState.email === '' || formState.subject === '' || formState.message === '') {
            return false
        }
        return true
    }

    const sendEmail = async () => {
        if (!validateForm()) {
            toast.error('Por favor, complete todos los campos')
            return
        }

        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        
        setIsLoading(true)
        const response = await fetch(`${apiUrl}/api/send-email`, {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if (response.ok) {
            toast.success('Email enviado correctamente')
        } else {
            toast.error('Error al enviar el email')
        }
        cleanForm()
        setIsLoading(false)
    }

    const sendWhatsApp = () => {
        const phone = '5491123497999'
        const message = `Hola, me llamo ${formState.name} y quiero contactar con ustedes. Mi email es ${formState.email} y mi mensaje es: ${formState.message}`
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
        window.open(url, '_blank')
        cleanForm()
    }

    return (
        <div>
            <ContactUsView 
                formState={formState}
                setFormState={setFormState}
                sendEmail={sendEmail}
                sendWhatsApp={sendWhatsApp}
                isLoading={isLoading}
            />
        </div>
    )
}