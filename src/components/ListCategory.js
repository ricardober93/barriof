import React, { useEffect, useState } from 'react'
import { data } from 'data/data.js'
import CardItem from './CardItem'
export default function ListCategory() {
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setTimeout(
            () => {
                setloading(true)
            }, 1000)
    }, [])

    return (
        <section className="list">
            <div className="list_title">
                <h3>categorias</h3>
                <button>Ver Todas</button>
            </div>
            {
                loading ?
                    (<section className="list_grid">
                        {
                            data.map(cat => (
                                <CardItem href={"/comercios/" + cat.title} image={cat.image} title={cat.title} key={cat.id} />
                            ))
                        }
                    </section>)
                    : "esperando ..."
            }
        </section>
    )
}
