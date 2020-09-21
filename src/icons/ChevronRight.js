import * as React from "react"

function ChevronRight({ height, width, stroke }) {
    return (
        <svg height={height ? height : 24} viewBox="0 0 21 21" width={width ? width : 24}>
            <path
                d="M9.5 14.5l4-4-4-4"
                fill="none"
                stroke={stroke ? stroke : '#000'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ChevronRight
