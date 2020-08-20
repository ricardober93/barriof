import React from 'react'
import { AiOutlineArrowLeft, AiFillHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { FaShippingFast, FaMoneyCheckAlt } from "react-icons/fa";
import {ComercioSingleData} from 'data/ComercioSingleData'
import 'styles/comercio.css'
import Resenias from 'components/Resenias';
import WhatsappButton from 'components/WhatsappButton';
export default function Comercio({ params }) {
    return (
        <section className="comercio">
            <header className="comercio_header">
                <nav className="comercio_header_nav">
                    <AiOutlineArrowLeft />
                    <div>
                        <AiFillHeart />
                        <AiOutlineShareAlt />
                    </div>
                </nav>
            </header>
            <section className="servicos_comercio">
                <div className="avatar">
                    <img src={ComercioSingleData.image_url} alt=""/>
                </div>
                <div className="informacion">
                    <div className="title">
                        <h3 className="title_comercio">{decodeURI(params.title)}</h3>
                        <span>Más Informacion</span>
                    </div>
                    <div className="title_categoria">
                        <p>{ComercioSingleData.categoria}</p>
                    </div>
                    <div className="calificacion">
                        <span>{ComercioSingleData.calificacion}</span>
                    </div>
                    <div className="servicios">
                        <FaShippingFast />
                        <FaMoneyCheckAlt />
                    </div>
                    <div className="descripcion">
                        <p>{ ComercioSingleData.descripcion}</p>
                    </div>
                </div>
            </section>
            <section className="grid">
            <Resenias />
            </section>
            <WhatsappButton />
        </section>
    )
}
