import { React, useState, useContext } from "react"
import { Navbar, NavbarBrand, Nav, NavbarText } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"
import { UserContext } from "./context/UserContext";

const NavBar = (props) => {
    const user = useContext(UserContext)
    const handleLogout = () => {
        props.logOut()

    }
    return (
        <Navbar color="dark" dark={true} className="NavBar">
            <NavbarBrand href="/">Jobly</NavbarBrand>
            <Nav >
                {user ?
                    <>
                        <NavLink to="/companies/" className="NavBar-Link">Companies</NavLink>
                        <NavLink className="NavBar-Link" to="/jobs">Jobs</NavLink>
                        <NavLink className="NavBar-Link" to="/profile">Profile</NavLink>
                        <NavLink className="NavBar-Link" to="/logout">Log out</NavLink>
                    </>
                    : <>
                        <NavLink className="NavBar-Link" to="/login">Login</NavLink>
                        <NavLink className="NavBar-Link" to="/signup">Sign up</NavLink>
                    </>
                }
            </Nav>
        </Navbar>)
}

export default NavBar