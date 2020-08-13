import React, {useEffect, useState} from 'react'
import { data } from 'data/data.js'
import { Link } from 'wouter'
export default function ListCategory() {
    const [loading, setloading] = useState(false)

    useEffect(() => {
        setloading(true)
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
                                <Link href={"/places/"+cat.id} className="card" key={cat.id} >
                                    <div className="img">
                                        <img src={cat.image} alt=""/>
                                    </div>
                                    <div className="title">
                                        <h5>{cat.title}</h5>
                                    </div>
                                </Link>
                            ))
                         }
                        </section>)
                        : "esperando ..."
                }
        </section>
    )
}
