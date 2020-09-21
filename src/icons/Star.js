import * as React from "react"

function SvgComponent({ height, width, stroke }) {
    return (
        <svg height={height ? height : 24} viewBox="0 0 21 21" width={width ? width : 24}>
            <path
                d="M10.5 14.5l-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z"
                fill="none"
                stroke={stroke ? stroke : '#000'}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default SvgComponent
