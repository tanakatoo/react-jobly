import React from "react"
import "./Error.css"
import { v4 as uuid } from "uuid"


const Error = (props) => {
    return (
        <div className="Error">

            {props.msg.map(m => <p key={uuid()}>{m} </p>)}
        </div>
    )
}

export default Error