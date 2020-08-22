import React from "react";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'wouter'
export default function FormHome({ title }) {
    return (
        <header className="header">
            <div className="header_brand">
                {!title ? (
                    <>
                        logo.BarrioChat
            <Link href="/profile"><AiOutlineUser /></Link>
                    </>
                ) : (
                        decodeURI(title)
                    )}
            </div>
            <form>
                <div className="header_form">
                    <AiOutlineSearch />
                    <input type="text" placeholder="Introduce tu dirección" />
                </div>
            </form>
        </header>
    );
}
