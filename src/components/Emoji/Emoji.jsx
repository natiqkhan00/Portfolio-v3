import React from 'react'
import { Span } from './style'

const Emoji = props => (
    <Span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </Span>
)

export default Emoji
