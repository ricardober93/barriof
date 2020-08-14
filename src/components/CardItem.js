import React from 'react'
import { Link } from 'wouter'
export default function CardItem({ href, image, title }) {
    return (
        <Link href={href} className="card">
        <div className="img">
            <img src={image} alt=""/>
        </div>
        <div className="title">
            <h5>{title}</h5>
            </div>
        </Link>
    )
}
