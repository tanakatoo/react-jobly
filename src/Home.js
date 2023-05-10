import React, { useContext } from "react"
import { Card } from "reactstrap"
import NavBar from "./NavBar"
import "./Home.css"
import Btn from "./Btn"
import { UserContext } from "./context/UserContext"

const Home = () => {
    const user = useContext(UserContext)

    return (
        <div className="Home">
            {user ?
                <>
                    <h1>Welcome back, {user.user.username}!</h1>
                    <hr></hr>
                    <h4>All the jobs in one, convenient place.</h4>

                </>
                :
                <>
                    <h1>Welcome to Jobly</h1>
                    <hr></hr>
                    <h4>All the jobs in one, convenient place.</h4>
                    <div>
                        <Btn name="Login" href="/login" color="primary" />
                        <Btn name="Sign up" href="/signup" color="primary" />
                    </div>
                </>
            }
        </div>
    )
}

export default Home