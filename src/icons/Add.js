import * as React from "react"

function Add({ height, width, stroke }) {
    return (
        <svg height={height ? height : 21} viewBox="0 0 21 21" width={width ? width : 21}>
            <g
                fill="none"
                fillRule="evenodd"
                stroke={stroke ? stroke : '#000'}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M10 19c4.438 0 8-3.526 8-7.964C18 6.598 14.438 3 10 3c-4.438 0-8 3.598-8 8.036S5.562 19 10 19zM6 11h8M10 15.056V7z" />
            </g>
        </svg>
    )
}

export default Add