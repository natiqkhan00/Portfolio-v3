import React from 'react'
import { Span } from './style'

const Emoji = ({label, symbol}) => (
    <Span
        className="emoji"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </Span>
)

export default Emoji
