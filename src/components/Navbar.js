import React from 'react'
import { Link } from 'wouter'
import { AiFillHome, AiOutlineSearch, AiOutlineHeatMap } from 'react-icons/ai'
export default function Navbar() {
    return (
        <nav className="nav">
            <Link href="/home">
                <AiFillHome />Home
            </Link>
            <Link href="/search">
                < AiOutlineSearch />Search
            </Link>
            <Link href="/map">
                <AiOutlineHeatMap /> Map
            </Link>
        </nav>
    )
}

