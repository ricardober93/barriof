import Button from 'components/Button'
import Add from 'icons/Add'
import ChevronRight from 'icons/ChevronRight'
import Like from 'icons/Like'
import List from 'icons/List'
import Star from 'icons/Star'
import Sildes from 'icons/Slides'
import UserAvatar from 'icons/UserAvatar'
import React from 'react'
import 'styles/profile.css'

export default function Profile() {
    return (
        <>
        <section className="profile">
        <h2 className="title">Perfil</h2>
        <div className="paper">
                <div className="userAvatar">
                    <UserAvatar height="100" width="100" />
                    <Button text="Iniciar Sesión" />
                </div> 
                <div className="options">
                    <div className="option">
                        <div className="option_text">
                            <Add height="24" width="24" />
                            <h3>Sugerir Comercio</h3>
                        </div>
                        <ChevronRight />
                    </div>
                    <div className="option">
                        <div className="option_text">
                            <List height="24" width="24" />
                            <h3>Mis Pedidos</h3>
                        </div>
                        <ChevronRight />
                    </div>
                    <div className="option">
                        <div className="option_text">
                            <Like height="24" width="24" />
                            <h3>Guardados</h3>
                        </div>
                        <ChevronRight />
                    </div>
                    <div className="option">
                        <div className="option_text">
                            <Star height="24" width="24" />
                            <h3>Reseñas</h3>
                        </div>
                        <ChevronRight />
                    </div>
                    <div className="option">
                        <div className="option_text">
                            <Sildes height="24" width="24" />
                            <h3>Ajustes</h3>
                        </div>
                        <ChevronRight />
                    </div>
                </div>
        </div>
        </section>
        </>
    )
}
