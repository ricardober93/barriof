import React from 'react'
import { Link } from 'wouter'
export default function CardItem({ href, image, title, categoria, distancia, calificacion }) {
    return (
        <Link href={href} className="card">
            <div className="img">
                <img src={image} alt="" />
            </div>
            
            {
                distancia ?
                    <>
                        <div className="card_title">
                            <h5>{title}</h5>
                        </div>
                        <div className="card_categoria">
                            <p>{categoria}</p>
                        </div>
                        <div className="card_valoracion">
                            <span> {distancia} m </span>
                            <span className="star"> { calificacion } </span>
                        </div>
                    </> :
                    <>
                        <div className="title">
                            <h5>{title}</h5>
                        </div>
                    </>
            }
        </Link>
    )
}
