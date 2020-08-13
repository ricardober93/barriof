import React from 'react'
import { AiOutlineUser, AiOutlineSearch} from 'react-icons/ai'
export default function FormHome() {
    return (
        <header className="header">
            <div className="header_brand">
                logo.BarrioChat
                 <AiOutlineUser />
            </div>
            <form>
                <div className="header_form">
                <AiOutlineSearch />
                    <input type="text" placeholder="Introduce tu dirección" />
                </div>
            </form>
        </header>
    )
}