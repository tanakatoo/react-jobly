import React, { useEffect } from "react"
import { Navigate } from "react-router-dom"

const Logout = ({ logOut }) => {
    useEffect(() => {
        logOut()
    }, [])

    return (
        <>
            < Navigate to="/" />
        </>
    )
}

export default Logout