import React from 'react'
import { AiOutlineArrowLeft, AiFillHeart, AiOutlineShareAlt } from 'react-icons/ai'
import {ComercioSingleData} from 'data/ComercioSingleData'
import 'styles/comercio.css'
export default function Comercio({ params }) {
    console.log(params)
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
            <section>
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
                        <span>envios</span>
                        <span>pagos online</span>
                    </div>
                    <div className="descripcion">
                        <p>{ ComercioSingleData.descripcion}</p>
                    </div>
                </div>
                </section>
        </section>
    )
}
