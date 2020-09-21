import * as React from "react"

function UserAvatar({ height, width, stroke }) {
    return (
        <svg height={height ? height : 21} viewBox="0 0 21 21" width={width ? width : 21}>
            <g
                fill="none"
                fillRule="evenodd"
                stroke={stroke ? stroke : '#000'}
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(2 2)"
            >
                <circle cx={8.5} cy={8.5} r={8} />
                <path d="M14.5 13.5c-.662-2.274-3.2-3.025-6-3.025-2.727 0-5.27.869-6 3.025m6-11a3 3 0 013 3v1a3 3 0 01-6 0v-1a3 3 0 013-3z" />
            </g>
        </svg>
    )
}

export default UserAvatar
