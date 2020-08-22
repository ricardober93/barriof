import * as React from "react"

function Slides({ height, width, stroke }) {
    return (
        <svg height={height ? height : 24} viewBox="0 0 21 21" width={width ? width : 24}>
            <g
                fill="none"
                fillRule="evenodd"
                stroke={stroke ? stroke : '#000'}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M14.5 9V2.5M14.5 18.5V14" />
                <circle cx={14.5} cy={11.5} r={2.5} />
                <path d="M6.5 5V2.5M6.5 18.5V10" />
                <circle cx={6.5} cy={7.5} r={2.5} />
            </g>
        </svg>
    )
}

export default Slides
