import React from 'react'
import 'styles/button.css'
export default function Button({ text }) {
    return (
        <button className="btn-standar">
            {text}
        </button>
    )
}
