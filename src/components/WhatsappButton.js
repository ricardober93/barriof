import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import 'styles/whatsapp.css'
export default function WhatsappButton() {
    return (
        <button className="btn-whatsapp">
            <FaWhatsapp /> Enviar WhatsApp
        </button>
    )
}
